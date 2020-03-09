
json.info do
    json.extract! user, :id, :username, :email
    # json.bookshelves user.shelf_titles
    json.tags user.ordered_tags
    json.bookshelves  user.ordered_bookshelves
    # 382110
    # if(user.reviews.length>0)
    #     json.rate do
    #     user.reviews.each do |review|
    #         json.set! review.book_id, review.rate
    #     end
    # else   
    #     json.rate Object.assgin({})
    # end
    json.rate user.rate

end
json.bookshelves do
    user.bookshelves.each do |bookshelf|
        json.set! bookshelf.book_id do  
            json.extract! bookshelf, :id, :user_id, :book_id, :title
        end
    end
end
json.taggings do

    user.taggings.each do |tagging|
        json.set! tagging.id do  
            json.extract! tagging, :id, :user_id, :book_id, :tag_id
            json.set! :name, tagging.tag.name
        end
    end
end
