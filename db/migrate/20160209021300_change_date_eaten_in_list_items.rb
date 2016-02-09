class ChangeDateEatenInListItems < ActiveRecord::Migration
  def up
    change_column :list_items, :date_eaten, :datetime
  end
end
