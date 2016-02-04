json.extract!(
  list,
  :id, :title, :user_id, :can_delete
)
json.list_items list.list_items
