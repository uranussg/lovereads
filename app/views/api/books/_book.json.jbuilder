json.extract! book, :id, :title, :description, :writer_id, :isbn, :language, :house, :num_pages
json.publish_at book.publish_at.to_s(:long)
json.set! :writer,  book.writer.name
json.set! :tags, book.ordered_tags
json.set! :rate,  book.rate
json.set! :rateDetail, book.rate_detail
if book.cover.attached?
    json.set! :coverUrl,  url_for(book.cover)
end