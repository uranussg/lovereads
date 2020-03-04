
@books_on_shelves.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :writer_id
    end
end
