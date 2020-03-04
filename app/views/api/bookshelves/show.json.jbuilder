
@books_on_shelf.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :writer_id
    end
end
