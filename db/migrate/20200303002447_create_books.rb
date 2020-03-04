class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null:false
      t.integer :writer_id, null:false
      t.string :description, null:false
      t.bigint :isbn
      t.string :language
      t.string :house

      t.timestamps
    end
    add_index :books, :title
    add_index :books, :writer_id
    add_index :books, :isbn
  end
end
