class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :book_id
      t.integer :tag_id
      t.integer :user_id

      t.timestamps
    end
    add_index :taggings, :book_id
    add_index :taggings, :tag_id
    add_index :taggings, :user_id
  end
end
