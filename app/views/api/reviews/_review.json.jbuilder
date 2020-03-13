json.extract! review, :id, :user_id, :book_id, :rate, :body, :updated_at
json.date review.updated_at.to_s(:db)
json.time review.updated_at.to_formatted_s(:number).to_i

json.user review.user.username