class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :book_id, null:false
      t.integer :rate, null:false
      t.string :body

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :book_id
  end
end
