# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Edibles
pizza = Edible.create!({name: "Pizza",
                        description: "Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy. The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.

                        In 2009, upon Italy's request, Neapolitan pizza was safeguarded in the European Union as a Traditional Speciality Guaranteed dish. The Associazione Verace Pizza Napoletana (the True Neapolitan Pizza Association) is a non-profit organization founded in 1984 with headquarters in Naples. It promotes and protects the 'true Neapolitan pizza'.
                        Pizza is sold fresh, frozen or in portions, and is a common fast food item in the United States. Various types of ovens are used to cook them and many varieties exist. Several similar dishes are prepared from ingredients commonly used in pizza preparation, such as calzone and stromboli.
                        ",
                        category: "Guilty Pleasures",
                        image_url: "/assets/edible_thumbs/pizza.jpg"})

burger = Edible.create!({name: "Cheeseburger",
                        description: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition. The term itself is a portmanteau of the words 'cheese' and 'hamburger.' The cheese is usually added to the cooking hamburger patty shortly before the patty is completely cooked which allows the cheese to melt. Cheeseburgers are often served with lettuce, tomato, onion, pickles, mustard, mayonnaise, ketchup, and occasionally bacon.

                        In fast food restaurants, the cheese used is typically processed cheese, but there are variations, such as cheddar, Swiss cheese, mozzarella cheese, blue cheese and pepper jack. When cheese is added to a burger the nutritional value of the burger can be changed substantially. For example, a slice of Cheddar cheese can add 113 calories and 4.5 grams of saturated fat to a burger. Other types and amounts of cheese would have varying effects, depending on their nutritional content.
                        ",
                        category: "Guilty Pleasures",
                        image_url: "/assets/edible_thumbs/cheese_burger.png"})

fois_gras = Edible.create!({name: "Fois Gras",
                            description: "Foie gras, French for 'fat liver', is a luxury food product made of the liver of a duck or goose that has been specially fattened. By French law, foie gras is defined as the liver of a duck or goose fattened by force-feeding corn with a feeding tube, a process also known as gavage. In Spain and other countries outside France it is occasionally produced using natural feeding. Ducks are force-fed twice a day for 12.5 days and geese three times a day for around 17 days. Ducks are typically slaughtered at 100 days and geese at 112 days.

                            Foie gras is a popular and well-known delicacy in French cuisine. Its flavor is described as rich, buttery, and delicate, unlike that of an ordinary duck or goose liver. Foie gras is sold whole, or is prepared into mousse, parfait, or pâté, and may also be served as an accompaniment to another food item, such as steak. French law states that 'Foie gras belongs to the protected cultural and gastronomical heritage of France.''
                            The technique of gavage dates as far back as 2500 BC, when the ancient Egyptians began keeping birds for food and deliberately fattened the birds through force-feeding. Today, France is by far the largest producer and consumer of foie gras, though it is produced and consumed worldwide, particularly in other European nations, the United States, and China.
                            ",
                            category: "Expensive",
                            image_url: "/assets/edible_thumbs/fois_gras.jpg"})

pad_thai = Edible.create!({name: "Pad Thai",
                          description: "Pad Thai, phat Thai or phad Thai is a stir-fried rice noodle dish commonly served as a street food and at casual local eateries in Thailand. It is made with soaked dried rice noodles, which are stir-fried with eggs and chopped firm tofu, and flavored with tamarind pulp, fish sauce (nampla น้ำปลา), dried shrimp, garlic or shallots, red chili pepper and palm sugar, and served with lime wedges and often chopped roast peanuts. It may also contain other vegetables like bean sprouts, garlic chives, coriander leaves, pickled radishes or turnips (hua chaipo หัวไชโป๊), and raw banana flowers. It may also contain fresh shrimp, crab, squid, chicken or other proteins. Vegetarian versions may substitute soy sauce for the fish sauce and omit the shrimp.",
                          category: "Asian",
                          image_url: "/assets/edible_thumbs/pad_thai.jpg"})

turtle_soup = Edible.create!({name: "Turtle Soup",
                              description: "Turtle soup is soup or stews made from the flesh of the turtle. The dish exists in some cultures and is viewed as a luxury or delicacy. The green turtle was commonly used for turtle soup in Singapore and The United States. Soup made from the snapping turtle was found mainly in the United States. Chinese and other East Asian cuisines use primarily soft-shelled turtles for turtle soup. An alternative form of this dish is the Mock turtle soup.",
                              category: "Adventurous",
                              image_url: "/assets/edible_thumbs/turtle_soup.jpg"})

pumpkin_pie = Edible.create!({name: "Pumpkin Pie",
                              description: "Pumpkin pie is a sweet dessert pie with a spiced, pumpkin-based custard filling. It is often eaten during the fall and early winter. In the United States and Canada, it is usually prepared for Thanksgiving and Christmas, but it is also featured at Halloween. The pumpkin is a symbol of harvest time.

                              The pie consists of a pumpkin-based custard, ranging in colour from orange to brown, baked in a single pie shell, rarely with a top crust. The pie is generally flavored with cinnamon, powdered ginger, nutmeg, and cloves. Allspice is also commonly used, and can replace the clove and nutmeg as its flavor is similar to both combined. Cardamom and vanilla are also sometimes used as batter spices. The spice mixture is called pumpkin pie spice.

                              The pie is often made from canned pumpkin or packaged pumpkin pie filling (spices included), mainly from varieties of Cucurbita moschata.",
                              category: "Pastries and Desserts",
                              image_url: "/assets/edible_thumbs/pumpkin_pie.jpg"})

