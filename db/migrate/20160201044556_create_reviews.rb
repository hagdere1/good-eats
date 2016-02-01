class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :edible_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      
      t.timestamps null: false
    end
  end
end
