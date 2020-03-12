class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
  
    attr_reader :password
  
    after_initialize :ensure_session_token
  
      def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
      end
  
      def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
  
      end
  
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
  
      def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
      end
  
      def reset_session_token!
        
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        return self.session_token
      end
  


    has_many :bookshelves

    has_many :books_on_shelves,
        through: :bookshelves,
        source: :book   
    has_many :reviews
    has_many :reviewed_books,
      through: :reviews,
      source: :book

    def shelf_titles
      self.bookshelves.pluck(:title).uniq
    end

    def ordered_bookshelves
      bookshelves.group(:title).order("COUNT(*) DESC").limit(10).select(:title, 'count(*) as count').map {|bookshelf| [bookshelf.title, bookshelf.count]}.to_h

    end

    def books_on_shelf(shelf)
      Book.joins(bookshelves: :user).where("users.id = ?", self.id).where('bookshelves.title = ?', shelf)
    
    end

    has_many :taggings

    has_many :tags,
      through: :taggings,
      source: :tag  

    has_many :tagged_books,
      through: :taggings,
      source: :book     
    
    has_many :books_under_tags_in_use,
      through: :tags,
      source: :books

      def ordered_tags
        tags.group(:name, :id).order("COUNT(*) DESC").limit(10).select(:name, :id, 'count(*) as count').map {|tag| [tag.id, [tag.name, tag.count]]}.to_h
        
      end

      def rate
        rate = Hash.new()
        self.reviews.each do |review|
          rate[review.book_id] =  review.rate
        end
        rate
      end
      has_many :comment
end
