@books.each do |book|
    json.set! book.id do 
        json.extract! book, :id, :title
        json.set! :rate,  book.rate
        if (book.cover.attached?)
            json.set! :coverUrl,  url_for(book.cover)
        end
    end
end