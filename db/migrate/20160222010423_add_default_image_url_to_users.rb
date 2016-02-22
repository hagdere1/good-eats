class AddDefaultImageUrlToUsers < ActiveRecord::Migration

  def change
    change_column_default :users, :image_url, default: "http://santetotal.com/wp-content/uploads/2014/05/default-user.png"
  end

end
