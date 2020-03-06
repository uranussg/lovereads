json.extract! book, :id, :title, :description, :writer_id, :isbn, :language, :house, :publish_at
json.set! :writer,  book.writer.name
json.set! :rate,  book.rate
json.set! :rateDetail, book.rate_detail
if book.cover.attached?
    json.set! :coverUrl,  url_for(book.cover)
end