class CreatePaintings < ActiveRecord::Migration[6.0]
  def change
    create_table :paintings do |t|
      t.integer :objectID
      t.timestamps
    end
  end
end
