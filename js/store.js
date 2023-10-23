// preloader Functionality
setTimeout(function(){
  $('.wrapper').fadeToggle();
}, 3600);


// Clothing data (replace with your data)
const clothingData = [
  //Shirts
  {
    name: "Boys Toddler Nike Static Futura Black/Pink Tee",
    type: "T-Shirts",
    price: 269.95,
    image: "../clothing/nike4.png",
  },
  {
    name: "Nike Sportswear Icon Futura Short Sleeve T-Shirt",
    type: "T-Shirts",
    price: 479.49,
    image: "../clothing/nike5.jpg",
  },
  {
    name: "Nike Sportswear Dri Fit Park Short Sleeve T-Shirt",
    type: "T-Shirts",
    price: 552.49,
    image: "../clothing/nike6.jpg",
  },
  {
    name: "North Face T-shirt Mens",
    type: "T-Shirts",
    price: 400.59,
    image: "../clothing/northface2.jpg",
  },
  {
    name: "North Face Orange",
    type: "T-Shirts",
    price: 450.0,
    image: "../clothing/northface3.jpg",
  },
  {
    name: "The North Face T-shirt Easy",
    type: "T-Shirts",
    price: 300.0,
    image: "../clothing/northface5.jpg",
  },
  {
    name: "Puma Mens Gold",
    type: "T-Shirts",
    price: 700.0,
    image: "../clothing/puma1.jpg",
  },
  {
    name: "Puma Classics Logo",
    type: "T-Shirts",
    price: 361.99,
    image: "../clothing/puma2.jpg",
  },
  {
    name: "Boys Puma Essential lab Red Tee",
    type: "T-Shirts",
    price: 375.95,
    image: "../clothing/pums3.png",
  },

  //long sleeve shirts
  {
    name: "The North Face Mens Standard Black Top",
    type: "Long",
    price: 359,
    image: "../clothing/longsleeve1.png",
  },
  {
    name: "Nike Mens NSW Icon Fleece Grey Top",
    type: "Long",
    price: 449,
    image: "../clothing/longsleeve2.png",
  },
  {
    name: "Nike Dri Fit Park VII Long Sleeve T-Shirt",
    type: "Long",
    price: 337,
    image: "../clothing/longsleeve3.jpg",
  },
  {
    name: "Mens Nike Long Sleeve ",
    type: "Long",
    price: 300,
    image: "../clothing/longsleeve4.webp",
  },
  {
    name: "Nike Long Sleeve Shirt ",
    type: "Long",
    price: 400,
    image: "../clothing/longsleeve5.webp",
  },
  {
    name: "white gold nike shirt ",
    type: "Long",
    price: 500,
    image: "../clothing/longsleeve6.jpg",
  },
  {
    name: "Mens The North Face Long Sleeve Fine Black Tee",
    type: "Long",
    price: 650,
    image: "../clothing/longsleeve7.png",
  },
  {
    name: "The North Face Mens Outdoor Graphic T-shirt",
    type: "Long",
    price: 250,
    image: "../clothing/longsleeve8.jpg",
  },
  {
    name: "The North Face Rogue Graphic Long Sleeve Tee Mens",
    type: "Long",
    price: 490,
    image: "../clothing/longsleeve9.jpg",
  },

  //jeans
  {
    name: "Redbat Mens Medium Blue Skinny Jeans",
    type: "Pants",
    price: 450,
    image: "../clothing/redbatjeans1.png",
  },
  {
    name: "Redbat Mens Blue Jeans",
    type: "Pants",
    price: 550.5,
    image: "../clothing/redbatjean1.png",
  },
  {
    name: "Redbat Mens Black Jeans",
    type: "Pants",
    price: 550.5,
    image: "../clothing/redbatjeans4.png",
  },
  {
    name: "Redbat Mens Medium Black Super Skinny Jeans",
    type: "Pants",
    price: 600.5,
    image: "../clothing/redbatjeans4.png",
  },
  {
    name: "Redbat Mens Blue Skinny Jeans",
    type: "Pants",
    price: 750,
    image: "../clothing/redbatjeans5.jpeg",
  },
  {
    name: "Redbat Mens Light Blue Skinny Jeans",
    type: "Pants",
    price: 665,
    image: "../clothing/redbatjeans6.png",
  },
  {
    name: "Redbat Mens Charcoal Super Skinny Jeans",
    type: "Pants",
    price: 437,
    image: "../clothing/redbatjeans7.png",
  },
  {
    name: "Redbat mens dark blue skinny jeans offer at Sportscene",
    type: "Pants",
    price: 678.11,
    image: "../clothing/redbatjeans8.jpeg",
  },
  {
    name: "Buy Mens Denim Jeans Shop Mens Super Skinny Fit Markham",
    type: "Pants",
    price: 678.11,
    image: "../clothing/redbatjeans9.webp",
  },

  //jerseys & jackets
  {
    name: "Nike Windrunner Mens Jacket Lacrosse",
    type: "Jackets",
    price: 2699,
    image: "../clothing/jacket1.jpg",
  },
  {
    name: "The North Face Mens 1996 Blue Puffer Jacket",
    type: "Jackets",
    price: 6499,
    image: "../clothing/jacket2.png",
  },
  {
    name: "Mens Woven Hooded Jacket Black-Khaki Nike",
    type: "Jackets",
    price: 5500,
    image: "../clothing/jacket4.jpg",
  },
  {
    name: "The North Face Mens Retro Nuptse Jacket ",
    type: "Jackets",
    price: 4500,
    image: "../clothing/northjacket2.jpg",
  },
  {
    name: "Mens 92 Retro Anniversary Nuptse Jacket",
    type: "Jackets",
    price: 3300,
    image: "../clothing/northjacket4.jpg",
  },
  {
    name: "Mens The North Face Resolve Navy Jacket",
    type: "Jackets",
    price: 1199,
    image: "../clothing/northjacket5.png",
  },
  {
    name: "Mens The Northface Seasonal Mountain Black Jacket",
    type: "Jackets",
    price: 2099,
    image: "../clothing/northjacket6.png",
  },
  {
    name: "Mens Puma Manchester City Pre-Match Yellow Jacket",
    type: "Jackets",
    price: 949,
    image: "../clothing/jacket5.png",
  },
  {
    name: "The North Face Mens Olive Green Mountain Jacket",
    type: "Jackets",
    price: 1799,
    image: "../clothing/jacket6.png",
  },

  //Trackpants
  {
    name: "MKM Black Basic Relaxed Jogger",
    type: "Track",
    price: 350.0,
    image: "../clothing/jogger1.png",
  },
  {
    name: "MKM Grey Melange Basic Relaxed Jogger",
    type: "Track",
    price: 350.0,
    image: "../clothing/jogger2.png",
  },
  {
    name: "Younger Boys Basic Relaxed Jogger",
    type: "Track",
    price: 69.0,
    image: "../clothing/jogger3.png",
  },
  {
    name: "Younger Boys Fatigue Colour Block Jogger",
    type: "Track",
    price: 69.0,
    image: "../clothing/jogger4.png",
  },
  {
    name: "Redbat Mens Charcoal Jogger",
    type: "Track",
    price: 229.0,
    image: "../clothing/jogger5.png",
  },
  {
    name: "Mens Nike Sportswear Black Club Fleece Jogger",
    type: "Track",
    price: 899.0,
    image: "../clothing/jogger6.png",
  },
  {
    name: "Mens 1982 Grey Melange Fleece Jogger",
    type: "Track",
    price: 349.0,
    image: "../clothing/jogger7.png",
  },
  {
    name: "Mens TS Heatseal Teal Panelled Jogger",
    type: "Track",
    price: 199.0,
    image: "../clothing/jogger8.png",
  },
  {
    name: "Redbat Mens Black Graphic Jogger",
    type: "Track",
    price: 349.0,
    image: "../clothing/jogger9.png",
  },

  //Headware
  {
    name: "adidas Originals Treefoil Jacquard hat",
    type: "Headwear",
    price: 249.0,
    image: "../clothing/hat1.png",
  },
  {
    name: "RJ White Vertical Colourblocked Bucket Hat",
    type: "Headwear",
    price: 149.0,
    image: "../clothing/hat2.png",
  },
  {
    name: "New Era Red 9Forty Branding Cap",
    type: "Headwear",
    price: 549.0,
    image: "../clothing/hat3.png",
  },
  {
    name: "RJ Black Patented Branding 5 Panel Dart Peak",
    type: "Headwear",
    price: 149.0,
    image: "../clothing/hat4.png",
  },
  {
    name: "adidas Originals Unisex Trefoil Beige Cap",
    type: "Headwear",
    price: 499.0,
    image: "../clothing/hat5.png",
  },
  {
    name: "Mens Light Wash Frayed Denim Bucket Hat",
    type: "Headwear",
    price: 139.0,
    image: "../clothing/hat6.png",
  },
  {
    name: "New Era New York Yankees Orange Adjustable Cap",
    type: "Headwear",
    price: 409.0,
    image: "../clothing/hat7.png",
  },
  {
    name: "Nike Unisex Dri-Fit Giannis H86 Black Cap",
    type: "Headwear",
    price: 409.0,
    image: "../clothing/hat8.png",
  },
  {
    name: "Nike Unisex Futura Wash Sage Cap",
    type: "Headwear",
    price: 499.0,
    image: "../clothing/hat9.png",
  },

  //Watches
  {
    name: "Tempo Mens Silver Plated Blue Multi Dial Bracelet Watch",
    type: "Watches",
    price: 449.0,
    image: "../clothing/watch1.png",
  },
  {
    name: "Tempo Mens Gold Plated Black Dial Bracelet Watch",
    type: "Watches",
    price: 449.0,
    image: "../clothing/watch2.png",
  },
  {
    name: "RJ Blue CASUAL BOLD BRAND SILICONE WATCH",
    type: "Watches",
    price: 199.0,
    image: "../clothing/watch3.png",
  },
  {
    name: "RJ WHITE DBL LAYER RND WATCH",
    type: "Watches",
    price: 299.0,
    image: "../clothing/watch4.png",
  },
  {
    name: "MKM MULTICOLOUR RETRO SQUARE AVIATOR WATCH",
    type: "Watches",
    price: 199.0,
    image: "../clothing/watch5.png",
  },
  {
    name: "Tempo Mens Silver Plated Navy Dial Chronographic Brown Leather Watch",
    type: "Watches",
    price: 679.0,
    image: "../clothing/watch6.png",
  },

  //Sneakers
  {
    name: "Nike Air Force 1 Low White/Red Sneaker",
    type: "Sneakers",
    price: 1299.0,
    image: "../clothing/shoes1.png",
  },
  {
    name: "Nike Air Force 1 Low White/Blue Sneaker",
    type: "Sneakers",
    price: 1299.0,
    image: "../clothing/shoes2.png",
  },
  {
    name: "Nike Air Force 1 LE Black Sneaker",
    type: "Sneakers",
    price: 1299.0,
    image: "../clothing/shoes3.png",
  },
  {
    name: "Nike Air Force 1 Orange Sneaker",
    type: "Sneakers",
    price: 1899.0,
    image: "../clothing/shoes4.png",
  },
  {
    name: "Converse Junior CTAS Mid Fatigue Sneaker",
    type: "Sneakers",
    price: 649.0,
    image: "../clothing/shoes5.png",
  },
  {
    name: "Converse Junior CTAs Edge Glow Sneaker",
    type: "Sneakers",
    price: 699.0,
    image: "../clothing/shoes6.png",
  },

  {
    name: "Converse Junior Chuck Taylor All Star CX",
    type: "Sneakers",
    price: 849.0,
    image: "../clothing/shoes7.png",
  },
  {
    name: "Nike Air Force 1 LE White Sneaker",
    type: "Sneakers",
    price: 1199.0,
    image: "../clothing/shoes8.png",
  },
  {
    name: "Grade School Nike Grey/Blue Court Sneaker",
    type: "Sneakers",
    price: 1099.0,
    image: "../clothing/shoes9.png",
  },
  {
    name: "Vans Junior Old Skool Black/White Sneaker",
    type: "Sneakers",
    price: 949.0,
    image: "../clothing/shoes10.webp",
  },
  {
    name: "Le Coq Sportif Junior Provencale II Low Black Sneaker",
    type: "Sneakers",
    price: 649.0,
    image: "../clothing/shoes11.png",
  },
  {
    name: "Mens Vans Ward Burgundy/White/maroon Sneaker",
    type: "Sneakers",
    price: 499.0,
    image: "../clothing/shoes12.png",
  },

  // Add more clothing item
  //   Womens Section
  // Womens Shirts
  {
    name: "Stripe T-Shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt1.png",
  },
  {
    name: "Stripe T-Shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt2.png",
  },
  {
    name: "Boxy Printed T-Shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt3.png",
  },
  {
    name: "Miami Oversized T-shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt4.png",
  },
  {
    name: "Collegiate Oversized T-Shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt5.png",
  },
  {
    name: "Younger Girls Grey Melange Graphic Print T-Shirt",
    type: "WomensShirts",
    price: 69.0,
    image: "../clothing/women/shirt6.png",
  },
  {
    name: "Rue De Rivoli Oversized T-shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt7.png",
  },
  {
    name: "Collegiate Oversized T-Shirt",
    type: "WomensShirts",
    price: 189.0,
    image: "../clothing/women/shirt8.png",
  },
  {
    name: "Older Girls Orange Graphic Print T-Shirt",
    type: "WomensShirts",
    price: 79.0,
    image: "../clothing/women/shirt9.png",
  },

  // Womens Jeans
  {
    name: "Womens Black High Rise Skinny Jeans",
    type: "WomensPants",
    price: 149.0,
    image: "../clothing/women/jeans1.png",
  },
  {
    name: "Womens Mid Blue Jeggings",
    type: "WomensPants",
    price: 149.0,
    image: "../clothing/women/jeans2.png",
  },
  {
    name: "Womens Medium Wash High Rise Skinny Jeans",
    type: "WomensPants",
    price: 149.0,
    image: "../clothing/women/jeans3.png",
  },
  {
    name: "Womens Dark Blue Skinny Jeans",
    type: "WomensPants",
    price: 249.0,
    image: "../clothing/women/jeans4.png",
  },
  {
    name: "Womens Grey Skinny Jeans",
    type: "WomensPants",
    price: 249.0,
    image: "../clothing/women/jeans5.png",
  },
  {
    name: "Womens Grey Skinny Jeans",
    type: "WomensPants",
    price: 249.0,
    image: "../clothing/women/jeans6.png",
  },
  {
    name: "Womens Dark Blue Jeggings",
    type: "WomensPants",
    price: 249.0,
    image: "../clothing/women/jeans7.png",
  },
  {
    name: "Womens Mid Blue Skinny Jeans",
    type: "WomensPants",
    price: 249.0,
    image: "../clothing/women/jeans8.png",
  },
  {
    name: "Redbat Womens Grey Skinny Jeans",
    type: "WomensPants",
    price: 549.0,
    image: "../clothing/women/jeans9.png",
  },

  //Womens Jackets
  {
    name: "Womens TS Black Shell Jacket",
    type: "WomensJackets",
    price: 249.0,
    image: "../clothing/women/jacket1.png",
  },
  {
    name: "The North Face Womens Evolve II Triclimate Jacket",
    type: "WomensJackets",
    price: 2349.0,
    image: "../clothing/women/jacket2.png",
  },
  {
    name: "Womens Mid Wash Denim Jacket",
    type: "WomensJackets",
    price: 399.0,
    image: "../clothing/women/jacket3.png",
  },
  {
    name: "Older Girls Glitter Bomber Jacket",
    type: "WomensJackets",
    price: 299.0,
    image: "../clothing/women/jacket4.png",
  },
  {
    name: "G-Star Womens Grey Arc 3D Denim Jacket",
    type: "WomensJackets",
    price: 2999.0,
    image: "../clothing/women/jacket5.png",
  },
  {
    name: "Womens Medium Wash Denim Bomber Jacket",
    type: "WomensJackets",
    price: 479.0,
    image: "../clothing/women/jacket6.png",
  },
  {
    name: "adidas Originals Womens Black/Natural Track Jacket",
    type: "WomensJackets",
    price: 719.0,
    image: "../clothing/women/jacket7.png",
  },
  {
    name: "Younger Girls Navy Quilted Long Puffer Jacket",
    type: "WomensJackets",
    price: 229.0,
    image: "../clothing/women/jacket8.png",
  },
  {
    name: "Nike Womens Nsw Green Quilted Jacket",
    type: "WomensJackets",
    price: 1739.0,
    image: "../clothing/women/jacket9.png",
  },

  //Womens Long Sleeve
  {
    name: "High Neck Long Sleeve Layering T-Shirt",
    type: "WomensLong",
    price: 99.0,
    image: "../clothing/women/long1.png",
  },
  {
    name: "adidas Originals Python Womens Long Sleeve T-Shirt",
    type: "WomensLong",
    price: 359.0,
    image: "../clothing/women/long2.png",
  },
  {
    name: "Y&G Long Sleeve Slogan T-Shirt",
    type: "WomensLong",
    price: 99.0,
    image: "../clothing/women/long3.png",
  },
  {
    name: "Long Sleeve Fitted T-Shirt",
    type: "WomensLong",
    price: 179.0,
    image: "../clothing/women/long4.png",
  },
  {
    name: "Womens Yellow Long Sleeve T-Shirt",
    type: "WomensLong",
    price: 59.0,
    image: "../clothing/women/long5.png",
  },
  {
    name: "Nike Womens Nsw White Long Sleeve T-Shirt",
    type: "WomensLong",
    price: 699.0,
    image: "../clothing/women/long6.png",
  },
  {
    name: "Y&G Long Sleeve Mesh T-Shirt",
    type: "WomensLong",
    price: 79.0,
    image: "../clothing/women/long7.png",
  },
  {
    name: "Satin Long Sleeve Sleep Shirt",
    type: "WomensLong",
    price: 99.0,
    image: "../clothing/women/long8.png",
  },
  {
    name: "Satin Long Sleeve Shirt",
    type: "WomensLong",
    price: 379.0,
    image: "../clothing/women/long9.png",
  },

  //Womens Trackpants
  {
    name: "Womens Puma Lemlem Fleece Jogger Frosty Pink Trackpants",
    type: "WomensTrack",
    price: 1799.0,
    image: "../clothing/women/track1.png",
  },
  {
    name: "Womens Puma Queen Football Black/Pink Trackpants",
    type: "WomensTrack",
    price: 1499.0,
    image: "../clothing/women/track2.png",
  },
  {
    name: "Nike Womens Nsw Phoenix Fleece Pink Sweatpants",
    type: "WomensTrack",
    price: 1199.0,
    image: "../clothing/women/track3.png",
  },
  {
    name: "adidas Originals Womens Black Leggings",
    type: "WomensTrack",
    price: 599.0,
    image: "../clothing/women/track4.png",
  },
  {
    name: "Redbat Athletics Womens Grey Melange Jogger",
    type: "WomensTrack",
    price: 349.0,
    image: "../clothing/women/track5.png",
  },
  {
    name: "Womens Charcoal Fleece Jogger",
    type: "WomensTrack",
    price: 149.0,
    image: "../clothing/women/track6.png",
  },
  {
    name: "Redbat Athletics Womens Green Wide Leg Active Pants",
    type: "WomensTrack",
    price: 349.0,
    image: "../clothing/women/track7.png",
  },
  {
    name: "Womens Pink Fleece Jogger",
    type: "WomensTrack",
    price: 149.0,
    image: "../clothing/women/track8.png",
  },
  {
    name: "Womens Grey Melange Fleece Jogger",
    type: "WomensTrack",
    price: 149.0,
    image: "../clothing/women/track9.png",
  },

  //Womens Headwear
  {
    name: "Nike Unisex Dri-FIT Club Unstructured Metal Swoosh Pink Cap",
    type: "WomensHeadwear",
    price: 399.0,
    image: "../clothing/women/hat1.png",
  },
  {
    name: "Anatomy Nylon Logo Black Cap",
    type: "WomensHeadwear",
    price: 279.0,
    image: "../clothing/women/hat2.png",
  },
  {
    name: "FF Towelling Bucket Hat",
    type: "WomensHeadwear",
    price: 279.0,
    image: "../clothing/women/hat3.png",
  },
  {
    name: "FF Towelling Bucket Hat",
    type: "WomensHeadwear",
    price: 279.0,
    image: "../clothing/women/hat4.png",
  },
  {
    name: "Nike Unisex Heritage86 Dri-Fit Natural Cap",
    type: "WomensHeadwear",
    price: 399.0,
    image: "../clothing/women/hat5.png",
  },
  {
    name: "FF Logo Bucket Hat",
    type: "WomensHeadwear",
    price: 299.0,
    image: "../clothing/women/hat6.png",
  },

  //Womens Headwear
  {
    name: "Tempo Ladies Two Tone Bracelet Watch",
    type: "WomensWatches",
    price: 449.0,
    image: "../clothing/women/watch1.png",
  },
  {
    name: "Tempo Womens Silver Plated Bangle Watch",
    type: "WomensWatches",
    price: 374.0,
    image: "../clothing/women/watch2.png",
  },
  {
    name: "Tempo Womens Rose Plated Silver Dial Bracelet Watch",
    type: "WomensWatches",
    price: 674.0,
    image: "../clothing/women/watch3.png",
  },
  {
    name: "Denim Analogue Watch",
    type: "WomensWatches",
    price: 100.0,
    image: "../clothing/women/watch4.png",
  },
  {
    name: "Tempo Womens Silver & Rose Plated Bracelet Watch",
    type: "WomensWatches",
    price: 674.0,
    image: "../clothing/women/watch5.png",
  },
  {
    name: "Tempo Womens Gold Plated Silver Dial Rectangle Bracelet Watch",
    type: "WomensWatches",
    price: 599.0,
    image: "../clothing/women/watch6.png",
  },
  {
    name: "Tempo Womens Silver Plated Coin Edge Bracelet Watch",
    type: "WomensWatches",
    price: 599.0,
    image: "../clothing/women/watch7.png",
  },
  {
    name: "Minx Womens Silver Plated Rectangle Blue Faux Leather Watch",
    type: "WomensWatches",
    price: 299.0,
    image: "../clothing/women/watch8.png",
  },
  {
    name: "Tempo Womens Rose Plated Champagne Rectangle Dial Pink Leather Watch",
    type: "WomensWatches",
    price: 524.0,
    image: "../clothing/women/watch9.png",
  },

  //Womens Sneakers
  {
    name: "Womens New Balance 500 Tan Sneaker",
    type: "WomensSneakers",
    price: 999.0,
    image: "../clothing/women/shoe1.png",
  },
  {
    name: "Nike Womens Air Force LV8 Cream/Green Sneaker",
    type: "WomensSneakers",
    price: 2299.0,
    image: "../clothing/women/shoe2.png",
  },
  {
    name: "Nike Womens Court Legacy Lift Natural Sneaker",
    type: "WomensSneakers",
    price: 1699.0,
    image: "../clothing/women/shoe3.png",
  },
  {
    name: "Vans Womens SK8-Hi Tapered Blue Sneaker",
    type: "WomensSneakers",
    price: 749.0,
    image: "../clothing/women/shoe4.png",
  },
  {
    name: "Womens Nike Waffle Debut Red/White WomensSneakers",
    type: "WomensSneakers",
    price: 1599.0,
    image: "../clothing/women/shoe5.png",
  },
  {
    name: "Nike Womens Court Vision White Sneaker",
    type: "WomensSneakers",
    price: 1899.0,
    image: "../clothing/women/shoe6.png",
  },
  {
    name: "Womens Nike Court Vision White Shoe",
    type: "WomensSneakers",
    price: 1399.0,
    image: "../clothing/women/shoe7.png",
  },
  {
    name: "Nike Womens Gamma Force Natural Sneaker",
    type: "WomensSneakers",
    price: 1899.0,
    image: "../clothing/women/shoe8.png",
  },
  {
    name: "Vans Womens Old Skool Checkerboard black/White Sneaker",
    type: "WomensSneakers",
    price: 1199.0,
    image: "../clothing/women/shoe9.png",
  },

  //  Kids
  // Kids Section
  //Kids Shirts
  {
    name: "Younger Boys Navy Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 69.0,
    image: "../clothing/kid/shirt1.png",
  },
  {
    name: "Younger Boys Fatigue Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 79.0,
    image: "../clothing/kid/shirt2.png",
  },
  {
    name: "Older Boys Ochre Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 79.0,
    image: "../clothing/kid/shirt3.png",
  },

  {
    name: "Older Boys Navy Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 69.0,
    image: "../clothing/kid/shirt4.png",
  },
  {
    name: "adidas Originals Youth Essentials Black T-shirt",
    type: "KidsShirts",
    price: 89.0,
    image: "../clothing/kid/shirt5.png",
  },
  {
    name: "Older Boys Grey Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 79.0,
    image: "../clothing/kid/shirt6.png",
  },

  {
    name: "Older Girls Stone Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 79.0,
    image: "../clothing/kid/shirt7.png",
  },
  {
    name: "Younger Girls Pink Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 99.0,
    image: "../clothing/kid/shirt8.png",
  },
  {
    name: "Older Girls Yellow Graphic Print T-Shirt",
    type: "KidsShirts",
    price: 79.0,
    image: "../clothing/kid/shirt9.png",
  },

  //long sleeve shirts
  {
    name: "Girls Nike Sportswear Air Black Long Sleeve Top",
    type: "KidsLong",
    price: 799,
    image: "../clothing/kid/long1.png",
  },
  {
    name: "Younger Boys Printed Long Sleeve T-Shirt",
    type: "KidsLong",
    price: 179,
    image: "../clothing/kid/long2.png",
  },
  {
    name: "Older Girls Long Sleeve Frill Top",
    type: "KidsLong",
    price: 149,
    image: "../clothing/kid/long3.png",
  },
  {
    name: "Boys Ts Long Sleeve Base Layer",
    type: "KidsLong",
    price: 149,
    image: "../clothing/kid/long4.png",
  },
  {
    name: "Boys Ts Long Sleeve Graphic Tee",
    type: "KidsLong",
    price: 99,
    image: "../clothing/kid/long5.png",
  },
  {
    name: "Older Girls Long Sleeve Anglaise Frill Top",
    type: "KidsLong",
    price: 500,
    image: "../clothing/kid/long6.png",
  },
  {
    name: "Mens The North Face Long Sleeve Fine Black Tee",
    type: "KidsLong",
    price: 650,
    image: "../clothing/longsleeve7.png",
  },
  {
    name: "The North Face Mens Outdoor Graphic T-shirt",
    type: "KidsLong",
    price: 250,
    image: "../clothing/longsleeve8.jpg",
  },
  {
    name: "The North Face Rogue Graphic Long Sleeve Tee Mens",
    type: "KidsLong",
    price: 490,
    image: "../clothing/longsleeve9.jpg",
  },

  //jerseys & jackets
  {
    name: "Nike Windrunner Mens Jacket Lacrosse",
    type: "KidsJackets",
    price: 2699,
    image: "../clothing/jacket1.jpg",
  },
  {
    name: "The North Face Mens 1996 Blue Puffer Jacket",
    type: "KidsJackets",
    price: 6499,
    image: "../clothing/jacket2.png",
  },
  {
    name: "Mens Woven Hooded Jacket Black-Khaki Nike",
    type: "KidsJackets",
    price: 5500,
    image: "../clothing/jacket4.jpg",
  },
  {
    name: "The North Face Mens Retro Nuptse Jacket ",
    type: "KidsJackets",
    price: 4500,
    image: "../clothing/northjacket2.jpg",
  },
  {
    name: "Mens 92 Retro Anniversary Nuptse Jacket",
    type: "KidsJackets",
    price: 3300,
    image: "../clothing/northjacket4.jpg",
  },
  {
    name: "Mens The North Face Resolve Navy Jacket",
    type: "KidsJackets",
    price: 1199,
    image: "../clothing/northjacket5.png",
  },
  {
    name: "Mens The Northface Seasonal Mountain Black Jacket",
    type: "KidsJackets",
    price: 2099,
    image: "../clothing/northjacket6.png",
  },
  {
    name: "Mens Puma Manchester City Pre-Match Yellow Jacket",
    type: "KidsJackets",
    price: 949,
    image: "../clothing/jacket5.png",
  },
  {
    name: "The North Face Mens Olive Green Mountain Jacket",
    type: "KidsJackets",
    price: 1799,
    image: "../clothing/jacket6.png",
  },

  //Trackpants
  {
    name: "MKM Black Basic Relaxed Jogger",
    type: "KidsTrackPants",
    price: 350.0,
    image: "../clothing/jogger1.png",
  },
  {
    name: "MKM Grey Melange Basic Relaxed Jogger",
    type: "KidsTrackPants",
    price: 350.0,
    image: "../clothing/jogger2.png",
  },
  {
    name: "Younger Boys Basic Relaxed Jogger",
    type: "KidsTrackPants",
    price: 69.0,
    image: "../clothing/jogger3.png",
  },
  {
    name: "Younger Boys Fatigue Colour Block Jogger",
    type: "KidsTrackPants",
    price: 69.0,
    image: "../clothing/jogger4.png",
  },
  {
    name: "Redbat Mens Charcoal Jogger",
    type: "KidsTrackPants",
    price: 229.0,
    image: "../clothing/jogger5.png",
  },
  {
    name: "Mens Nike Sportswear Black Club Fleece Jogger",
    type: "KidsTrackPants",
    price: 899.0,
    image: "../clothing/jogger6.png",
  },
  {
    name: "Mens 1982 Grey Melange Fleece Jogger",
    type: "KidsTrackPants",
    price: 349.0,
    image: "../clothing/jogger7.png",
  },
  {
    name: "Mens TS Heatseal Teal Panelled Jogger",
    type: "KidsTrackPants",
    price: 199.0,
    image: "../clothing/jogger8.png",
  },
  {
    name: "Redbat Mens Black Graphic Jogger",
    type: "KidsTrackPants",
    price: 349.0,
    image: "../clothing/jogger9.png",
  },

  //Headware
  {
    name: "adidas Originals Treefoil Jacquard hat",
    type: "KidsHeadWear",
    price: 249.0,
    image: "../clothing/hat1.png",
  },
  {
    name: "RJ White Vertical Colourblocked Bucket Hat",
    type: "KidsHeadWear",
    price: 149.0,
    image: "../clothing/hat2.png",
  },
  {
    name: "New Era Red 9Forty Branding Cap",
    type: "KidsHeadWear",
    price: 549.0,
    image: "../clothing/hat3.png",
  },
  {
    name: "RJ Black Patented Branding 5 Panel Dart Peak",
    type: "KidsHeadWear",
    price: 149.0,
    image: "../clothing/hat4.png",
  },
  {
    name: "adidas Originals Unisex Trefoil Beige Cap",
    type: "KidsHeadWear",
    price: 499.0,
    image: "../clothing/hat5.png",
  },
  {
    name: "Mens Light Wash Frayed Denim Bucket Hat",
    type: "KidsHeadWear",
    price: 139.0,
    image: "../clothing/hat6.png",
  },
  {
    name: "New Era New York Yankees Orange Adjustable Cap",
    type: "KidsHeadWear",
    price: 409.0,
    image: "../clothing/hat7.png",
  },
  {
    name: "Nike Unisex Dri-Fit Giannis H86 Black Cap",
    type: "KidsHeadWear",
    price: 409.0,
    image: "../clothing/hat8.png",
  },
  {
    name: "Nike Unisex Futura Wash Sage Cap",
    type: "KidsHeadWear",
    price: 499.0,
    image: "../clothing/hat9.png",
  },

  //Watches
  {
    name: "Tempo Mens Silver Plated Blue Multi Dial Bracelet Watch",
    type: "KidsWatch",
    price: 449.0,
    image: "../clothing/watch1.png",
  },
  {
    name: "Tempo Mens Gold Plated Black Dial Bracelet Watch",
    type: "KidsWatch",
    price: 449.0,
    image: "../clothing/watch2.png",
  },
  {
    name: "RJ Blue CASUAL BOLD BRAND SILICONE WATCH",
    type: "KidsWatch",
    price: 199.0,
    image: "../clothing/watch3.png",
  },
  {
    name: "RJ WHITE DBL LAYER RND WATCH",
    type: "KidsWatch",
    price: 299.0,
    image: "../clothing/watch4.png",
  },
  {
    name: "MKM MULTICOLOUR RETRO SQUARE AVIATOR WATCH",
    type: "KidsWatch",
    price: 199.0,
    image: "../clothing/watch5.png",
  },
  {
    name: "Tempo Mens Silver Plated Navy Dial Chronographic Brown Leather Watch",
    type: "KidsWatch",
    price: 679.0,
    image: "../clothing/watch6.png",
  },

  //Sneakers
  {
    name: "puma junior graviton pink sneaker",
    type: "KidsSneakers",
    price: 1099.0,
    image: "../clothing/kid/shoe1.png",
  },
  {
    name: "Nike Junior Dunk High Multicolour Sneaker",
    type: "KidsSneakers",
    price: 1999.0,
    image: "../clothing/kid/shoe2.png",
  },
  {
    name: "Puma Toddler BMW MMS Caven White Sneaker",
    type: "KidsSneakers",
    price: 999.0,
    image: "../clothing/kid/shoe3.png",
  },
  {
    name: "Junior Pre-School Converse All Star Sneaker",
    type: "KidsSneakers",
    price: 899.0,
    image: "../clothing/kid/shoe4.png",
  },
  {
    name: "Converse Junior CTAS Mid Fatigue Sneaker",
    type: "KidsSneakers",
    price: 649.0,
    image: "../clothing/shoes5.png",
  },
  {
    name: "Converse Junior CTAs Edge Glow Sneaker",
    type: "KidsSneakers",
    price: 699.0,
    image: "../clothing/shoes6.png",
  },

  {
    name: "Converse Junior Chuck Taylor All Star CX",
    type: "KidsSneakers",
    price: 849.0,
    image: "../clothing/shoes7.png",
  },
  {
    name: "Nike Air Force 1 LE White Sneaker",
    type: "KidsSneakers",
    price: 1199.0,
    image: "../clothing/shoes8.png",
  },
  {
    name: "Grade School Nike Grey/Blue Court Sneaker",
    type: "KidsSneakers",
    price: 1099.0,
    image: "../clothing/shoes9.png",
  },
  {
    name: "Vans Junior Old Skool Black/White Sneaker",
    type: "KidsSneakers",
    price: 949.0,
    image: "../clothing/shoes10.webp",
  },
  {
    name: "Le Coq Sportif Junior Provencale II Low Black Sneaker",
    type: "KidsSneakers",
    price: 649.0,
    image: "../clothing/shoes11.png",
  },
  {
    name: "Mens Vans Ward Burgundy/White/maroon Sneaker",
    type: "KidsSneakers",
    price: 499.0,
    image: "../clothing/shoes12.png",
  },
];

