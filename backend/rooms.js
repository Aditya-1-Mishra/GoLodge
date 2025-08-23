const roomsData = [
  { 
    id: 1, 
    name: "Luxury Room", 
    roomType: "Luxury Room", 
    accommodation: "Single",
    hotel_name: "Hotel Grand", 
    location: "New York", 
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
    ],
    description: "Our Luxury Room in New York offers a blend of modern elegance and comfort. Perfect for solo travelers, it features plush bedding, a sleek workspace, and floor-to-ceiling windows showcasing the vibrant city skyline.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Coffee Maker"
    ],
    price: 399,
    currency: "USD",
    reviews: [
      {
        id: 101,
        user: "TravelEnthusiast42",
        rating: 4.8,
        date: "2025-03-15",
        comment: "Absolutely stunning room with incredible city views. The bed was incredibly comfortable and the staff was very attentive. A bit pricey but worth it for a special trip to NYC."
      },
      {
        id: 102,
        user: "BusinessTraveler",
        rating: 4.5,
        date: "2025-02-22",
        comment: "Perfect accommodation for my business trip. Fast Wi-Fi, convenient desk setup, and central location. Would stay again."
      }
    ]
  },
  { 
    id: 2, 
    name: "Deluxe Room", 
    roomType: "Deluxe Room", 
    accommodation: "Double", 
    hotel_name: "Sunset Plaza Hotel",
    location: "Los Angeles", 
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
    ],
    description: "Experience comfort and style in our spacious Deluxe Room. This double accommodation features contemporary decor, premium bedding, and stunning views of Los Angeles, perfect for couples or business travelers.",
    amenities: [
      "Wi-Fi",
      "Flat-screen TV",
      "Mini Bar"
    ],
    price: 349,
    currency: "USD",
    reviews: [
      {
        id: 103,
        user: "CoupleTravelers",
        rating: 4.7,
        date: "2025-03-28",
        comment: "Gorgeous room with fantastic LA views. The sunset from our window was breathtaking. Mini bar was well-stocked but pricey."
      },
      {
        id: 104,
        user: "MovieIndustryPro",
        rating: 4.2,
        date: "2025-02-10",
        comment: "Great location for my meetings in Hollywood. Room was spacious and comfortable. Would appreciate better soundproofing."
      }
    ]
  },
  { 
    id: 3, 
    name: "Standard Room", 
    roomType: "Standard Room", 
    accommodation: "Twin", 
    hotel_name: "Windy City Inn",
    location: "Chicago", 
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304"
    ],
    description: "Our cozy Standard Room with twin beds provides essential comfort at great value. Enjoy modern amenities and convenient access to Chicago's major attractions and business districts.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Air Conditioning"
    ],
    price: 199,
    currency: "USD",
    reviews: [
      {
        id: 105,
        user: "BudgetExplorer",
        rating: 4.0,
        date: "2025-04-02",
        comment: "Great value for Chicago. Nothing fancy but clean and comfortable. Perfect base for exploring the city."
      },
      {
        id: 106,
        user: "MidwestTraveler",
        rating: 3.8,
        date: "2025-01-15",
        comment: "Decent room for the price. Heating worked well during the cold winter days. Would stay again for a short trip."
      }
    ]
  },
  { 
    id: 4, 
    name: "Executive Suite", 
    roomType: "Executive Suite", 
    accommodation: "Studio", 
    hotel_name: "Bay View Resort",
    location: "San Francisco", 
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    ],
    description: "Our Executive Suite studio offers the perfect blend of luxury and functionality. Enjoy panoramic views of San Francisco Bay, a dedicated workspace, and premium amenities designed for the discerning business traveler.",
    amenities: [
      "Free Wi-Fi",
      "Smart TV",
      "Espresso Machine",
      "Work Desk"
    ],
    price: 499,
    currency: "USD",
    reviews: [
      {
        id: 107,
        user: "TechExecutive",
        rating: 4.9,
        date: "2025-03-21",
        comment: "Outstanding suite with breathtaking bay views. The workspace was perfect for my needs, and the espresso machine was a nice touch. Worth every penny."
      },
      {
        id: 108,
        user: "LuxuryTraveler",
        rating: 4.7,
        date: "2025-02-07",
        comment: "Exceptional suite with attention to detail. The panoramic views are even better than the photos. Highly recommended for anyone visiting SF."
      }
    ]
  },
  { 
    id: 5, 
    name: "Presidential Suite", 
    roomType: "Presidential Suite", 
    accommodation: "Apartment", 
    hotel_name: "Ocean Drive Resort",
    location: "Miami", 
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
    ],
    description: "Our signature Presidential Suite apartment offers unparalleled luxury and space. Featuring a separate living area, dining space, and breathtaking ocean views, this exclusive accommodation represents the pinnacle of Miami hospitality.",
    amenities: [
      "High-speed Wi-Fi",
      "65-inch Smart TV",
      "Fully Stocked Bar",
      "Private Balcony",
      "Jacuzzi Tub"
    ],
    price: 1299,
    currency: "USD",
    reviews: [
      {
        id: 109,
        user: "CelebrityGuest",
        rating: 5.0,
        date: "2025-04-05",
        comment: "Pure luxury in every detail. The ocean views are spectacular, especially at sunset. The private balcony and jacuzzi made this stay unforgettable. Worth every penny."
      },
      {
        id: 110,
        user: "HoneymoonerCouple",
        rating: 4.8,
        date: "2025-03-12",
        comment: "Booked this for our honeymoon and it was absolutely perfect. Spacious, luxurious, and the views are incredible. The fully stocked bar was a great touch."
      }
    ]
  },
  { 
    id: 6, 
    name: "Superior Room", 
    roomType: "Superior Room", 
    accommodation: "Single", 
    hotel_name: "Desert Oasis Hotel",
    location: "Las Vegas", 
    images: [
      "https://images.unsplash.com/photo-1587985064135-0366536eab42",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    ],
    description: "Our Superior Room offers enhanced comfort and amenities for the solo traveler in Las Vegas. Enjoy premium bedding, stylish decor, and a convenient location just minutes from the famous Strip.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Mini Fridge",
      "Safe"
    ],
    price: 249,
    currency: "USD",
    reviews: [
      {
        id: 111,
        user: "SoloAdventurer",
        rating: 4.2,
        date: "2025-03-30",
        comment: "Great room for a solo Vegas trip. Clean, comfortable and close enough to the Strip without the noise. Would stay again."
      },
      {
        id: 112,
        user: "PokerPlayer",
        rating: 4.0,
        date: "2025-02-25",
        comment: "Comfortable room with all the essentials. The safe was useful for storing my winnings! Good value compared to Strip hotels."
      }
    ]
  },
  { 
    id: 7, 
    name: "Economy Room", 
    roomType: "Economy Room", 
    accommodation: "Bungalow", 
    hotel_name: "Emerald Coast Lodge",
    location: "Seattle", 
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1599619585752-c3edb42a414c"
    ],
    description: "Our Economy Bungalow provides affordable comfort in a compact, stylish space. Perfect for budget-conscious travelers exploring Seattle who still appreciate quality accommodations and essential amenities.",
    amenities: [
      "Wi-Fi",
      "Cable TV",
      "Shower"
    ],
    price: 159,
    currency: "USD",
    reviews: [
      {
        id: 113,
        user: "BackpackerGirl",
        rating: 3.9,
        date: "2025-04-10",
        comment: "Great little bungalow for a budget trip to Seattle. Compact but had everything I needed. Good value in an expensive city."
      },
      {
        id: 114,
        user: "MinimalistTraveler",
        rating: 3.7,
        date: "2025-03-05",
        comment: "Simple but clean and functional. Perfect if you're spending most of your time exploring the city. Wi-Fi was reliable."
      }
    ]
  },
  { 
    id: 8, 
    name: "Luxury Room", 
    roomType: "Luxury Room", 
    accommodation: "Twin", 
    hotel_name: "Manhattan Skyline Hotel",
    location: "New York", 
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
    ],
    description: "Our Luxury Twin Room offers sophisticated comfort in the heart of New York City. Featuring two plush beds with premium linens, designer furnishings, and floor-to-ceiling windows with spectacular city views.",
    amenities: [
      "High-speed Wi-Fi",
      "Smart TV",
      "Coffee Maker",
      "Premium Toiletries"
    ],
    price: 429,
    currency: "USD",
    reviews: [
      {
        id: 115,
        user: "FriendsOnTour",
        rating: 4.8,
        date: "2025-04-15",
        comment: "Perfect room for our girls' trip to NYC! The beds were incredibly comfortable and the views were stunning. Worth every penny."
      },
      {
        id: 116,
        user: "FamilyTravelerNYC",
        rating: 4.6,
        date: "2025-02-18",
        comment: "Excellent twin room with plenty of space for our luggage. The floor-to-ceiling windows made for spectacular morning views of the city."
      }
    ]
  },
  { 
    id: 9, 
    name: "Deluxe Room", 
    roomType: "Deluxe Room", 
    accommodation: "Studio", 
    hotel_name: "Pacific View Hotel",
    location: "San Diego", 
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457"
    ],
    description: "Our Deluxe Studio combines comfort and functionality in beautiful San Diego. The open-concept design features a comfortable sleeping area, sitting space, and all the amenities needed for a relaxing stay by the Pacific.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Kitchenette",
      "Work Desk"
    ],
    price: 299,
    currency: "USD",
    reviews: [
      {
        id: 117,
        user: "CaliforniaDreaming",
        rating: 4.5,
        date: "2025-03-25",
        comment: "Lovely studio with everything we needed. The kitchenette was well-equipped and saved us money on dining out. Great location near the beach."
      },
      {
        id: 118,
        user: "SanDiegoExplorer",
        rating: 4.3,
        date: "2025-01-30",
        comment: "Comfortable studio with nice amenities. The work desk came in handy when I needed to catch up on some emails. Would book again."
      }
    ]
  },
  { 
    id: 10, 
    name: "Standard Room", 
    roomType: "Standard Room", 
    accommodation: "Apartment", 
    hotel_name: "Lone Star Suites",
    location: "Dallas", 
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      "https://images.unsplash.com/photo-1576675784201-0e142b423952"
    ],
    description: "Our Standard Apartment offers generous space and home-like comfort in Dallas. Featuring a separate bedroom, living area, and kitchenette, this accommodation is perfect for extended stays or travelers who value extra space.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Kitchen",
      "Washer/Dryer"
    ],
    price: 279,
    currency: "USD",
    reviews: [
      {
        id: 119,
        user: "BusinessStayDallas",
        rating: 4.2,
        date: "2025-04-08",
        comment: "Great apartment for my week-long business trip. Having a separate bedroom and living area made it feel like home. The washer/dryer was incredibly convenient."
      },
      {
        id: 120,
        user: "TexasVisitor",
        rating: 4.0,
        date: "2025-02-28",
        comment: "Spacious and comfortable apartment. Good value for the price, especially if you're staying longer. Kitchen was well-equipped for basic cooking."
      }
    ]
  },
  { 
    id: 11, 
    name: "Executive Suite", 
    roomType: "Executive Suite", 
    accommodation: "Resort Villa", 
    hotel_name: "Texas Hill Country Resort",
    location: "Austin", 
    images: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457"
    ],
    description: "Our Executive Resort Villa in Austin offers unmatched luxury and privacy. This standalone accommodation features premium furnishings, multiple rooms, and a private patio with stunning hill country views.",
    amenities: [
      "High-speed Wi-Fi",
      "Smart TV",
      "Full Kitchen",
      "Private Terrace",
      "Fireplace"
    ],
    price: 649,
    currency: "USD",
    reviews: [
      {
        id: 121,
        user: "LuxuryCountryLover",
        rating: 4.9,
        date: "2025-03-18",
        comment: "Absolutely stunning villa with breathtaking hill country views. The private terrace was perfect for morning coffee and evening wine. Worth every penny for a special getaway."
      },
      {
        id: 122,
        user: "AustinWeekender",
        rating: 4.7,
        date: "2025-01-22",
        comment: "Exceptional villa with great attention to detail. The fireplace created such a cozy atmosphere in the evenings. Highly recommend for a luxurious stay in Austin."
      }
    ]
  },
  { 
    id: 12, 
    name: "Presidential Suite", 
    roomType: "Presidential Suite", 
    accommodation: "Bungalow", 
    hotel_name: "Magic City Resort",
    location: "Orlando", 
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
    ],
    description: "Our Presidential Bungalow offers exclusive luxury in Orlando. This private accommodation features premium amenities, sophisticated design, and personalized service, creating an unforgettable retreat near the city's famous attractions.",
    amenities: [
      "Premium Wi-Fi",
      "Multiple TVs",
      "Full Kitchen",
      "Private Garden",
      "Butler Service"
    ],
    price: 899,
    currency: "USD",
    reviews: [
      {
        id: 123,
        user: "ThemeParkEnthusiast",
        rating: 5.0,
        date: "2025-04-12",
        comment: "The perfect luxury retreat after busy days at the theme parks. The butler service was exceptional, and the private garden was a peaceful oasis. Worth every penny."
      },
      {
        id: 124,
        user: "FamilyVacationer",
        rating: 4.8,
        date: "2025-03-02",
        comment: "Stayed here for a special family vacation and it exceeded all expectations. The kids loved having multiple TVs and the adults appreciated the luxury touches."
      }
    ]
  },
  { 
    id: 13, 
    name: "Superior Room", 
    roomType: "Superior Room", 
    accommodation: "Double", 
    hotel_name: "Gulf Coast Hotel",
    location: "Houston", 
    images: [
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
    ],
    description: "Our Superior Double Room in Houston combines comfort and convenience. Featuring a spacious layout, two comfortable queen beds, and modern amenities, it's perfect for friends or families exploring the city.",
    amenities: [
      "Wi-Fi",
      "Flat-screen TV",
      "Coffee Maker",
      "Mini Fridge"
    ],
    price: 229,
    currency: "USD",
    reviews: [
      {
        id: 125,
        user: "HoustonVisitor",
        rating: 4.2,
        date: "2025-03-28",
        comment: "Comfortable room with plenty of space for our luggage. The beds were very comfortable and the mini fridge was handy for keeping drinks cold in the Houston heat."
      },
      {
        id: 126,
        user: "BusinessDuo",
        rating: 4.0,
        date: "2025-02-15",
        comment: "Good room for our business trip. Having two queen beds meant we each had plenty of space. The coffee maker was a nice touch for early mornings."
      }
    ]
  },
  { 
    id: 14, 
    name: "Economy Room", 
    roomType: "Economy Room", 
    accommodation: "Single", 
    hotel_name: "Desert Sun Inn",
    location: "Phoenix", 
    images: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c",
      "https://images.unsplash.com/photo-1578898886225-c7c894047899"
    ],
    description: "Our Economy Single Room offers affordable comfort in Phoenix. Designed for the budget-conscious solo traveler, this cozy room provides all essential amenities for a comfortable stay in the desert city.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Air Conditioning"
    ],
    price: 129,
    currency: "USD",
    reviews: [
      {
        id: 127,
        user: "DesertExplorer",
        rating: 3.8,
        date: "2025-04-05",
        comment: "Great value room for a quick Phoenix trip. Nothing fancy but clean and comfortable. The air conditioning worked perfectly for the hot desert days."
      },
      {
        id: 128,
        user: "BudgetSoloTraveler",
        rating: 3.7,
        date: "2025-01-18",
        comment: "Basic but comfortable room that met all my needs. Perfect if you're just looking for a place to sleep while exploring Phoenix."
      }
    ]
  },
  { 
    id: 15, 
    name: "Luxury Room", 
    roomType: "Luxury Room", 
    accommodation: "Apartment", 
    hotel_name: "Rose City Residences",
    location: "Portland", 
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    ],
    description: "Our Luxury Apartment in Portland combines elegant design with home-like comfort. Featuring separate living and sleeping areas, high-end furnishings, and a fully equipped kitchen, this accommodation is perfect for extended stays.",
    amenities: [
      "High-speed Wi-Fi",
      "Smart TV",
      "Fully Equipped Kitchen",
      "Washer/Dryer",
      "Work Space"
    ],
    price: 469,
    currency: "USD",
    reviews: [
      {
        id: 129,
        user: "PortlandFoodie",
        rating: 4.8,
        date: "2025-03-22",
        comment: "Beautiful apartment with everything you could need. The kitchen was well-equipped for cooking meals with local Portland ingredients. Would definitely stay again."
      },
      {
        id: 130,
        user: "RemoteWorker",
        rating: 4.7,
        date: "2025-02-10",
        comment: "Perfect for my working vacation in Portland. The workspace was comfortable and the high-speed Wi-Fi never let me down. The separate living area made it feel like home."
      }
    ]
  },
  { 
    id: 16, 
    name: "Deluxe Room", 
    roomType: "Deluxe Room", 
    accommodation: "Resort Villa", 
    hotel_name: "Rocky Mountain Lodge",
    location: "Denver", 
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      "https://images.unsplash.com/photo-1609949279531-cf48d64a889a"
    ],
    description: "Our Deluxe Resort Villa in Denver offers premium comfort with mountain charm. This spacious standalone accommodation features rustic-luxe decor, multiple rooms, and breathtaking views of the surrounding Rocky Mountains.",
    amenities: [
      "Wi-Fi",
      "Smart TV",
      "Fireplace",
      "Private Deck",
      "Kitchenette"
    ],
    price: 529,
    currency: "USD",
    reviews: [
      {
        id: 131,
        user: "MountainLover",
        rating: 4.9,
        date: "2025-04-02",
        comment: "Incredible villa with stunning mountain views. The fireplace was perfect after a day of hiking, and the private deck offered spectacular sunrise views. Worth every penny."
      },
      {
        id: 132,
        user: "ColoradoExplorer",
        rating: 4.7,
        date: "2025-01-25",
        comment: "Beautiful accommodation with the perfect blend of rustic charm and modern luxury. The villa felt secluded despite being close to Denver's attractions."
      }
    ]
  },
  { 
    id: 17, 
    name: "Standard Room", 
    roomType: "Standard Room", 
    accommodation: "Bungalow", 
    hotel_name: "Great Salt Lake Resort",
    location: "Salt Lake City", 
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7"
    ],
    description: "Our Standard Bungalow in Salt Lake City offers private, comfortable accommodations at a great value. This charming standalone unit features a cozy interior, essential amenities, and easy access to the city's attractions.",
    amenities: [
      "Wi-Fi",
      "TV",
      "Coffee Maker",
      "Private Entrance"
    ],
    price: 199,
    currency: "USD",
    reviews: [
      {
        id: 133,
        user: "UtahAdventurer",
        rating: 4.1,
        date: "2025-03-15",
        comment: "Charming bungalow that offered more privacy than a standard hotel room. Loved having our own private entrance and the location was convenient for exploring Salt Lake City."
      },
      {
        id: 134,
        user: "SkiEnthusiast",
        rating: 4.0,
        date: "2025-02-03",
        comment: "Great value accommodation for our ski trip. The bungalow was cozy and warm, and the coffee maker was appreciated for early morning starts to the slopes."
      }
    ]
  },
  { 
    id: 18, 
    name: "Executive Suite", 
    roomType: "Executive Suite", 
    accommodation: "Single", 
    hotel_name: "Music City Hotel",
    location: "Nashville", 
    images: [
      "https://images.unsplash.com/photo-1597218868981-1b68e15f0065",
      "https://images.unsplash.com/photo-1612320648993-61c1cd604b71"
    ],
    description: "Our Executive Suite in Nashville offers premium single accommodations for business travelers and music enthusiasts. Featuring a king bed, separate sitting area, and music-inspired decor, this suite provides both comfort and style.",
    amenities: [
      "High-speed Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "Premium Sound System",
      "Work Desk"
    ],
    price: 399,
    currency: "USD",
    reviews: [
      {
        id: 135,
        user: "MusicCityVisitor",
        rating: 4.8,
        date: "2025-04-10",
        comment: "Perfect suite for my Nashville experience! The premium sound system was excellent for enjoying local music, and the king bed was incredibly comfortable. Highly recommend."
      },
      {
        id: 136,
        user: "CountryMusicFan",
        rating: 4.6,
        date: "2025-03-05",
        comment: "Excellent suite with thoughtful music-themed touches. The separate sitting area was great for relaxing after exploring Broadway. Will definitely return."
      }
    ]
  },
  { 
    id: 19, 
    name: "Presidential Suite", 
    roomType: "Presidential Suite", 
    accommodation: "Double", 
    hotel_name: "Motor City Grand Hotel",
    location: "Detroit", 
    images: [
      "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    ],
    description: "Our Presidential Double Suite in Detroit offers unparalleled luxury with two separate bedrooms. This premium accommodation features elegant decor, a spacious living area, and exclusive amenities for the most discerning guests.",
    amenities: [
      "Premium Wi-Fi",
      "Multiple TVs",
      "Full Bar",
      "Dining Area",
      "Executive Work Space"
    ],
    price: 799,
    currency: "USD",
    reviews: [
      {
        id: 137,
        user: "LuxuryDetroitStay",
        rating: 4.8,
        date: "2025-03-28",
        comment: "Incredible suite with sophisticated design and attention to detail. Having two separate bedrooms was perfect for our business trip. The full bar was a nice touch for evening meetings."
      },
      {
        id: 138,
        user: "MotorCityExplorer",
        rating: 4.7,
        date: "2025-01-15",
        comment: "Top-tier accommodation in Detroit. The spacious living area was perfect for entertaining colleagues, and the executive workspace was ideal for catching up on work."
      }
    ]
  },
  { 
    id: 20, 
    name: "Superior Room", 
    roomType: "Superior Room", 
    accommodation: "Twin", 
    hotel_name: "Empire State Hotel",
    location: "New York", 
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f"
    ],
    description: "Our Superior Twin Room in New York offers enhanced comfort and style. Featuring two plush beds, contemporary design, and elevated amenities, this accommodation is perfect for friends or colleagues exploring the Big Apple.",
    amenities: [
      "Wi-Fi",
      "Flat-screen TV",
      "Coffee Maker",
      "Premium Toiletries"
    ],
    price: 349,
    currency: "USD",
    reviews: [
      {
        id: 139,
        user: "NYCExplorerDuo",
        rating: 4.5,
        date: "2025-04-08",
        comment: "Great room for our NYC adventure. The beds were very comfortable and the location was perfect for exploring Manhattan. Appreciated the premium toiletries."
      },
      {
        id: 140,
        user: "BusinessColleagues",
        rating: 4.3,
        date: "2025-02-22",
        comment: "Perfect accommodation for our business trip. The twin beds were comfortable and the room was spacious enough for two colleagues to share comfortably."
      }
    ]
  }
];
export default roomsData;