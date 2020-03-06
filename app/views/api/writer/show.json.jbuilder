json.set! @writer.id do
    json.extract! @writer :id, :born, :description
    json.set! :books do
        @writer.books.each do |book|
            json.extract! book, id, :title
            json.set! :rate,  book.rate
            if book.cover.attached?
                json.set! :coverUrl,  url_for(book.cover)
            end
        end
    end
end