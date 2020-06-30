class CreateBumps < ActiveRecord::Migration[6.0]
  def change
    create_table :bumps do |t|
      t.references :painting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
