class CreatePaintings < ActiveRecord::Migration[6.0]
  def change
    create_table :paintings do |t|
      t.string :accessionNumber
      t.timestamps
    end
  end
end