let cart = [];

function filterClothing() {
  // mens
  const tshirtsCheckbox = document.getElementById("tshirtsCheckbox");
  const pantsCheckbox = document.getElementById("pantsCheckbox");
  const jacketsCheckbox = document.getElementById("jacketsCheckbox");
  const longCheckbox = document.getElementById("LongSleeveCheckbox");
  const trackPantsCheckbox = document.getElementById("trackPantsCheckbox");
  const headWearCheckbox = document.getElementById("headWearCheckbox");
  const watchCheckbox = document.getElementById("watchCheckbox");
  const sneakersCheckbox = document.getElementById("sneakersCheckbox");

  // womens
  const WomensTshirtsCheckbox = document.getElementById(
    "WomensTshirtsCheckbox"
  );
  const WomenspantsCheckbox = document.getElementById("WomenspantsCheckbox");
  const WomensjacketsCheckbox = document.getElementById(
    "WomensjacketsCheckbox"
  );
  const WomensLongSleeveCheckbox = document.getElementById(
    "WomensLongSleeveCheckbox"
  );
  const WomenstrackPantsCheckbox = document.getElementById(
    "WomenstrackPantsCheckbox"
  );
  const WomensheadWearCheckbox = document.getElementById(
    "WomensheadWearCheckbox"
  );
  const WomenswatchCheckbox = document.getElementById("WomenswatchCheckbox");
  const WomenssneakersCheckbox = document.getElementById(
    "WomenssneakersCheckbox"
  );

  //   Kids Section
  const kidstshirtsCheckbox = document.getElementById("kidstshirtsCheckbox");
  const kidsjacketsCheckbox = document.getElementById("kidsjacketsCheckbox");
  const kidsLongSleeveCheckbox = document.getElementById(
    "kidsLongSleeveCheckbox"
  );
  const kidstrackPantsCheckbox = document.getElementById(
    "kidstrackPantsCheckbox"
  );
  const kidsheadWearCheckbox = document.getElementById("kidsheadWearCheckbox");
  const kidswatchCheckbox = document.getElementById("kidswatchCheckbox");
  const kidssneakersCheckbox = document.getElementById("kidssneakersCheckbox");

  const filteredClothing = clothingData.filter((item) => {
    return (
      //  Mens
      (tshirtsCheckbox.checked && item.type === "T-Shirts") ||
      (pantsCheckbox.checked && item.type === "Pants") ||
      (jacketsCheckbox.checked && item.type === "Jackets") ||
      (longCheckbox.checked && item.type === "Long") ||
      (trackPantsCheckbox.checked && item.type === "Track") ||
      (headWearCheckbox.checked && item.type === "Headwear") ||
      (watchCheckbox.checked && item.type === "Watches") ||
      (sneakersCheckbox.checked && item.type === "Sneakers") ||
      // Womens
      (WomensTshirtsCheckbox.checked && item.type === "WomensShirts") ||
      (WomenspantsCheckbox.checked && item.type === "WomensPants") ||
      (WomensjacketsCheckbox.checked && item.type === "WomensJackets") ||
      (WomensLongSleeveCheckbox.checked && item.type === "WomensLong") ||
      (WomenstrackPantsCheckbox.checked && item.type === "WomensTrack") ||
      (WomensheadWearCheckbox.checked && item.type === "WomensHeadwear") ||
      (WomenswatchCheckbox.checked && item.type === "WomensWatches") ||
      (WomenssneakersCheckbox.checked && item.type === "WomensSneakers") ||
      //   Kids
      (kidstshirtsCheckbox.checked && item.type === "KidsShirts") ||
      (kidsjacketsCheckbox.checked && item.type === "KidsJackets") ||
      (kidsLongSleeveCheckbox.checked && item.type === "KidsLong") ||
      (kidstrackPantsCheckbox.checked && item.type === "KidsTrackPants") ||
      (kidsheadWearCheckbox.checked && item.type === "KidsHeadWear") ||
      (kidswatchCheckbox.checked && item.type === "KidsWatch") ||
      (kidssneakersCheckbox.checked && item.type === "KidsSneakers")
    );
  });

  displayProducts(filteredClothing);
}

function displayProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2 class="name-heading">${product.name}</h2>
            <div class="price-container">
            <p class="price">Price: R ${product.price}</p>
            </div>
            <div class="icon-container">
            <button class="btnAddToCart" onclick="addToCart('${product.name}', ${product.price})"><i class="fa-solid fa-cart-shopping"></i></button>
            <button class="btnDetails" onclick="showPopup('${product.name}', ${product.price}, '${product.image}')">Details</button>
            <button class="likeBtn"><i class="fa-regular fa-heart"></i></button>
            </div>
        `;
    productsContainer.appendChild(productItem);
  });
}

let checkbtn = document.getElementById("checkoutButton");
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

//checkout functionality

// function updateCart() {
//     const cartContainer = document.querySelector(".cart");
//     cartContainer.innerHTML = "";

//     cart.forEach((item, index) => {
//         const cartItem = document.createElement("div");
//         cartItem.classList.add("cart-item");
//         cartItem.innerHTML = `
//             <p>${item.name} - R ${item.price}</p>
//             <button class="btnTrash" onclick="removeFromCart(${index})">
//             <i class="fa-solid fa-trash"></i>
//             </button>
//         `;
//         cartContainer.appendChild(cartItem);
//     });

//     const total = cart.reduce((acc, item) => acc + item.price, 0);
//     cartContainer.innerHTML += `<p>Total: R ${total}</p>`;

