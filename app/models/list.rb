class List < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :can_delete, inclusion: { in: [true, false] }
  validates :title, uniqueness: { scope: :user_id, message: "List couldn't be created. List name is a duplicate."}

  belongs_to :user
  has_many :list_items, dependent: :destroy
  has_many :edibles, through: :list_items
end