mixed_nuts = Edible.create!({name: "Mixed nuts",
                            description: "Mixed nuts are a snack food consisting of any mixture of mechanically or manually combined nuts. Peanuts (actually a legume), almonds, walnuts, Brazil nuts, cashews, filberts, hazelnuts, and pecans are common constituents of mixed nuts.[1] Mixed nuts may be salted, roasted, cooked, or blanched.
                            In addition to being eaten directly, mixed nuts can be used in cooking, such as for Tunisian farka, tarts, and toffee. Trail mix consists of nuts mixed with raisins and other dry ingredients.",
                            category: "Healthy",
                            image_url: "/assets/edible_thumbs/mixed_nuts.png"})

gelato = Edible.create!({name: "Gelato",
                        description: "Gelato is the Italian word for 'ice cream', derived from the Latin word gelātus (meaning 'frozen'). In English this word commonly refers to varieties of ice cream made in an Italian style. Gelato can be made with milk, cream, various sugars, and flavoring such as fresh fruit and nut purees. Gelato contains a relatively small amount of air. By statute, gelato in Italy must have at least 3.5% butterfat. It is generally lower in fat, but higher in sugar than other styles of ice cream. Gelato typically contains less air and more flavoring than other kinds of frozen desserts, giving it a density and richness that distinguishes it from the others.
                        The sugar in gelato is balanced with the water to act as an anti-freeze to prevent it from freezing solid. Types of sugar used include sucrose, dextrose, and inverted sugar to control apparent sweetness. Typically, gelato contains a stabilizer base. Commercial bases usually contain guar gum.",
                        category: "Pastries and Desserts",
                        image_url: "/assets/edible_thumbs/gelato.jpg"})

pediasure = Edible.create!({name: "Pediasure",
                            description: "PediaSure provides complete, balanced nutrition that's clinically proven to help kids grow (Studied in children at risk for malnutrition). From the pediatrician recommended brand, this great-tasting shake is a good source of 25 essential vitamins and minerals including antioxidants from vitamins C and E and Selenium, lutein, DHA (32mg of DHA per 8 fl oz serving-20% of 160 mg Daily Value), and prebiotics. It's available in five kid-approved flavors, and has a reclosable bottle.",
                            category: "Healthy",
                            image_url: "/assets/edible_thumbs/pediasure.jpg"})

ceviche = Edible.create!({name: "Ceviche",
                          description: "is a seafood dish popular in the coastal regions of Latin America. The dish is typically made from fresh raw fish cured in citrus juices, such as lemon or lime, and spiced with ají or chili peppers. Additional seasonings, such as chopped onions, salt, and cilantro, may also be added. Ceviche is usually accompanied by side dishes that complement its flavors, such as sweet potato, lettuce, corn, avocado or plantain. As the dish is not cooked with heat, it must be prepared fresh to minimize the risk of food poisoning.
                          Along with an archaeological record suggesting the consumption of a food similar to ceviche nearly 2,000 years ago, historians believe the predecessor to the dish was brought to Peru by Moorish women from Granada, who accompanied the Spanish conquistadors and colonizers, and this dish eventually evolved into what now is considered ceviche.[4][12] Peruvian chef Gastón Acurio further explains the dominant position that Lima held through four centuries as the capital of the Viceroyalty of Peru allowed for popular dishes such as ceviche to be brought to other Spanish colonies in the region, and in time they became a part of local cuisine by incorporating regional flavors and styles.
                          ",
                          category: "Latin American",
                          image_url: "/assets/edible_thumbs/ceviche.jpg"})


# Users
gregory = User.create!({email: "greg@aol.com", name: "Gregory", password_digest: "$2a$10$9CRgBAUVOF2OeytcYz15l.L2zErx7SOBjIwaq7jJJyT1lTggik.4u", session_token: "tUs_0hhW5-xfMQVWTXPoFg"})
harry = User.create!({email: "harry@aol.com", name: "Harry", password_digest: "$2a$10$okYSGm3I/ah6rOLMFjNsaeb4m0wIngp2nmgYuLmx8WrHLCfogVDU2", session_token: "S4FDctdUEIQ2q41j-aA-Nw"})

# Lists

  # Gregory's lists
eaten = List.create!({title: "Eaten", user_id: gregory.id, can_delete: false})
  item_pizza = ListItem.create!({list_id: eaten.id, edible_id: 1})
  item_burger = ListItem.create!({list_id: eaten.id, edible_id: 2})
  item_pad_thai = ListItem.create!({list_id: eaten.id, edible_id: 4})
want_to_try = List.create!({title: "Want to Try", user_id: gregory.id, can_delete: false})
  item_fois_gras = ListItem.create!({list_id: want_to_try.id, edible_id: 3})
  item_mixed_nuts = ListItem.create!({list_id: want_to_try.id, edible_id: 7})

  # Harry's lists
eaten2 = List.create!({title: "Eaten", user_id: harry.id, can_delete: false})
want_to_try2 = List.create!({title: "Want to Try", user_id: harry.id, can_delete: false})
eat_in_new_orleans = List.create!({title: "Eat in New Orleans", user_id: harry.id, can_delete: true})


# Harry's reviews
pizza = Review.create!(user_id: harry.id, edible_id: pizza.id, title: "Just tried pizza...", body: "I just had pizza last night for my 21st. It was okay, but a little too cheesy for my taste.")
