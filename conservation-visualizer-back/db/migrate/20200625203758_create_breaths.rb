class CreateBreaths < ActiveRecord::Migration[6.0]
  def change
    create_table :breaths do |t|
      t.references :painting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
