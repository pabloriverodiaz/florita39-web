// Florita 39 — Website UI kit · shared content data
// NOTE: room photos live in /assets/rooms/florita-N, areas in /assets/areas,
// marketing in /assets/marketing. Image paths below are relative to /assets.
// Prices are placeholders in MXN/night — edit freely.
window.F39DATA = {
  brand: {
    address: 'Miguel Hidalgo 103, Centro, 77400 Isla Mujeres, Q.R.',
    instagram: '@florita39islamujeres',
    instagramUrl: 'https://www.instagram.com/florita39islamujeres/',
    phone: '999 101 2428',
    whatsapp: '+52 999 173 2538',
    whatsappUrl: 'https://wa.me/5219991732538',
    web: 'hotelflorita39.com',
    email: 'hola@hotelflorita39.com',
    // ---- Amenitiz booking engine (real engine, on the amenitiz.io subdomain,
    //      domain-independent so it survives pointing hotelflorita39.com here). ----
    // To change it later, edit ONLY these two lines.
    booking: {
      es: 'https://florita39-1.amenitiz.io/es/booking/room',
      en: 'https://florita39-1.amenitiz.io/en/booking/room',
    },
  },

  rooms: [
    {
      id: 'loft-florita',
      name: 'Loft Florita³⁹',
      model: 'Loft · Queen bed · 2 guests',
      audience: 'Best for couples',
      image: 'rooms/florita-1/pro-01.jpg',
      gallery: ['rooms/florita-1/pro-01.jpg', 'rooms/florita-1/pro-02.jpg', 'rooms/florita-1/pro-03.jpg', 'rooms/florita-1/pro-04.jpg', 'rooms/florita-1/pro-05.jpg'],
      price: '$2,800', currency: 'MXN', guests: '2 guests', size: 'Open loft', bed: 'Queen bed',
      tags: ['Private balcony', 'No stairs', 'Kitchenette', 'Walking street'],
      blurb: 'An open, light-filled loft with a queen bed and a private balcony over Av. Hidalgo. No stairs, no rush — our most intimate layout, made for two.',
    },
    {
      id: 'hidalgo-heritage',
      name: 'Hidalgo Heritage',
      model: 'Suite · Balcony · up to 4',
      audience: 'Great for families',
      image: 'rooms/florita-2/pro-09.jpg',
      gallery: ['rooms/florita-2/pro-09.jpg', 'rooms/florita-2/pro-02.jpg', 'rooms/florita-2/pro-06.jpg', 'rooms/florita-2/pro-03.jpg', 'rooms/florita-2/pro-05.jpg'],
      price: '$3,800', currency: 'MXN', guests: 'Up to 4', size: 'Suite', bed: '2 Queen beds',
      tags: ['Private balcony', 'Lounge', 'Second bed', 'Kitchenette'],
      blurb: 'A suite with a private balcony: a bedroom plus a lounge with a second bed. Comfortable space for a family or a group of friends in the heart of the island.',
    },
    {
      id: 'playa-norte',
      name: 'Playa Norte Suite',
      model: 'Suite · Balcony · up to 4',
      audience: 'Great for families',
      image: 'rooms/florita-3/pro-03.jpg',
      gallery: ['rooms/florita-3/pro-03.jpg', 'rooms/florita-3/pro-07.jpg', 'rooms/florita-3/pro-05.jpg', 'rooms/florita-3/pro-06.jpg', 'rooms/florita-3/pro-02.jpg'],
      price: '$3,800', currency: 'MXN', guests: 'Up to 4', size: 'Suite', bed: '2 Queen beds',
      tags: ['Private balcony', 'Lounge', 'Second bed', 'Kitchenette'],
      blurb: 'A bright twin to Hidalgo Heritage with a private balcony, a queen bedroom and a second queen in the lounge — well located and easy for families.',
    },
    {
      id: 'rubber-tree',
      name: 'Rubber Tree',
      model: 'Two-level duplex · up to 4',
      audience: 'Families · two levels',
      image: 'rooms/florita-4/pro-09.jpg',
      gallery: ['rooms/florita-4/pro-09.jpg', 'rooms/florita-4/pro-10.jpg', 'rooms/florita-4/pro-05.jpg', 'rooms/florita-4/pro-04.jpg', 'rooms/florita-4/pro-03.jpg'],
      price: '$3,600', currency: 'MXN', guests: 'Up to 4', size: 'Two levels', bed: 'Queen + King',
      tags: ['Balcony', 'Two levels', 'Breakfast bar', 'Private'],
      blurb: 'A two-level duplex with a breakfast bar and a balcony — a queen downstairs and a king upstairs. More space and privacy for longer stays.',
    },
    {
      id: 'isla-mujeres-duplex',
      name: 'Isla Mujeres Dúplex',
      model: 'Two-level duplex · up to 4',
      audience: 'Groups · two levels',
      image: 'rooms/florita-5/pro-01.jpg',
      gallery: ['rooms/florita-5/pro-01.jpg', 'rooms/florita-5/pro-02.jpg', 'rooms/florita-5/pro-03.jpg', 'rooms/florita-5/pro-04.jpg', 'rooms/florita-5/pro-05.jpg'],
      price: '$4,200', currency: 'MXN', guests: 'Up to 4', size: 'Two levels', bed: 'Queen + King',
      tags: ['Dining for 4', 'L-shaped kitchen', 'Two levels', 'Garden view'],
      blurb: 'Our most spacious duplex: a round dining table for four, an L-shaped kitchen and two levels — a queen downstairs and a king above. Made for groups and larger families.',
    },
    {
      id: 'boutique-garden',
      name: 'Boutique Garden Suite',
      model: 'Garden suite · King bed · 2 guests',
      audience: 'Couples · private garden',
      image: 'rooms/florita-6/pro-06.jpg',
      gallery: ['rooms/florita-6/pro-06.jpg', 'rooms/florita-6/pro-03.jpg', 'rooms/florita-6/pro-07.jpg', 'rooms/florita-6/pro-09.jpg', 'rooms/florita-6/pro-01.jpg'],
      price: '$2,400', currency: 'MXN', guests: '2 guests', size: '30 m²', bed: 'King bed',
      tags: ['Private garden', 'Willow view', 'Kitchenette', 'Ground floor'],
      blurb: 'A 30 m² ground-floor suite with a king bed and a private garden patio, with a green willow view through floor-to-ceiling glass. Two lounge chairs, a kitchenette and a travertine rain shower.',
    },
  ],

  amenities: [
    { icon: 'waves', label: 'Rooftop Pool', note: 'Open 7am – 9pm' },
    { icon: 'sun', label: 'Private Rooftop Club', note: 'Sunset views over Playa Norte' },
    { icon: 'flower-2', label: 'Spa', note: 'Treatments by appointment' },
    { icon: 'coffee', label: 'Coffee Shop', note: 'Locally roasted, all day' },
    { icon: 'utensils', label: "Rubén's Restaurant", note: 'Regional Yucatán kitchen' },
    { icon: 'leaf', label: 'Tropical Garden', note: 'A quiet green courtyard' },
  ],

  services: [
    { icon: 'sparkles', label: 'Housekeeping' },
    { icon: 'plane', label: 'Airport transfer' },
    { icon: 'car', label: 'Golf-cart rental' },
    { icon: 'chef-hat', label: 'Private chef' },
    { icon: 'baby', label: 'Babysitter' },
    { icon: 'concierge-bell', label: 'Butler service' },
    { icon: 'sailboat', label: 'Tours & rentals' },
    { icon: 'map', label: 'Island concierge' },
  ],

  // ---- Experiences / tours -------------------------------------------------
  experiences: [
    { id: 'fishing', icon: 'sailboat', name: 'Fishing tours', meta: 'Half or full day · with a local captain',
      image: 'marketing/playa/j3874.jpg',
      blurb: 'Head out into the Caribbean with local captains — sport fishing, open-water mornings and an optional reef snorkel. We coordinate your departure from the hotel.' },
    { id: 'golf-carts', icon: 'car', name: 'Golf-cart rental', meta: 'By the hour or by the day',
      image: 'marketing/lifestyle/zycar.jpg',
      blurb: 'The best way to explore Isla Mujeres. We leave a cart ready at the hotel so you can roam at your own pace — from Playa Norte to Punta Sur, no schedules.' },
    { id: 'snorkel', icon: 'waves', name: 'Snorkel & reef', meta: 'Reef trips & MUSA underwater museum',
      image: 'marketing/playa/sea.jpg',
      blurb: 'Clear turquoise water and living reef just offshore. Snorkel the reef or visit the famous underwater sculpture museum — gear and guide included.' },
    { id: 'zama', icon: 'umbrella', name: 'Zama Beach Club', meta: 'Included for guests · no minimum spend',
      image: 'marketing/zama/dji3.jpg',
      blurb: 'As a Florita 39 guest you enter Zama Beach Club with no minimum spend — the pool, the loungers and the sea, on your terms.', link: 'zama' },
  ],

  // ---- Zama convenio -------------------------------------------------------
  zama: {
    blurb: 'A short golf-cart ride from the hotel, Zama Beach Club is your day-by-the-sea — and as a guest of Florita 39 you enjoy it with no minimum spend.',
    perks: [
      'No minimum spend for Florita 39 guests',
      'Beachfront pool, loungers and shade',
      'Full food & drink service — order freely',
      'Minutes away by golf cart from the hotel',
    ],
    images: ['marketing/zama/dji3.jpg', 'marketing/zama/j3933.jpg', 'marketing/zama/j3954.jpg'],
  },

  // ---- Island guide --------------------------------------------------------
  island: {
    intro: 'Eight kilometres of Caribbean across from Cancún: turquoise water, walkable streets, golf carts and sunsets on the malecón. Florita 39 sits right in the centre — everything a few steps or a short ride away.',
    highlights: [
      { name: 'Playa Norte', meta: '10 min away', image: 'marketing/playa/sea.jpg', blurb: 'Shallow turquoise water and soft sand — one of the most beautiful beaches in the Caribbean.' },
      { name: 'Punta Sur', meta: 'South tip', image: 'marketing/exterior/m8154.jpg', blurb: 'Cliffs, sculptures and the first sunrise in Mexico at the island’s southern point.' },
      { name: 'The walking street', meta: 'At your door', image: 'marketing/exterior/j3851.jpg', blurb: 'Av. Hidalgo — shops, restaurants and island life, right outside the hotel.' },
      { name: 'Ultramar ferry', meta: '3 min away', image: 'marketing/playa/m5709.jpg', blurb: 'Twenty minutes from Cancún. Step off the ferry and you’re almost home.' },
    ],
  },

  // ---- Restaurant ----------------------------------------------------------
  restaurant: {
    name: "Rubén's Restaurant",
    blurb: 'Fresh regional cooking and an all-day coffee shop in the heart of the hotel — open to guests and the island alike.',
    image: 'marketing/restaurante/00.jpg',
    gallery: ['marketing/restaurante/00.jpg', 'marketing/restaurante/01.jpg', 'marketing/restaurante/02.jpg', 'marketing/restaurante/03.jpg'],
    highlights: [
      { icon: 'coffee', label: 'All-day coffee', note: 'Locally roasted', img: 'marketing/restaurante/01.jpg' },
      { icon: 'utensils', label: 'Regional kitchen', note: 'Yucatán & Caribbean', img: 'marketing/restaurante/02.jpg' },
      { icon: 'wine', label: 'Sunset drinks', note: 'On the rooftop', img: 'photos/island-sunset.jpg' },
    ],
  },

  // ---- Offers --------------------------------------------------------------
  offers: [
    { badge: '30% off', title: 'Summer in the family villas', blurb: 'Villas 2 & 4 at 30% off this summer — two beds, rooftop pool and a car-free island.', terms: 'Select summer dates · direct booking only.' },
    { badge: 'Best rate', title: 'Book direct & save', blurb: 'The lowest rates are always here, direct with us — no intermediary fees.', terms: 'Always on · hotelflorita39.com or WhatsApp.' },
    { badge: 'Included', title: 'Zama Beach Club access', blurb: 'Every stay includes Zama Beach Club entry with no minimum spend.', terms: 'For registered guests during their stay.' },
  ],

  // ---- FAQ -----------------------------------------------------------------
  faq: [
    { q: 'How do I get to the hotel from Cancún?', a: 'Take the Ultramar ferry from Puerto Juárez (about 20 minutes). Florita 39 is a 3-minute walk from the ferry terminal, on Av. Hidalgo in the centre.' },
    { q: 'Is there parking? Do I need a car?', a: 'Isla Mujeres is a car-free island in the centre — you won’t need one. We rent golf carts at the hotel, the best way to get around.' },
    { q: 'What time is check-in and check-out?', a: 'Check-in is from 3:00 pm and check-out is at 12:00 pm. Early check-in and late check-out are subject to availability.' },
    { q: 'Do the rooms have kitchens?', a: 'Yes — every model has a kitchenette or full kitchen. The duplex layouts also have a dining area.' },
    { q: 'Is Zama Beach Club really included?', a: 'Yes. As a Florita 39 guest you enter Zama with no minimum spend and order freely. Ask us to arrange your day.' },
    { q: 'Can you help with tours and transfers?', a: 'Of course. Our concierge arranges fishing tours, snorkel trips, airport transfers, a private chef and more — just ask before or during your stay.' },
  ],

  // ---- Gallery -------------------------------------------------------------
  gallery: {
    Rooms: ['rooms/florita-1/pro-01.jpg', 'rooms/florita-2/pro-09.jpg', 'rooms/florita-3/pro-03.jpg', 'rooms/florita-4/pro-09.jpg', 'rooms/florita-5/pro-01.jpg', 'rooms/florita-6/pro-06.jpg'],
    Rooftop: ['marketing/observer/the-roof-10.jpg', 'areas/terraza/05.jpg', 'marketing/observer/the-roof-1.jpg', 'marketing/azotea/dji1.jpg', 'marketing/azotea/02.jpg'],
    Island: ['marketing/playa/sea.jpg', 'marketing/playa/j3874.jpg', 'marketing/exterior/m8154.jpg', 'marketing/playa/m5709.jpg'],
    Dining: ['marketing/restaurante/00.jpg', 'marketing/restaurante/01.jpg', 'marketing/restaurante/02.jpg', 'marketing/restaurante/03.jpg'],
  },

  reviews: [
    { name: 'Marisol R.', from: 'Mexico City', text: 'It truly feels like a home by the sea. Every detail — the chukum walls, the light, the rooftop at sunset — was considered.', stars: 5 },
    { name: 'James &amp; Olivia', from: 'London', text: 'The best location on the walking street. We stepped out into the heart of Isla Mujeres and back into total calm.', stars: 5 },
    { name: 'Daniela P.', from: 'Monterrey', text: 'Intimate, quiet and genuinely warm service. The private chef evening was unforgettable.', stars: 5 },
  ],
};
