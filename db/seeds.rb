# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Edible.destroy_all
User.destroy_all
List.destroy_all
ListItem.destroy_all
Review.destroy_all

# Edibles
pizza = Edible.create!({name: "Pizza",
                        description: "Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy. The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.

                        In 2009, upon Italy's request, Neapolitan pizza was safeguarded in the European Union as a Traditional Speciality Guaranteed dish. The Associazione Verace Pizza Napoletana (the True Neapolitan Pizza Association) is a non-profit organization founded in 1984 with headquarters in Naples. It promotes and protects the 'true Neapolitan pizza'.
                        Pizza is sold fresh, frozen or in portions, and is a common fast food item in the United States. Various types of ovens are used to cook them and many varieties exist. Several similar dishes are prepared from ingredients commonly used in pizza preparation, such as calzone and stromboli.
                        ",
                        category: "Guilty Pleasures",
                        image_url: "pizza.jpg"})

burger = Edible.create!({name: "Cheeseburger",
                        description: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition. The term itself is a portmanteau of the words 'cheese' and 'hamburger.' The cheese is usually added to the cooking hamburger patty shortly before the patty is completely cooked which allows the cheese to melt. Cheeseburgers are often served with lettuce, tomato, onion, pickles, mustard, mayonnaise, ketchup, and occasionally bacon.

                        In fast food restaurants, the cheese used is typically processed cheese, but there are variations, such as cheddar, Swiss cheese, mozzarella cheese, blue cheese and pepper jack. When cheese is added to a burger the nutritional value of the burger can be changed substantially. For example, a slice of Cheddar cheese can add 113 calories and 4.5 grams of saturated fat to a burger. Other types and amounts of cheese would have varying effects, depending on their nutritional content.
                        ",
                        category: "Guilty Pleasures",
                        image_url: "cheese_burger.png"})

fois_gras = Edible.create!({name: "Fois Gras",
                            description: "Foie gras, French for 'fat liver', is a luxury food product made of the liver of a duck or goose that has been specially fattened. By French law, foie gras is defined as the liver of a duck or goose fattened by force-feeding corn with a feeding tube, a process also known as gavage. In Spain and other countries outside France it is occasionally produced using natural feeding. Ducks are force-fed twice a day for 12.5 days and geese three times a day for around 17 days. Ducks are typically slaughtered at 100 days and geese at 112 days.

                            Foie gras is a popular and well-known delicacy in French cuisine. Its flavor is described as rich, buttery, and delicate, unlike that of an ordinary duck or goose liver. Foie gras is sold whole, or is prepared into mousse, parfait, or pâté, and may also be served as an accompaniment to another food item, such as steak. French law states that 'Foie gras belongs to the protected cultural and gastronomical heritage of France.''
                            The technique of gavage dates as far back as 2500 BC, when the ancient Egyptians began keeping birds for food and deliberately fattened the birds through force-feeding. Today, France is by far the largest producer and consumer of foie gras, though it is produced and consumed worldwide, particularly in other European nations, the United States, and China.
                            ",
                            category: "Expensive",
                            image_url: "fois_gras.jpg"})

pad_thai = Edible.create!({name: "Pad Thai",
                          description: "Pad Thai, phat Thai or phad Thai is a stir-fried rice noodle dish commonly served as a street food and at casual local eateries in Thailand. It is made with soaked dried rice noodles, which are stir-fried with eggs and chopped firm tofu, and flavored with tamarind pulp, fish sauce (nampla น้ำปลา), dried shrimp, garlic or shallots, red chili pepper and palm sugar, and served with lime wedges and often chopped roast peanuts. It may also contain other vegetables like bean sprouts, garlic chives, coriander leaves, pickled radishes or turnips (hua chaipo หัวไชโป๊), and raw banana flowers. It may also contain fresh shrimp, crab, squid, chicken or other proteins. Vegetarian versions may substitute soy sauce for the fish sauce and omit the shrimp.",
                          category: "Asian",
                          image_url: "pad_thai.jpg"})

