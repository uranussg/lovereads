class Writer < ApplicationRecord
    validates :name, presence:true
    has_many :books
end
