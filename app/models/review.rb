class Review < ApplicationRecord
    validates :rate, presence: true
    validates :user_id,  uniqueness:{ scope: :book_id }
    validates :rate, inclusion: 1..5
    belongs_to :user

    belongs_to :book
end