turtle_soup = Edible.create!({name: "Turtle Soup",
                              description: "Turtle soup is soup or stews made from the flesh of the turtle. The dish exists in some cultures and is viewed as a luxury or delicacy. The green turtle was commonly used for turtle soup in Singapore and The United States. Soup made from the snapping turtle was found mainly in the United States. Chinese and other East Asian cuisines use primarily soft-shelled turtles for turtle soup. An alternative form of this dish is the Mock turtle soup.",
                              category: "Adventurous",
                              image_url: "turtle_soup.jpg"})

pumpkin_pie = Edible.create!({name: "Pumpkin Pie",
                              description: "Pumpkin pie is a sweet dessert pie with a spiced, pumpkin-based custard filling. It is often eaten during the fall and early winter. In the United States and Canada, it is usually prepared for Thanksgiving and Christmas, but it is also featured at Halloween. The pumpkin is a symbol of harvest time.

                              The pie consists of a pumpkin-based custard, ranging in colour from orange to brown, baked in a single pie shell, rarely with a top crust. The pie is generally flavored with cinnamon, powdered ginger, nutmeg, and cloves. Allspice is also commonly used, and can replace the clove and nutmeg as its flavor is similar to both combined. Cardamom and vanilla are also sometimes used as batter spices. The spice mixture is called pumpkin pie spice.

                              The pie is often made from canned pumpkin or packaged pumpkin pie filling (spices included), mainly from varieties of Cucurbita moschata.",
                              category: "Pastries and Desserts",
                              image_url: "pumpkin_pie.jpg"})

mixed_nuts = Edible.create!({name: "Mixed nuts",
                            description: "Mixed nuts are a snack food consisting of any mixture of mechanically or manually combined nuts. Peanuts (actually a legume), almonds, walnuts, Brazil nuts, cashews, filberts, hazelnuts, and pecans are common constituents of mixed nuts.[1] Mixed nuts may be salted, roasted, cooked, or blanched.
                            In addition to being eaten directly, mixed nuts can be used in cooking, such as for Tunisian farka, tarts, and toffee. Trail mix consists of nuts mixed with raisins and other dry ingredients.",
                            category: "Healthy",
                            image_url: "mixed_nuts.png"})

gelato = Edible.create!({name: "Gelato",
                        description: "Gelato is the Italian word for 'ice cream', derived from the Latin word gelātus (meaning 'frozen'). In English this word commonly refers to varieties of ice cream made in an Italian style. Gelato can be made with milk, cream, various sugars, and flavoring such as fresh fruit and nut purees. Gelato contains a relatively small amount of air. By statute, gelato in Italy must have at least 3.5% butterfat. It is generally lower in fat, but higher in sugar than other styles of ice cream. Gelato typically contains less air and more flavoring than other kinds of frozen desserts, giving it a density and richness that distinguishes it from the others.
                        The sugar in gelato is balanced with the water to act as an anti-freeze to prevent it from freezing solid. Types of sugar used include sucrose, dextrose, and inverted sugar to control apparent sweetness. Typically, gelato contains a stabilizer base. Commercial bases usually contain guar gum.",
                        category: "Pastries and Desserts",
                        image_url: "gelato.jpg"})

pediasure = Edible.create!({name: "Pediasure",
                            description: "PediaSure provides complete, balanced nutrition that's clinically proven to help kids grow (Studied in children at risk for malnutrition). From the pediatrician recommended brand, this great-tasting shake is a good source of 25 essential vitamins and minerals including antioxidants from vitamins C and E and Selenium, lutein, DHA (32mg of DHA per 8 fl oz serving-20% of 160 mg Daily Value), and prebiotics. It's available in five kid-approved flavors, and has a reclosable bottle.",
                            category: "Healthy",
                            image_url: "pediasure.jpg"})

