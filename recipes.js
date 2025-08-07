const recipes = [
  {
    id: 1,
    name: "Veggie Stir Fry",
    category: "veg",
    prepTime: 20,
    image: "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
    ingredients: [
      "Broccoli",
      "Carrot",
      "Bell Pepper",
      "Soy Sauce",
      "Garlic",
      "Olive Oil",
    ],
    instructions:
      "Heat olive oil in a pan. Add garlic and veggies, stir fry for 5-7 minutes. Add soy sauce and cook for another 3 minutes. Serve hot.",
  },
  {
    id: 2,
    name: "Chicken Curry",
    category: "non-veg",
    prepTime: 45,
    image: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
    ingredients: [
      "Chicken",
      "Onion",
      "Tomato",
      "Garlic",
      "Curry Powder",
      "Coconut Milk",
    ],
    instructions:
      "Cook onions and garlic until golden. Add chicken and brown. Add tomatoes and curry powder, simmer 20 mins. Stir in coconut milk and cook until thickened.",
  },
  {
    id: 3,
    name: "Quick Avocado Toast",
    category: "quick",
    prepTime: 10,
    image: "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
    ingredients: [
      "Bread Slices",
      "Avocado",
      "Lemon Juice",
      "Salt",
      "Pepper",
      "Chili Flakes",
    ],
    instructions:
      "Toast the bread. Mash avocado with lemon juice, salt, and pepper. Spread on toast and sprinkle chili flakes on top.",
  },
  // ... Add 27 more recipes below with realistic data, images:
  {
    id: 4,
    name: "Pasta Alfredo",
    category: "veg",
    prepTime: 30,
    image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    ingredients: [
      "Pasta",
      "Butter",
      "Heavy Cream",
      "Parmesan Cheese",
      "Garlic",
      "Parsley",
    ],
    instructions:
      "Cook pasta. In pan, melt butter, add garlic, then cream. Stir in cheese until melted. Toss pasta in sauce. Garnish with parsley.",
  },
  {
    id: 5,
    name: "Beef Steak",
    category: "non-veg",
    prepTime: 40,
    image: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    ingredients: [
      "Beef Steak",
      "Salt",
      "Pepper",
      "Olive Oil",
      "Rosemary",
      "Garlic",
    ],
    instructions:
      "Season steak with salt and pepper. Heat oil in pan. Add rosemary and garlic. Cook steak to desired doneness, flip once.",
  },
  {
    id: 6,
    name: "Mushroom Risotto",
    category: "veg",
    prepTime: 35,
    image: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
    ingredients: [
      "Arborio Rice",
      "Mushroom",
      "Onion",
      "Parmesan Cheese",
      "Butter",
      "Chicken Stock",
    ],
    instructions:
      "Sauté onion and mushrooms in butter. Add rice and toast. Slowly add stock while stirring until rice is cooked. Stir in cheese and serve.",
  },
  {
    id: 7,
    name: "Shrimp Tacos",
    category: "non-veg",
    prepTime: 25,
    image: "https://www.themealdb.com/images/media/meals/psx2f71551171460.jpg",
    ingredients: [
      "Shrimp",
      "Tortillas",
      "Avocado",
      "Red Cabbage",
      "Lime",
      "Cilantro",
    ],
    instructions:
      "Cook shrimp with spices. Warm tortillas. Assemble tacos with shrimp, avocado slices, cabbage, cilantro, and lime juice.",
  },
  {
    id: 8,
    name: "Tomato Soup",
    category: "veg",
    prepTime: 30,
    image: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
    ingredients: [
      "Tomato",
      "Onion",
      "Garlic",
      "Vegetable Stock",
      "Cream",
      "Basil",
    ],
    instructions:
      "Sauté onion and garlic until soft. Add chopped tomatoes and stock, simmer 20min. Puree soup, stir in cream and garnish with basil.",
  },
  {
    id: 9,
    name: "Grilled Salmon",
    category: "non-veg",
    prepTime: 35,
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    ingredients: [
      "Salmon Fillets",
      "Lemon",
      "Garlic",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Marinate salmon with lemon juice, garlic, salt, and pepper. Grill until cooked through and serve hot with lemon wedges.",
  },
  {
    id: 10,
    name: "Kandhari Thalipeeth",
    category: "grandma",
    prepTime: 50,
    image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    ingredients: [
      "1 cup bhajani flour (multi-grain flour: millet, wheat, rice, lentils)",
      "1 onion (finely chopped)",
      "1 tsp sesame seeds",
      "1 tbsp coriander leaves",
      "1 tsp ajwain (carom seeds)",
      "Salt to taste",
      "Water as needed",
      "Ghee for roasting"
    ],
    instructions: [
      "Mix all ingredients with water to form a soft dough.",
      "Press onto banana leaf or plastic to shape into a thick roti.",
      "Cook on tawa with ghee until golden and crispy.",
      "Serve hot with homemade white butter or curd."
    ]

  },
  {
    id: 11,
    name: "Vegetable Quiche",
    category: "veg",
    prepTime: 50,
    image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    ingredients: [
      "Pie Crust",
      "Eggs",
      "Milk",
      "Spinach",
      "Mushrooms",
      "Cheese",
    ],
    instructions:
      "Prebake pie crust. Whisk eggs and milk, add veggies and cheese. Pour into crust and bake until set and golden.",
  },
  
  // 20 more examples, skipped here to save space - replicate the above structure with unique ids from 11 to 30, images from TheMealDB or placeholder images
  
];

// Export for module usage in scripts (if using ES modules)
// export default recipes;