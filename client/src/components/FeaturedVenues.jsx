import React from 'react';
import { Link } from 'react-router-dom';
import VenueCard from './VenueCard';
import { venuesData } from '../assets/assets';

const FeaturedVenues = () => {
  // Wireframe displays 4 featured venue cards:
  // Card 1: Best Seller - The Grand Arena, Dubai, $100 / hour, 4.9
  // Card 2: The Grand Arena, Dubai, $100 / hour, 4.9
  // Card 3: Best Seller - The Grand Arena, Dubai, $100 / hour, 4.9
  // Card 4: New - The Grand Arena, Dubai, $100 / hour, 4.9
  const featuredVenues = [
    {
      id: '1',
      name: 'The Grand Arena',
      location: 'Dubai',
      price: 100,
      rating: 4.9,
      badge: 'Best Seller',
      images: [venuesData[0]?.images[0] || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80']
    },
    {
      id: '2',
      name: 'The Grand Arena',
      location: 'Dubai',
      price: 100,
      rating: 4.9,
      badge: null,
      images: [venuesData[1]?.images[0] || 'https://images.unsplash.com/photo-1529900244928-8687a718c359?auto=format&fit=crop&w=800&q=80']
    },
    {
      id: '3',
      name: 'The Grand Arena',
      location: 'Dubai',
      price: 100,
      rating: 4.9,
      badge: 'Best Seller',
      images: [venuesData[2]?.images[0] || 'https://images.unsplash.com/photo-1518604667503-465832d0a7a0?auto=format&fit=crop&w=800&q=80']
    },
    {
      id: '4',
      name: 'The Grand Arena',
      location: 'Dubai',
      price: 100,
      rating: 4.9,
      badge: 'New',
      images: [venuesData[3]?.images[0] || 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
            Featured Venues
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed">
            Discover our handpicked selection of futsal courts near you, offering quality pitches and a great match-day experience.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVenues.map((venue, idx) => (
            <VenueCard key={`${venue.id}-${idx}`} venue={venue} />
          ))}
        </div>

        {/* View All Venues Button (Wireframe Page 1) */}
        <div className="mt-14 text-center">
          <Link
            to="/venues"
            className="inline-flex items-center justify-center px-8 py-3 bg-white border border-neutral-300 hover:border-black text-neutral-900 font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-sm hover:shadow"
          >
            View All Venues
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
