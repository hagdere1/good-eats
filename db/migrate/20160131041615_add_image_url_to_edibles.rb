class AddImageUrlToEdibles < ActiveRecord::Migration
  def change
    add_column :edibles, :image_url, :string, null: false
  end
end
