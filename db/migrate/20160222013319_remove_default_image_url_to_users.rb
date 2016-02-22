class RemoveDefaultImageUrlToUsers < ActiveRecord::Migration
  def change
    change_column :users, :image_url, :string, default: nil
  end
end
