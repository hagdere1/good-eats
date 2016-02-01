class Review < ActiveRecord::Base
  validates :user_id, :edible_id, :title, :body, presence: true
  validates :edible_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :edible
end