// }

function showPopup(name, price, image) {
  const popup = document.querySelector(".popup");
  popup.innerHTML = `
            <div class="popup-content">
                         <img src="${image}" alt="${name}">
             <h2 class="name">${name}</h2>
             <p class="price">Price: R ${price}</p>
             <button class="exitBtn" onclick="closePopup()"><i class="fa-solid fa-xmark"></i></button>
             </div>
     `;
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.querySelector(".popup");
  popup.style.display = "none";
}

// // Initial display
// filterClothing();

// ... (existing code)

function addToCart(productName, productPrice) {
  // Check if the item is already in the cart, and if so, increment the quantity.
  const existingCartItem = cart.find((item) => item.name === productName);
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  // Cart Decreases Quantity
  document.getElementById("qty").innerHTML = `
    <p class="quantity-wrap" onclick="removeCart(${index})">0</p>
    `;
}

function updateCart() {
  const cartContainer = document.querySelector(".cart");
  const qty = document.getElementById("qty");
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // Cart increment Quantity
    qty.innerHTML = `
        <p class="quantity-wrap">${item.quantity}</p>
        `;

    cartItem.innerHTML = `
        <div class="main-container">
        <div class="cart-container">
            <p>${item.name} - R ${item.price} x${item.quantity}</p>
            <div class="icon-wrapper">
            </div>
            <button class="btnTrash" onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
        `;
    cartContainer.appendChild(cartItem);
  });
  //
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartContainer.innerHTML += `
    <p>Total: R ${total}</p>
    <div class="checkout">
    <button id="checkoutButton" class="checkout-btn" onclick="checkout()">Checkout</button>
    </idv>
`;
}

