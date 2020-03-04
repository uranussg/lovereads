class Bookshelf < ApplicationRecord
    validates :user_id, :book_id, :title, presence:true
    validates :book_id, uniqueness:{scope: :user_id}

    belongs_to :user
    belongs_to :book
end
