json.extract!(
  list_item,
  :id, :list_id, :edible_id, :date_eaten
)

json.created_at list_item.created_at.strftime("%B %d, %Y")
json.edible_id list_item.edible_id
json.name list_item.edible.name
json.category list_item.edible.category
json.image_url list_item.edible.image_url
