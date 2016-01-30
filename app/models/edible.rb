class Edible < ActiveRecord::Base
  validates :name, :description, :category, presence: true

  has_many :list_items
end