ceviche = Edible.create!({name: "Ceviche",
                          description: "is a seafood dish popular in the coastal regions of Latin America. The dish is typically made from fresh raw fish cured in citrus juices, such as lemon or lime, and spiced with ají or chili peppers. Additional seasonings, such as chopped onions, salt, and cilantro, may also be added. Ceviche is usually accompanied by side dishes that complement its flavors, such as sweet potato, lettuce, corn, avocado or plantain. As the dish is not cooked with heat, it must be prepared fresh to minimize the risk of food poisoning.
                          Along with an archaeological record suggesting the consumption of a food similar to ceviche nearly 2,000 years ago, historians believe the predecessor to the dish was brought to Peru by Moorish women from Granada, who accompanied the Spanish conquistadors and colonizers, and this dish eventually evolved into what now is considered ceviche.[4][12] Peruvian chef Gastón Acurio further explains the dominant position that Lima held through four centuries as the capital of the Viceroyalty of Peru allowed for popular dishes such as ceviche to be brought to other Spanish colonies in the region, and in time they became a part of local cuisine by incorporating regional flavors and styles.
                          ",
                          category: "Latin American",
                          image_url: "ceviche.jpg"})

bagel_with_lox = Edible.create!({name: "Bagel with Lox",
                                description: "Bagel with Lox is the combination of a bagel and lox. Lox is a fillet of brined salmon. Traditionally, lox is served on a bagel with cream cheese, and is usually garnished with tomato, sliced red onion, and sometimes capers. The American English word lox is derived from the Yiddish word for salmon, laks (cf. German Lachs), which ultimately derives from the Indo-European word for salmon, *laks-. The word lox has cognates in numerous Indo-European languages. For example, cured salmon in Scotland and Scandinavian countries is known by different versions of the name Gravlax or gravad laks.",
                                category: "Breakfast",
                                image_url: "bagel-with-cream-cheese-and-lox.jpg"})

gummy_bears = Edible.create!({name: "Gummy Bears",
                              description: "A gummy bear (German: Gummibär) is a small, fruit gum candy, similar to a jelly baby in some English-speaking countries. The candy is roughly 2 cm (0.8 in) long and shaped in the form of a bear. The gummy bear is one of many gummies, popular gelatin-based candies sold in a variety of shapes and colors. The success of gummi bears has spawned the production of many other gummy candies that look like animals and other objects: rings, worms, frogs, snakes, hamburgers, cherries, sharks, penguins, hippos, lobsters, octopuses, apples, peaches, oranges, and even Ampelmännchen, Smurfs, and spiders. Manufacturers offer sizes from the standard candy size, and smaller, to bears that weigh several kilograms.",
                              category: "Candy",
                              image_url: "gummy_bears.png"})

scampi = Edible.create!({name: "Scampi",
                                description: "Scampi includes various culinary preparations of certain crustaceans, commonly Nephrops norvegicus (the Norway lobster, also known as ‘Langoustine’ or ‘Dublin Bay Prawns’ and sometimes itself called ‘scampi’), or a similar lobster such as Metanephrops, as well as shrimp or prawns. Scampi preparation styles vary regionally. While the United Kingdom legally defines scampi specifically as Nephrops norvegicus, other similar lobsters are considered scampi worldwide. Monkfish tail was sometimes illegally used and sold as scampi in the United Kingdom in the past contravening the Fish Labelling (Amendment) England Regulation 2005 and Schedule 1 of the Food Labelling Regulations 1996.",
                                category: "Dinner",
                                image_url: "shrimp_scampi.jpg"})

kimchi = Edible.create!({name: "Kimchi",
                        description: "Kimchi, also spelled kimchee or gimchi, is a traditional fermented Korean side dish made of vegetables with a variety of seasonings. In traditional preparation, kimchi was stored underground in jars to keep cool during the summer months and unfrozen during the winter months. There are hundreds of varieties of kimchi made from napa cabbage, radish, scallion, or cucumber as a main ingredient. ",
                        category: "Asian",
                        image_url: "kimchi.jpg"})

southern_fried_chicken = Edible.create!({name: "Southern Fried Chicken",
                                        description: "Fried chicken (also referred to as Southern fried chicken) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried. The breading adds a crisp coating or crust to the exterior. What separates fried chicken from other fried forms of chicken is that generally the chicken is cut at the joints and the bones and skin are left intact. Crisp well-seasoned skin, rendered of excess fat, is a hallmark of well made fried chicken.",
                                        category: "Soul Food",
                                        image_url: "southern_fried_chicken.jpg"})

