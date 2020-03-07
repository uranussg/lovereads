class Tag < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    has_many :taggings
    has_many :books,
        through: :taggings,
        source: :book
    def self.tags_most_in_use
        self.includes(:taggings).all.sort_by { |tag| -tag.taggings.length }.map{|tag| [tag.name, tag.taggings.length]}
    end
    
end
