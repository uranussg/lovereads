class Tag < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    has_many :taggings
    has_many :books,  -> { includes :reviews, "cover_attachment": :blob },
        through: :taggings,
        source: :book
    def self.tags_most_in_use
        self.includes(:taggings).all.sort_by { |tag| -tag.taggings.length }.map{|tag| [tag.name, tag.taggings.length]}
    end
    
    def book_num
        self.books.distinct.length
    end
end
