class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.integer :user_id, null:false
      t.integer :book_id, mull:false
      t.string :title, null:false

      t.timestamps
    end
    add_index :bookshelves, :user_id
    add_index :bookshelves, :book_id
  end
end
