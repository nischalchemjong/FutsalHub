// Assets and mock data for FutsalHub

export const futsalHubLogo = {
  name: 'FutsalHub',
  tagline: 'Find and book your next futsal court'
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Venues', path: '/venues' },
  { name: 'Tournaments', path: '/tournaments' },
  { name: 'About', path: '/about' },
];

export const venuesData = [
  {
    id: '1',
    name: 'The Grand Arena',
    type: '5-a-side',
    location: 'Dubai',
    fullAddress: 'Los Angeles, California, USA',
    secondaryAddress: 'San Diego, CA, USA',
    price: 100,
    rating: 4.9,
    reviewsCount: '200+',
    badge: 'Best Seller',
    tagline: 'Your Next Great Match Starts Here',
    amenities: ['free wifi', 'equipment', 'parking'],
    surface: 'High-grade synthetic turf with shock pad',
    description: 'Book a quality futsal court for your next match with friends or your team. The venue offers a maintained playing surface, equipment, and convenient facilities. Rates are charged per hour for the whole court. Choose your preferred date, start time, and player count to check availability. Arrive a few minutes before your session and contact the venue manager if you need help with your booking.',
    manager: {
      name: 'Emma Rodriguez',
      reviews: '200+ reviews',
      responseRate: '100%',
      responseTime: '30 min'
    },
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529900244928-8687a718c359?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518604667503-465832d0a7a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    name: 'The Regal Court',
    type: '7-a-side',
    location: 'Dubai',
    fullAddress: 'Skyline Boulevard, NY, USA',
    secondaryAddress: 'Skyline Boulevard, NY, USA',
    price: 150,
    rating: 4.9,
    reviewsCount: '200+',
    badge: null,
    tagline: 'Championship Standard Indoor Arena',
    amenities: ['free wifi', 'equipment', 'parking'],
    surface: 'Polished hardwood futsal pitch',
    description: 'A premier indoor court engineered for professional and casual players. Climate controlled, LED match lighting, and FIFA-grade futsal balls provided.',
    manager: {
      name: 'Emma Rodriguez',
      reviews: '200+ reviews',
      responseRate: '100%',
      responseTime: '30 min'
    },
    images: [
      'https://images.unsplash.com/photo-1529900244928-8687a718c359?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '3',
    name: 'Velvet Futsal Court',
    type: '5-a-side',
    location: 'Dubai',
    fullAddress: 'Beachfront Drive, CA, USA',
    secondaryAddress: 'Beachfront Drive, CA, USA',
    price: 120,
    rating: 4.9,
    reviewsCount: '200+',
    badge: 'Best Seller',
    tagline: 'Coastal Vibes and Premium Pitches',
    amenities: ['free wifi', 'equipment', 'parking'],
    surface: 'Non-slip rubberized seamless court',
    description: 'Located minutes from the coast, enjoy top-tier futsal facilities with premium goal netting and warm shower locker rooms.',
    manager: {
      name: 'Emma Rodriguez',
      reviews: '200+ reviews',
      responseRate: '100%',
      responseTime: '30 min'
    },
    images: [
      'https://images.unsplash.com/photo-1518604667503-465832d0a7a0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: '4',
    name: 'Crystal Futsal Arena',
    type: '5-a-side',
    location: 'Dubai',
    fullAddress: 'Night Sky Parkway, AZ, USA',
    secondaryAddress: 'Night Sky Parkway, AZ, USA',
    price: 200,
    rating: 4.9,
    reviewsCount: '200+',
    badge: 'New',
    tagline: 'The Ultimate Night Match Destination',
    amenities: ['free wifi', 'equipment', 'parking'],
    surface: 'High-density indoor turf',
    description: 'State-of-the-art night futsal arena with automated scoring display, high-definition broadcast cameras, and referee services on request.',
    manager: {
      name: 'Emma Rodriguez',
      reviews: '200+ reviews',
      responseRate: '100%',
      responseTime: '30 min'
    },
    images: [
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: '5',
    name: 'Skyline Futsal Hub',
    type: '7-a-side',
    location: 'Chicago',
    fullAddress: 'Metro Avenue, Chicago, USA',
    secondaryAddress: 'Metro Avenue, Chicago, USA',
    price: 250,
    rating: 4.9,
    reviewsCount: '200+',
    badge: null,
    tagline: 'Rooftop Pitch with City Skyline Views',
    amenities: ['free wifi', 'equipment', 'parking'],
    surface: 'Pro turf with perimeter netting',
    description: 'Panoramic views of the skyline while you compete with your crew. Full hospitality lounge and refreshment bar available.',
    manager: {
      name: 'Emma Rodriguez',
      reviews: '200+ reviews',
      responseRate: '100%',
      responseTime: '30 min'
    },
    images: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const offersData = [
  {
    id: '1',
    discount: '25% OFF',
    title: 'Summer Team Package',
    description: 'Enjoy discounted court time for your team',
    expiry: 'Expires Aug 31'
  },
  {
    id: '2',
    discount: '20% OFF',
    title: 'Team Match Package',
    description: 'Special team package with equipment included',
    expiry: 'Expires Sep 20'
  },
  {
    id: '3',
    discount: '20% OFF',
    title: 'Early Bird Special',
    description: 'Book your court in advance and save on your next match at participating futsal venues.',
    expiry: 'Expires Aug 31'
  }
];

export const testimonialsData = [
  {
    id: '1',
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    quote: 'FutsalHub makes it easy to find a court, book our weekly match, and keep the whole team ready to play.'
  },
  {
    id: '2',
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    quote: 'FutsalHub makes it easy to find a court, book our weekly match, and keep the whole team ready to play.'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    quote: 'FutsalHub makes it easy to find a court, book our weekly match, and keep the whole team ready to play.'
  }
];

export const bookingsData = [
  {
    id: 'b1',
    venueName: 'Crystal Futsal Arena (5-a-side)',
    address: 'Night Sky Parkway, AZ, USA',
    players: 10,
    total: 200,
    startTime: 'Sep 20, 2025 · 6:00 PM',
    endTime: 'Sep 20, 2025 · 7:00 PM',
    status: 'Paid'
  },
  {
    id: 'b2',
    venueName: 'The Grand Arena (5-a-side)',
    address: 'Los Angeles, California, USA',
    players: 10,
    total: 100,
    startTime: 'Sep 20, 2025 · 6:00 PM',
    endTime: 'Sep 20, 2025 · 7:00 PM',
    status: 'Unpaid'
  },
  {
    id: 'b3',
    venueName: 'The Grand Arena (5-a-side)',
    address: 'Los Angeles, California, USA',
    players: 10,
    total: 100,
    startTime: 'Sep 20, 2025 · 6:00 PM',
    endTime: 'Sep 20, 2025 · 7:00 PM',
    status: 'Paid'
  }
];
