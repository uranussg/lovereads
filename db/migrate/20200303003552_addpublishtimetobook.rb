class Addpublishtimetobook < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :publish_at, :datetime
  end
end
