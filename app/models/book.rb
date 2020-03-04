class Book < ApplicationRecord
    validates :title, :writer_id, :description, presence: true
    validates :isbn, uniqueness:true
    def self.new_books
        self.order('publish_at DESC').limit(10)
    end

    def top_rated
        self.all.sort_by { |book| book.rate }.reverse
    end


    has_many :bookshelves
    # belongs_to :writer
end
