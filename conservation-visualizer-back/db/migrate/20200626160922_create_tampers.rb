class CreateTampers < ActiveRecord::Migration[6.0]
  def change
    create_table :tampers do |t|
      t.references :painting, null: false, foreign_key: true
      t.boolean :significant_tamper
      t.boolean :used_program

      t.timestamps
    end
  end
end
