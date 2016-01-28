class Edible < ActiveRecord::Base
  validates :name, :description, presence: true

  has_many :list_items
end
