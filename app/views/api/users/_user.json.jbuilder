
json.info do
    json.extract! user, :id, :username, :email
    json.bookshelves user.shelf_titles
end
json.bookshelves do
    user.bookshelves.each do |bookshelf|
        json.set! bookshelf.book_id do  
            json.extract! bookshelf, :id, :user_id, :book_id, :title
        end
    end
end