# Users
gregory = User.create!({email: "greg@aol.com", name: "Gregory", password_digest: "$2a$10$9CRgBAUVOF2OeytcYz15l.L2zErx7SOBjIwaq7jJJyT1lTggik.4u", session_token: "tUs_0hhW5-xfMQVWTXPoFg", image_url: "http://vignette3.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/d/d9/JoffreyBaratheon.png/revision/latest?cb=20150820170140&path-prefix=fr"})
harry = User.create!({email: "harry@aol.com", name: "Harry", password_digest: "$2a$10$okYSGm3I/ah6rOLMFjNsaeb4m0wIngp2nmgYuLmx8WrHLCfogVDU2", session_token: "S4FDctdUEIQ2q41j-aA-Nw", image_url: "http://coolspotters.com/files/photos/442638/harry-potter-profile.jpg?1357465539"})
jonathan = User.create!(email: "john@aol.com", name: "Jonathan T", password_digest: "$2a$10$P.mVZAz958HcO6QqRomYBene9Va2mKpeGY8NIVN8nxFLnWegoj7rG", session_token: "gBMo8fgTIDifuXkHsetPaA", image_url: "https://lh3.googleusercontent.com/-Xbx9FZzAB0k/AAAAAAAAAAI/AAAAAAAAAGk/hH4JT8CLYt4/photo.jpg")
thomas = User.create!(email: "tom@aol.com", name: "Thomas D", password_digest: "$2a$10$oSO46Xd58LN1aaocmVZoi.1KTMjZQ4ShsXB5Lz7tEQLz/941Rufii", session_token: "tKmr3O53QbmvaaA4r5ChbQ", image_url: "https://qph.is.quoracdn.net/main-thumb-14611353-200-tyrbfenauxizmrvuptzsketlrtxpxhil.jpeg")

# Lists

  # Gregory's lists
want_to_try = List.create!({title: "Want to Try", user_id: gregory.id, can_delete: false})
eaten = List.create!({title: "Eaten", user_id: gregory.id, can_delete: false})
  item_pizza = ListItem.create!({list_id: eaten.id, edible_id: pizza.id})
  item_burger = ListItem.create!({list_id: eaten.id, edible_id: burger.id})
  item_pad_thai = ListItem.create!({list_id: eaten.id, edible_id: pad_thai.id})
  item_mixed_nuts = ListItem.create!({list_id: eaten.id, edible_id: mixed_nuts.id}) #needs review
  item_bagel_with_lox = ListItem.create!({list_id: eaten.id, edible_id: bagel_with_lox.id}) #needs review
  item_fois_gras = ListItem.create!({list_id: eaten.id, edible_id: fois_gras.id}) #needs review
  item_turtle_soup = ListItem.create!({list_id: eaten.id, edible_id: turtle_soup.id}) #needs review


  # Harry's lists
want_to_try2 = List.create!({title: "Want to Try", user_id: harry.id, can_delete: false})
  item_burger2 = ListItem.create!({list_id: want_to_try2.id, edible_id: burger.id})
  item_pad_thai2 = ListItem.create!({list_id: want_to_try2.id, edible_id: pad_thai.id})
eaten2 = List.create!({title: "Eaten", user_id: harry.id, can_delete: false})
  item_mixed_nuts2 = ListItem.create!({list_id: eaten2.id, edible_id: mixed_nuts.id})
  item_kimchi = ListItem.create!({list_id: eaten2.id, edible_id: kimchi.id})
  item_pizza2 = ListItem.create!({list_id: eaten2.id, edible_id: pizza.id})
  item_bagel_with_lox2 = ListItem.create!({list_id: eaten2.id, edible_id: bagel_with_lox.id}) #needs review
new_orleans = List.create!({title: "Eat in New Orleans", user_id: harry.id, can_delete: true})
  item_turtle_soup = ListItem.create!({list_id: new_orleans.id, edible_id: turtle_soup.id})
  item_scampi = ListItem.create!({list_id: new_orleans.id, edible_id: scampi.id})
  item_fois_gras2 = ListItem.create!({list_id: new_orleans.id, edible_id: fois_gras.id})
  item_fried_chicken = ListItem.create!({list_id: new_orleans.id, edible_id: southern_fried_chicken.id})



