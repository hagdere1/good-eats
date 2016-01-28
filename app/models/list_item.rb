class ListItem < ActiveRecord::Base
  validates :list_id, :edible_id, presence: true
  validates :edible_id, uniqueness: { scope: :list_id, message: "You've already added this item." }

  belongs_to :list
end
