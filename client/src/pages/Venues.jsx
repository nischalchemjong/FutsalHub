import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Wifi, Package, Car, MapPin } from 'lucide-react';
import { venuesData } from '../assets/assets';

const Venues = () => {
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get('search') || '';
  const locationParam = searchParams.get('location') || '';

  // Filter States
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedPriceRanges([]);
    setSortBy('');
  };

  const filteredVenues = useMemo(() => {
    return venuesData
      .filter((v) => {
        if (searchFilter) {
          const q = searchFilter.toLowerCase();
          const match =
            v.name.toLowerCase().includes(q) ||
            v.location.toLowerCase().includes(q) ||
            v.fullAddress.toLowerCase().includes(q);
          if (!match) return false;
        }

        if (locationParam && locationParam !== 'All') {
          if (!v.location.toLowerCase().includes(locationParam.toLowerCase()) &&
              !v.fullAddress.toLowerCase().includes(locationParam.toLowerCase())) {
            return false;
          }
        }

        if (selectedTypes.length > 0) {
          const matchType = selectedTypes.some((t) => {
            if (t === '5-a-side') return v.type === '5-a-side';
            if (t === '7-a-side') return v.type === '7-a-side';
            return true;
          });
          if (!matchType) return false;
        }

        if (selectedPriceRanges.length > 0) {
          const matchPrice = selectedPriceRanges.some((r) => {
            if (r === '50-100') return v.price >= 50 && v.price <= 100;
            if (r === '100-150') return v.price > 100 && v.price <= 150;
            if (r === '150-250') return v.price > 150 && v.price <= 250;
            return true;
          });
          if (!matchPrice) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'low-to-high') return a.price - b.price;
        if (sortBy === 'high-to-low') return b.price - a.price;
        return 0;
      });
  }, [searchFilter, locationParam, selectedTypes, selectedPriceRanges, sortBy]);

  return (
    <div className="pt-28 pb-20 bg-neutral-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
            Futsal Venues
          </h1>
          <p className="mt-2 text-sm text-neutral-500 max-w-2xl">
            Take advantage of our limited time offers and team packages to book your next match for less.
          </p>
        </div>

        {/* Content Layout: Venues List + Filters Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Venues List (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {filteredVenues.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
                <p className="text-neutral-500 font-medium">No futsal courts match your filter criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-5 py-2 bg-black text-white text-xs font-semibold rounded-full"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-4 sm:p-5 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all group"
                >
                  {/* Venue Image */}
                  <Link
                    to={`/venue/${venue.id}`}
                    className="w-full sm:w-64 h-48 sm:h-auto rounded-xl bg-neutral-100 overflow-hidden shrink-0 relative block"
                  >
                    <img
                      src={venue.images[0]}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-neutral-400 font-medium">
                        {venue.secondaryAddress || venue.fullAddress}
                      </p>
                      <Link to={`/venue/${venue.id}`}>
                        <h3 className="font-serif font-bold text-xl text-neutral-900 group-hover:text-black mt-1">
                          {venue.name}
                        </h3>
                      </Link>

                      {/* Stars & Reviews */}
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-neutral-500">{venue.reviewsCount} reviews</span>
                      </div>

                      <p className="flex items-center gap-1.5 text-xs text-neutral-500 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{venue.fullAddress}</span>
                      </p>

                      {/* Amenities Pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 rounded-full text-[11px] text-neutral-700 font-medium">
                          <Wifi className="w-3 h-3" /> free wifi
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 rounded-full text-[11px] text-neutral-700 font-medium">
                          <Package className="w-3 h-3" /> equipment
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 rounded-full text-[11px] text-neutral-700 font-medium">
                          <Car className="w-3 h-3" /> parking
                        </span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-neutral-900">${venue.price}</span>
                        <span className="text-xs text-neutral-500"> /hour</span>
                      </div>
                      <Link
                        to={`/venue/${venue.id}`}
                        className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition"
                      >
                        Book Court
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="pt-6 text-center">
              <button
                type="button"
                className="px-8 py-3 bg-neutral-700 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition"
              >
                Show More
              </button>
            </div>
          </div>

          {/* Filters Sidebar (1 col) - Wireframe Page 3 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <h3 className="font-bold text-sm tracking-widest uppercase text-neutral-900">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-neutral-400 hover:text-black uppercase tracking-wider font-semibold"
                >
                  Clear
                </button>
              </div>

              {/* Popular Filters */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-700 mb-3">Popular filters</h4>
                <div className="space-y-2.5 text-xs text-neutral-600">
                  {['5-a-side', 'Indoor Court', '7-a-side', 'Outdoor Court'].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(item)}
                        onChange={() => toggleType(item)}
                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-700 mb-3">Price</h4>
                <div className="space-y-2.5 text-xs text-neutral-600">
                  {[
                    { label: '$50 to $100', val: '50-100' },
                    { label: '$100 to $150', val: '100-150' },
                    { label: '$150 to $250', val: '150-250' },
                  ].map((range) => (
                    <label key={range.val} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(range.val)}
                        onChange={() => togglePriceRange(range.val)}
                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black"
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-700 mb-3">Sort By</h4>
                <div className="space-y-2.5 text-xs text-neutral-600">
                  {[
                    { label: 'Price Low to High', val: 'low-to-high' },
                    { label: 'Price High to Low', val: 'high-to-low' },
                    { label: 'Newest First', val: 'newest' },
                  ].map((sortOption) => (
                    <label key={sortOption.val} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="sort_by"
                        value={sortOption.val}
                        checked={sortBy === sortOption.val}
                        onChange={() => setSortBy(sortOption.val)}
                        className="w-4 h-4 border-gray-300 text-black focus:ring-black accent-black"
                      />
                      <span>{sortOption.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