# Jonathan's lists
want_to_try3 = List.create!({title: "Want to Try", user_id: jonathan.id, can_delete: false})
  item_kimchi2 = ListItem.create!({list_id: want_to_try3.id, edible_id: kimchi.id})
  item_gelato = ListItem.create!({list_id: want_to_try3.id, edible_id: gelato.id})
eaten3 = List.create!({title: "Eaten", user_id: jonathan.id, can_delete: false})
  item_mixed_nuts3 = ListItem.create!({list_id: eaten3.id, edible_id: mixed_nuts.id})
  item_bagel_with_lox = ListItem.create!({list_id: eaten3.id, edible_id: bagel_with_lox.id})
  item_fois_gras3 = ListItem.create!({list_id: eaten3.id, edible_id: fois_gras.id})
  item_turtle_soup = ListItem.create!({list_id: eaten3.id, edible_id: turtle_soup.id})
  item_pizza3 = ListItem.create!({list_id: eaten3.id, edible_id: pizza.id})

# Thomas' lists
thomas_want_to_try = List.create!({title: "Want to Try", user_id: thomas.id, can_delete: false})
thomas_eaten = List.create!({title: "Eaten", user_id: thomas.id, can_delete: false})


# Gregory's reviews
pizza_review_2 = Review.create!(user_id: gregory.id, edible_id: pizza.id, title: "Heaven is a place on earth", body: "What part of heaven did this fall from? This cheesy, saucy, rich food is something the likes of which I have never had the pleasure of putting into my mouth hole. I will never look at anything the same way again!")
burger_review = Review.create!(user_id: gregory.id, edible_id: burger.id, title: "Triple beef patty", body: "I had a cheeseburger with three meats and it was so much meats but I had a great time because it was delicious and this is my review of burger.")
pad_thai_review = Review.create!(user_id: gregory.id, edible_id: pad_thai.id, title: "Thailand noodles are delicious", body: "I went to Thailand and then ate the noodles there and I thought to myself the noodles in Thailand are very good Thai noodles. Then I tried it in American and it was still good noodles too.")
gregory_nuts_review = Review.create!(user_id: gregory.id, edible_id: mixed_nuts.id, title: "So cool!", body: "Holy smokes! So I go to the store the other day and notice an edible I've never noticed before: mixed nuts the bag says. So I say, hey it can't hurt to try something new. Turns out this is one of the most delicious inventions of humankind. Especially tasty with ketchup.")

# Harry's reviews
pizza_review_1 = Review.create!(user_id: harry.id, edible_id: pizza.id, title: "Not what I expected...", body: "My brother and I, when we were small, we would listen to a BBC Radio program every morning called 'Children's Choice.' And they played records suitable for kids to listen to. My brother and I listened to this seriously — we learned all the lyrics to all the songs, and we sang along. And one of them was a Dean Martin hit called 'Amore.' And the song began, 'When the moon hits your eye like a big pizza pie.' Well, my brother and I had never seen a pizza, didn't know what a pizza was; we had never heard the word before, so it made no sense to us. So I thought that what Dean Martin was actually singing was 'When the moon hits your eye like a big piece of pie.' So for years, whenever I was singing along, I would sing those words, until one day somebody said, 'What are you singing?' And I said, 'A big piece of pie.' And he said, 'Idiot, it's pizza pie.' Because I was actually in my twenties before I saw a pizza. I know that will sound bizarre to you, but I grew up in a small community in northern England.")
mixed_nuts_review = Review.create!(user_id: harry.id, edible_id: mixed_nuts.id, title: "I'm nuts for nuts!", body: "Dang, mixed nuts are such a healthy alternative to pizza. But I still like pizza.")
kimchi_review = Review.create!(user_id: harry.id, edible_id: kimchi.id, title: "I never eat Korean food", body: "But when I do I make sure it's kimchi!!!")
harry_bagel = Review.create!(user_id: harry.id, edible_id: bagel_with_lox.id, title: "Meh", body: "Bagels are so hit or miss. Sometimes they're okay but a lot more often they're chewy and get stuck to your teeth. I can't endorse this food product.")
harry_chicken = Review.create!(user_id: harry.id, edible_id: southern_fried_chicken.id, title: "So crispy I want to cry", body: "You can take the girl out of the south, but then how can you be sure she's southern? Despite growing up in East Tennessee, where people do say y'all and drink sweet tea and monogram everything, I've never made fried chicken. I can't even remember anyone in my family making it—my grandmother did, but she was more famous for her dinner rolls and tomato aspic, my mom for her green bean bundles (wrapped in bacon). On the other hand, I eat a lot of fried chicken and have made something of a habit out of sussing out the best restaurants for it in New York (what they're serving at Charles' Fried Chicken and Pies 'n' Thighs are both top of the list).")

