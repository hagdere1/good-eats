class Review < ActiveRecord::Base
  validates :user_id, :edible_id, :title, :body, presence: true
  validates :edible_id, uniqueness: { scope: :user_id, message: "You've already reviewed this item." }

  belongs_to :user
  belongs_to :edible
end
