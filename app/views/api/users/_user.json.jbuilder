json.extract! user, :id, :name, :email
json.reviews user.reviews
json.list_items do
  json.array!(user.list_items) do |list_item|
    json.partial!('api/list_items/list_item', list_item: list_item)
  end
end
json.lists do
  json.array!(user.lists) do |list|
    json.partial!('api/lists/list', list: list)
  end
end
