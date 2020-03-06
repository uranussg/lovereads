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
    belongs_to :writer
    has_many :reviews

    def rate
        self.reviews.map(&:rate).sum * 1.0 / self.reviews.length
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
end