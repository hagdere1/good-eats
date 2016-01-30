# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Edibles
pizza = Edible.create!({name: "Pizza", description: "Bread covered with mozarella cheese and tomato sauce.", category: "Guilty Pleasures"})
burger = Edible.create!({name: "Cheeseburger", description: "God's gift to the world between two buns.", category: "Guilty Pleasures"})
fois_gras = Edible.create!({name: "Fois Gras", description: "A duck's liver. Rich and creamy.", category: "Expensive"})
pad_thai = Edible.create!({name: "Pad Thai", description: "Thai noodles with peanuts and other goodness.", category: "Asian"})
turtle_soup = Edible.create!({name: "Turtle Soup", description: "Once a staple in United States, this forgotten dish fuels the body and warms the soul.", category: "Adventurous"})
pumpkin_pie = Edible.create!({name: "Pumpkin Pie", description: "Pumpkins aren't just for jackolanterns.", category: "Pastries and Desserts"})
mixed_nuts = Edible.create!({name: "Mixed nuts", description: "Different types of nuts mixed together.", category: "Healthy"})
gelato = Edible.create!({name: "Gelato", description: "Ice cream but better than ice cream. Product of Italy.", category: "Pastries and Desserts"})
pediasure = Edible.create!({name: "Pediasure", description: "A reliable source of nutrition.", category: "Healthy"})
ceviche = Edible.create!({name: "Ceviche", description: "Fish in lime juice, Peruvian origin.", category: "Latin American"})

# Lists

  # Gregory's lists
eaten = List.create!({title: "Eaten", user_id: 1, can_delete: false})
  item_pizza = ListItem.create!({list_id: 1, edible_id: 1})
  item_burger = ListItem.create!({list_id: 1, edible_id: 2})
  item_pad_thai = ListItem.create!({list_id: 1, edible_id: 4})
want_to_try = List.create!({title: "Want to Try", user_id: 1, can_delete: false})
  item_fois_gras = ListItem.create!({list_id: 2, edible_id: 3})
  item_mixed_nuts = ListItem.create!({list_id: 2, edible_id: 7})

  # Harry's lists
eaten = List.create!({title: "Eaten", user_id: 2, can_delete: false})
want_to_try = List.create!({title: "Want to Try", user_id: 2, can_delete: false})
eat_in_new_orleans = List.create!({title: "Eat in New Orleans", user_id: 2, can_delete: true})


# Users
gregory = User.create!({email: "greg@aol.com", name: "Gregory", password_digest: "$2a$10$9CRgBAUVOF2OeytcYz15l.L2zErx7SOBjIwaq7jJJyT1lTggik.4u", session_token: "tUs_0hhW5-xfMQVWTXPoFg"})
harry = User.create!({email: "harry@aol.com", name: "Harry", password_digest: "$2a$10$okYSGm3I/ah6rOLMFjNsaeb4m0wIngp2nmgYuLmx8WrHLCfogVDU2", session_token: "S4FDctdUEIQ2q41j-aA-Nw"})
