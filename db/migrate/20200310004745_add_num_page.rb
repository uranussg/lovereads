class AddNumPage < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :num_pages, :integer
  end
end
