json.extract! user, :id, :name, :email, :created_at, :image_url
json.created_at user.created_at.strftime("%B %d, %Y")
json.reviews user.reviews

json.list_items do
  json.array!(user.list_items) do |list_item|
    json.list_title list_item.list.title
    json.list_id list_item.list_id
    json.id list_item.id
    json.edible_id list_item.edible_id
  end
end

json.lists do
  json.array!(user.lists) do |list|
    json.id list.id
    json.title list.title
    json.num_list_items list.list_items.length
  end
end

json.reviews do
  json.array!(user.reviews) do |review|
    json.user_id review.user_id
    json.edible_id review.edible_id
    json.edible_name review.edible.name
  end
end
