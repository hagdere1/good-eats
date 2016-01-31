class Edible < ActiveRecord::Base
  validates :name, :description, :category, :image_url, presence: true

  has_many :list_items
end
