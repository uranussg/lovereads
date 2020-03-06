json.set! @writer.id do
    json.extract! @writer :id, :born, :description
    json.set! :books, @writer.books
end