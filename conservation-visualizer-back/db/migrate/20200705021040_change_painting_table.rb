class ChangePaintingTable < ActiveRecord::Migration[6.0]
  def change
    change_table :paintings do |t|
      t.remove :objectID
      t.string :accessionNumber
    end
  end
end
