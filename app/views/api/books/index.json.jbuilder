@new_books.each do |new_book|
    json.set! new_book.id do 
        json.extract! new_book, :id, :title
        json.set! :rate,  new_book.rate
        if (new_book.cover.attached?)
            json.set! :coverUrl,  url_for(new_book.cover)
        end
    end
end