// function checkout() {
// You can implement your checkout logic here.
// For example, you can send the cart data to a server for payment processing.
// After successful payment, you can clear the cart.
// In this example, we'll simply clear the cart for demonstration purposes.

// cart = [];
// updateCart();
// alert('TO CHECKOUT you need to create an online account with MRJ');
// const SignUp = window.alert('TO CHECKOUT you need to create an online account with MRJ. You will be redirected to the sign up page');

// This will take you to the next page
// var nextPageURL = 'receipt.html';
// window.location.href = nextPageURL;
// }

// ... (existing code)
// Receipt Page
// Get the receipt container element on the receipt.html page
// Function to generate and display the receipt

function checkout() {
  // You can implement your checkout logic here.
  // For example, you can send the cart data to a server for payment processing.
  // After successful payment, you can clear the cart.

  // In this example, we'll create a receipt and display it on the "receipt.html" page.

  // Generate the receipt HTML
  const receiptItems = cart
    .map((item) => `<p>${item.name} - R ${item.price} x${item.quantity}</p>`)
    .join("");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const receiptHTML = `
    <div class="receipt-items">
        <h1>Receipt</h1>
        <div class="cart">${receiptItems}</div>
        <p>Total: R ${total}</p>
    </div>
    `;

  // Store the receipt in localStorage to pass it to the "receipt.html" page
  localStorage.setItem("receiptHTML", receiptHTML);

  // This will create a window alert stating that you must first create an online account before u can make payment
  const SignUp = window.alert(
    "TO CHECKOUT you need to create an online account with MRJ. You will be redirected to the sign up page"
  );
  var nextPageURL = "signup.html";
  window.location.href = nextPageURL;
}

// popup cart link
const cartLink = document.getElementById('cart-link');
cartLink.onclick = function(){
   window.alert('YOUR CART IS EMPTY');
}

//ON-SCROLL EFFECT
//create the intersection observer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {   //it can observe multiple entries at the same time
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});
//grab all the elements that have that specific class.
const hiddenElements = document.querySelectorAll('.hidden');

//tell it what to observe
hiddenElements.forEach((el)=> observer.observe(el)); //Tell the observer to observe

// Loader

