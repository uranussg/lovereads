json.extract! bookshelf, :id, :book_id,  :user_id, :title
if book.cover.attached?
    json.set! :coverUrl,  url_for(book.cover)
end