# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Edibles
pizza = Edible.create!({name: "Pizza", description: "Bread covered with mozarella cheese and tomato sauce."})
burger = Edible.create!({name: "Cheeseburger", description: "God's gift to the world between two buns."})
fois_gras = Edible.create!({name: "Fois Gras", description: "A duck's liver. Rich and creamy."})
pad_thai = Edible.create!({name: "Pad Thai", description: "Thai noodles with peanuts and other good shit."})
turtle_soup = Edible.create!({name: "Turtle Soup", description: "Once a staple in United States, this forgotten dish fuels the body and warms the soul."})
pumpkin_pie = Edible.create!({name: "Pumpkin Pie", description: "Pumpkins aren't just for jackolanterns."})
mixed_nuts = Edible.create!({name: "Mixed nuts", description: "Different types of nuts mixed together."})
gelato = Edible.create!({name: "Gelato", description: "Ice cream but better than ice cream. Product of Italy."})
pediasure = Edible.create!({name: "Pediasure", description: "A reliable source of nutrition."})
ceviche = Edible.create!({name: "Ceviche", description: "Fish in lime juice, Peruvian origin."})

# Lists
eaten = List.create!({title: "Eaten", user_id: 1, can_delete: false})
want_to_try = List.create!({title: "Want to Try", user_id: 1, can_delete: false})
eat_in_new_orleans = List.create!({title: "Eat in New Orleans", user_id: 1, can_delete: true})
