import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { venuesData, offersData, testimonialsData } from '../assets/assets';

const Home = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('Dubai');
  const [date, setDate] = useState('Mar 15, 2025');
  const [time, setTime] = useState('6:00 PM');
  const [players, setPlayers] = useState('10');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/venues?location=${encodeURIComponent(selectedLocation)}&players=${players}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section (Wireframe Page 1) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-neutral-900 text-white overflow-hidden pt-24 pb-16">
        {/* Background Image with Dark Vignette Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transform transition duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-900/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Pill / Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider text-neutral-200 mb-6 font-medium animate-fadeIn">
            <span>The Ultimate Futsal Experience</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight max-w-4xl mx-auto leading-[1.15] text-white">
            Discover Your Perfect <br />
            <span className="italic font-normal">Futsal Destination</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Find and book your next futsal court with FutsalHub. <br className="hidden sm:inline" />
            Bring your team and get ready to play.
          </p>

          {/* Booking / Search Filter Widget (Wireframe Page 1) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2.5 sm:p-2 shadow-2xl text-neutral-900 border border-white/40">
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-0 items-center">
              {/* Location */}
              <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Venues
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="Dubai">Dubai</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="New York">New York</option>
                  <option value="Chicago">Chicago</option>
                  <option value="San Diego">San Diego</option>
                </select>
              </div>

              {/* Date */}
              <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Date
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
                />
              </div>

              {/* Time */}
              <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Time
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
                />
              </div>

              {/* Players */}
              <div className="px-5 py-2.5 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Players
                </label>
                <select
                  value={players}
                  onChange={(e) => setPlayers(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="10">10 Players (5v5)</option>
                  <option value="14">14 Players (7v7)</option>
                  <option value="8">8 Players</option>
                  <option value="12">12 Players</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="p-1">
                <button
                  type="submit"
                  className="w-full h-full py-3.5 px-6 bg-neutral-950 hover:bg-black text-white rounded-xl sm:rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <Search className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Venues Section (Wireframe Page 1) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
              Featured Venues
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500">
              Discover our handpicked selection of futsal courts near you, offering quality pitches and a great match-day experience.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venuesData.slice(0, 4).map((venue, idx) => (
              <div
                key={venue.id}
                className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image & Badge */}
                <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                  <img
                    src={venue.images[0]}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {venue.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-900 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {venue.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif font-bold text-lg text-neutral-900 group-hover:text-black">
                        {venue.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-semibold text-neutral-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{venue.rating}</span>
                      </div>
                    </div>
                    <p className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{venue.location}</span>
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-base text-neutral-900">${venue.price}</span>
                      <span className="text-xs text-neutral-500"> / hour</span>
                    </div>
                    <Link
                      to={`/venue/${venue.id}`}
                      className="px-3.5 py-1.5 bg-white border border-neutral-200 hover:border-black rounded-lg text-xs font-semibold text-neutral-800 hover:text-black transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/venues"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border border-neutral-300 hover:border-black text-neutral-900 font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow"
            >
              View All Venues
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section (Wireframe Page 1) */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
                Exclusive Offers
              </h2>
              <p className="mt-2 text-sm text-neutral-500 max-w-xl">
                Take advantage of our limited-time offers and team packages to book your next match for less.
              </p>
            </div>
            <Link
              to="/venues"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-black mt-4 md:mt-0 group"
            >
              <span>View All Offers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offersData.map((offer) => (
              <div
                key={offer.id}
                className="relative rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 text-white p-7 flex flex-col justify-between shadow-lg overflow-hidden group"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wide">
                    {offer.discount}
                  </span>
                  <h3 className="text-xl font-bold font-serif mt-2">{offer.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{offer.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{offer.expiry}</span>
                  <Link
                    to="/venues"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-neutral-200 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Offers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Players Say (Testimonials, Wireframe Page 1) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
              What Our Players Say
            </h2>
            <p className="mt-3 text-sm text-neutral-500">
              Discover why players and teams choose FutsalHub to find courts and manage their bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testi, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-300 overflow-hidden flex items-center justify-center font-bold text-neutral-600">
                      ER
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">{testi.name}</h4>
                      <p className="text-xs text-neutral-500">{testi.location}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
                    "{testi.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay in the Game / Newsletter (Wireframe Page 1) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-950 text-white py-14 px-6 sm:px-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">Stay in the Game</h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-lg mx-auto">
              Join our newsletter for new futsal venues, exclusive offers, and the latest tournament updates.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to FutsalHub!');
              }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-neutral-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-sm rounded-xl hover:bg-neutral-200 transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-4 text-[11px] text-neutral-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
