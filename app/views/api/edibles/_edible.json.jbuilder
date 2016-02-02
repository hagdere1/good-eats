json.extract!(
  edible,
  :id, :name, :description, :category, :image_url
)

json.image_url asset_path(edible.image_url)
