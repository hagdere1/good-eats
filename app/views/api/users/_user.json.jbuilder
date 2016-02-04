json.extract! user, :id, :name, :email, :created_at
json.created_at user.created_at.strftime("%B %d, %Y")
json.reviews user.reviews
json.list_items do
  json.array!(user.list_items) do |list_item|
    json.partial!('api/list_items/list_item', list_item: list_item)
  end
end
json.lists do
  json.array!(user.lists) do |list|
    json.partial!('api/lists/list', list: list)
    json.list_items list.list_items
  end
end
json.reviews do
  json.array!(user.reviews) do |review|
    json.partial!('api/reviews/review', review: review)
  end
end
