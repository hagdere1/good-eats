json.partial!('list_item', list_item: @list_item)
json.extract!(
  @list_item.edible,
  :id, :name, :description, :category
)
