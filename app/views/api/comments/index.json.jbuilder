@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.user comment.user
    end
end