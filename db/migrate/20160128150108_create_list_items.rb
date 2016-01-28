class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.integer :list_id, null: false
      t.integer :edible_id, null: false
      t.integer :rating
      t.text :review
      t.date :date_eaten

      t.timestamps null: false
    end
  end
end
