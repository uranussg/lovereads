
json.writer do
    json.extract! @writer, :id, :name, :born, :description
    
end
json.books do
    @writer.books.each do |book|
        json.set! book.id do
            json.partial! 'api/books/book', book:book

        end
    end
end