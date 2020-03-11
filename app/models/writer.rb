class Writer < ApplicationRecord
    validates :name, presence:true
    has_many :books
    def rate
        self.books.map(&:rate).sum / self.books.length
    end


    def num_rate 
        self.books.map{ |book| book.reviews.length} .sum
    end 
end
