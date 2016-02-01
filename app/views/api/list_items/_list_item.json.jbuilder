json.list_item do
  json.id list_item.id
  json.list_id list_item.list_id
  json.edible_id list_item.edible_id
  json.date_eaten list_item.date_eaten
  json.created_at list_item.created_at
  json.name list_item.edible.name
  json.category list_item.edible.category
  json.image_url list_item.edible.image_url
end
