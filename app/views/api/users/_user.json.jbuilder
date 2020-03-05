
json.info do
    json.extract! user, :id, :username, :email
    json.bookshelves user.shelf_titles
    json.rate do
    user.reviews.each do |review|
        json.set! review.book_id, review.rate
    end
end
end
json.bookshelves do
    user.bookshelves.each do |bookshelf|
        json.set! bookshelf.book_id do  
            json.extract! bookshelf, :id, :user_id, :book_id, :title
        end
    end
end

