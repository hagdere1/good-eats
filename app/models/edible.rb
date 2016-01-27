class Edible < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: { scope: :list_id }
  
end
