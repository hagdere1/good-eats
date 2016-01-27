class Edible < ActiveRecord::Base
  validates :name, :description, presence: true

end
