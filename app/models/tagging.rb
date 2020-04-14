class Tagging < ApplicationRecord
    validates :tag_id, :book_id, presence:true

    validates :user_id, uniqueness:{ scope: [:tag_id, :book_id]}
    belongs_to :user  
    belongs_to :tag  
    belongs_to :book , -> { includes :writer, :reviews, "cover_attachment": :blob }
end
