@tags.each do |tag|
    json.set! tag.id do
        json.extract! tag, :id, :name
        json.book_num tag.book_num
    end
end