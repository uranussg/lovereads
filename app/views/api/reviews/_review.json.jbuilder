json.extract! review, :id, :user_id, :book_id, :rate, :body, :created_at
json.date review.created_at.to_s(:db)
json.time review.created_at.to_formatted_s(:number).to_i

json.user review.user.username