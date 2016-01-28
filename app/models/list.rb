class List < ActiveRecord::Base
  validates :title, :user_id, :can_delete, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "List couldn't be created. List name is a duplicate."}

  has_many :list_items, dependent: :destroy
end