# Jonathan's reviews
pizza_review_3 = Review.create!(user_id: jonathan.id, edible_id: pizza.id, title: "Dangerously cheesey", body: "There was so much cheese on this one slice of pizza I thought myself if serious trouble. But then I took a bite and all my fears were assuaged. Happy to report that pizza is a safe item for consumption.")
mixed_nuts_review2 = Review.create!(user_id: jonathan.id, edible_id: mixed_nuts.id, title: "Crunchy", body: "Mixed nuts are quite crunchy. I enjoy them in my salad, where they add a pleasant texture and counterbalance to the tender spinach leaves. Often, I will dump an entire bucket of mixed nuts onto my salad until not one spinach leaf can be spotted. This adds a remarkable quality to the salad.")
bagel_with_lox_review = Review.create!(user_id: jonathan.id, edible_id: bagel_with_lox.id, title: "Nothing like a NYC bagel with lox", body: "I eat bagel with loxes whenever I get the opportunity and what better place in the world than NYC! Bagel with lox is my favorite bagel with a fish.")
turtle_soup_review = Review.create!(user_id: jonathan.id, edible_id: turtle_soup.id, title: "A long forgotten delicacy", body: "Not sure what's going on lately with people not eating turtle soup that much. It's a great way to keep warm in the cold NY winter.")
fois_gras_review = Review.create!(user_id: jonathan.id, edible_id: fois_gras.id, title: "No", body: "I will never eat this ever again. It was not only too soft, but smelled funky and tasted like dog food. Consider this a one word review: DISGUSTING.")

# Thomas's reviews

thomas_pizza_review = Review.create!(user_id: thomas.id, edible_id: pizza.id, title: "All day and all night", body: "All day and all night, Pizza, I dream of thee. Thou art my Muse and thou art my Saviour.")
thomas_burger_review = Review.create!(user_id: thomas.id, edible_id: burger.id, title: "Mickey D's vs. Burger King", body: "BK WINS GET OUT OF HERE!!!!!!!!!!!! Homeboy.")
thomas_pad_thai_review = Review.create!(user_id: thomas.id, edible_id: pad_thai.id, title: "Deez noodles", body: "I like these noodles but I've had better noodles, for example spaghetti with meatballs.")
thomas_nuts_review = Review.create!(user_id: thomas.id, edible_id: mixed_nuts.id, title: "Reminds me of my childhood", body: "In my youth my siblings and I would tread the fields of Patagonia, searching for the best walnut trees. We'd build ladders from the sticks of the forest floor to climb them, collect the walnuts until our burlap sacks were tearing at the seams, and live off our harvest for the winter season. Nostalgia... what a cruel disease of mankind!")
thomas_bagel_with_lox_review = Review.create!(user_id: thomas.id, edible_id: bagel_with_lox.id, title: "Don't care for it", body: "Tried it, too salty.")
thomas_turtle_soup_review = Review.create!(user_id: thomas.id, edible_id: turtle_soup.id, title: "Wow. That's all I can say.", body: "Often in life we shy away from things that give us the creeps. I'm glad I fought against my instinct this time and tried me a bowl of turtle soup. That flavor... So rich. So creamy. So good chunks of snapping turtle breaking between my teeth. Would eat again.")
thomas_fois_gras_review = Review.create!(user_id: thomas.id, edible_id: fois_gras.id, title: "3/5", body: "On one hand, it's made out of ducks, which are cute and tasty. On the other hand, I don't like the color.")
