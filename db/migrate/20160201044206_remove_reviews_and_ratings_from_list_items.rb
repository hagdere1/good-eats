class RemoveReviewsAndRatingsFromListItems < ActiveRecord::Migration
  def change
    remove_column :list_items, :rating
    remove_column :list_items, :review
  end
end
