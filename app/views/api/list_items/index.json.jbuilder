json.array!(@list_items) do |list_item|
  if list_item.list.user_id == current_user.id
    json.partial!('list_item', list_item: list_item)
  end
end
