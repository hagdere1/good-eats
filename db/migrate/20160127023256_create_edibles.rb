class CreateEdibles < ActiveRecord::Migration
  def change
    create_table :edibles do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :list_id
      t.timestamps null: false
    end

    add_index :edibles, :list_id
  end
end
