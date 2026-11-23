import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Wifi, Package, Car, MapPin, Shield, CheckCircle, Heart, Share2, Plus, Minus, UserCheck } from 'lucide-react';
import { venuesData } from '../assets/assets';

const VenueDetails = () => {
  const { id } = useParams();
  const venue = venuesData.find((v) => v.id === id) || venuesData[0];

  const [date, setDate] = useState('2025-03-20');
  const [time, setTime] = useState('18:00');
  const [players, setPlayers] = useState('10 players');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header (Wireframe Page 2) */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900">
              {venue.name} ({venue.type})
            </h1>
            <span className="px-3 py-0.5 rounded-full bg-neutral-800 text-white text-xs font-semibold">
              20% OFF
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-neutral-500">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-neutral-700 font-medium ml-1">{venue.reviewsCount} reviews</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{venue.fullAddress}</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid (Wireframe Page 2) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden mb-12">
          {/* Main Large Image */}
          <div className="md:col-span-2 aspect-[4/3] md:aspect-auto md:h-[420px] bg-neutral-100 overflow-hidden">
            <img
              src={venue.images[0]}
              alt={venue.name}
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
            />
          </div>

          {/* 4 Smaller Images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 h-[420px]">
            {(venue.images.slice(1, 5).length > 0
              ? venue.images.slice(1, 5)
              : [venue.images[0], venue.images[0], venue.images[0], venue.images[0]]
            ).map((img, index) => (
              <div key={index} className="bg-neutral-100 overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Court view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Headline + Price Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-100 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900">
              {venue.tagline}
            </h2>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700">
                <Wifi className="w-3 h-3" /> free wifi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700">
                <Package className="w-3 h-3" /> equipment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700">
                <Car className="w-3 h-3" /> parking
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
              ${venue.price}
              <span className="text-sm font-sans font-normal text-neutral-500">/ hour</span>
            </div>
          </div>
        </div>

        {/* Check Availability Box (Wireframe Page 2) */}
        <div className="my-8 bg-neutral-50/70 border border-neutral-200 rounded-2xl p-4 sm:p-5">
          <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
            <div className="bg-white p-3 rounded-xl border border-neutral-200">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm font-medium focus:outline-none mt-0.5 bg-transparent"
              />
            </div>

            <div className="bg-white p-3 rounded-xl border border-neutral-200">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-sm font-medium focus:outline-none mt-0.5 bg-transparent"
              />
            </div>

            <div className="bg-white p-3 rounded-xl border border-neutral-200">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Players
              </label>
              <select
                value={players}
                onChange={(e) => setPlayers(e.target.value)}
                className="w-full text-sm font-medium focus:outline-none mt-0.5 bg-transparent cursor-pointer"
              >
                <option value="10 players">10 players</option>
                <option value="14 players">14 players</option>
                <option value="8 players">8 players</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-neutral-700 hover:bg-neutral-800 text-white rounded-xl font-medium text-sm transition-all shadow"
              >
                Check Availability
              </button>
            </div>
          </form>

          {bookingSuccess && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center justify-between">
              <span>Court is available for {date} at {time}! Added to your booking session.</span>
              <Link to="/my-bookings" className="underline font-semibold ml-2">
                View in My Bookings
              </Link>
            </div>
          )}
        </div>

        {/* Highlights / Features List (Wireframe Page 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Private Court</h4>
                <p className="text-xs text-neutral-500 mt-0.5">A dedicated court for your match.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Well Maintained</h4>
                <p className="text-xs text-neutral-500 mt-0.5">This venue follows regular court maintenance.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Great location</h4>
                <p className="text-xs text-neutral-500 mt-0.5">90% of players rated the location 5 stars.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Easy booking experience</h4>
                <p className="text-xs text-neutral-500 mt-0.5">100% of players rated the booking process 5 stars.</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-neutral-600 leading-relaxed">
            <p>{venue.description}</p>
          </div>
        </div>

        {/* Location on Map (Wireframe Page 2) */}
        <div className="my-14">
          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">Location on map</h3>

          <div className="relative w-full h-80 sm:h-96 bg-neutral-200 rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-300">
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 bg-neutral-300/60 opacity-80" />
            
            {/* Map Controls */}
            <div className="absolute right-4 top-4 bg-white rounded-lg shadow-md border border-neutral-200 flex flex-col">
              <button className="p-2 hover:bg-neutral-50 border-b border-neutral-100 text-neutral-600">
                <Plus className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-neutral-50 text-neutral-600">
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Location Pin Callout */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-neutral-800 text-white text-xs px-3.5 py-1.5 rounded-lg shadow-lg mb-2 font-medium">
                Exact location provided after booking
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg border-2 border-white">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-sm text-neutral-900">{venue.fullAddress}</h4>
            <p className="text-xs text-neutral-500">Your local home for the next match.</p>
          </div>
        </div>

        {/* Managed By Emma Rodriguez (Wireframe Page 2) */}
        <div className="my-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-neutral-300 flex items-center justify-center font-bold text-neutral-600 text-lg">
              ER
            </div>
            <div>
              <h4 className="font-bold text-base text-neutral-900">
                Managed by {venue.manager.name}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mt-1">
                <span>{venue.manager.reviews}</span>
                <span>•</span>
                <span>Response rate: {venue.manager.responseRate}</span>
                <span>•</span>
                <span>Response time: {venue.manager.responseTime}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => alert(`Connecting you to venue manager ${venue.manager.name}`)}
            className="px-6 py-2.5 bg-neutral-700 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition"
          >
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
