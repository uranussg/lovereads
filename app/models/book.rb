class Book < ApplicationRecord
    validates :title, :writer_id, :description, presence: true
    validates :isbn, uniqueness:true
    def self.new_books
        self.order('publish_at DESC').limit(15)
    end

    def self.top_rated
        self.all.sort_by { |book| -book.rate }.limit(15)
    end


    has_many :bookshelves
    belongs_to :writer
    has_many :reviews

    def rate
         num = self.reviews.map(&:rate).sum * 1.0 / self.reviews.length
        # Number.parseFloat(num).toPrecision(2)
    end

    def rate_detail
        ret = {}
        (1..5).each do |rate|
         num = self.reviews.where(rate: rate).count
         ret[rate] = num
        end
        ret
    end

    has_one_attached :cover

    has_many :taggings  
    has_many :tags,
        through: :taggings,
        source: :tag

    def ordered_tags
        tags.group(:name, :id).order("COUNT(*) DESC").limit(10).select(:name, :id,'count(*) as count').map {|tag| [tag.id, [tag.name, tag.count]]}.to_h
            
    end
end