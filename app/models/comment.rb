class Comment < ApplicationRecord
    validates :user_id, :review_id, presence:true
    belongs_to :user  
    belongs_to :review
end
