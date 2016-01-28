class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.boolean :can_delete, default: true

      t.timestamps null: false
    end

    add_index :lists, :user_id
  end
end
