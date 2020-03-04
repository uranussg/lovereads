@new_books.each do |new_book|
    json.set! new_book.id do 
        json.extract! new_book, :id, :title
    end
end