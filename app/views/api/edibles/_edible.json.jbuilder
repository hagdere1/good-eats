json.extract!(
  edible,
  :id, :name, :description, :category, :image_url
)

json.reviews do
  json.array!(edible.reviews) do |review|
    json.partial!('api/reviews/review', review: review)
  end
end

json.image_url asset_path(edible.image_url)
