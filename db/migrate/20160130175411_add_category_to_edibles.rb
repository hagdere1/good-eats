class AddCategoryToEdibles < ActiveRecord::Migration
  def up
    add_column :edibles, :category, :string
    change_column_null :edibles, :category, false
  end

  def down
    remove_column :edibles, :category, :string
  end
end
