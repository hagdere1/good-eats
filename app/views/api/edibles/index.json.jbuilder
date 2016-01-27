json.array!(@edibles) do |edible|
  json.partial!('edible', edible: edible)
end
