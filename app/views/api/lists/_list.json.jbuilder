json.extract!(
  list,
  :id, :title, :user_id, :can_delete
)
json.list_items do
  json.array!(list.list_items) do |list_item|
    json.partial!('api/list_items/list_item', list_item: list_item)
  end
end
