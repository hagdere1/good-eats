class Edible < ActiveRecord::Base
  validates :name, :description, :category, :image_url, presence: true

  has_many :list_items
  has_many :lists, through: :list_items, source: :list
  has_many :reviews
end
