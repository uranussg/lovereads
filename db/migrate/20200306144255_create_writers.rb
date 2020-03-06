class CreateWriters < ActiveRecord::Migration[5.2]
  def change
    create_table :writers do |t|
      t.string :name
      t.string :born
      t.string :description

      t.timestamps
    end
  end
end
