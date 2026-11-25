import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const VenueCard = ({ venue }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Venue Thumbnail & Badge */}
      <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
        <img
          src={venue.images && venue.images[0] ? venue.images[0] : 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'}
          alt={venue.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {venue.badge && (
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-neutral-900 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide">
            {venue.badge}
          </span>
        )}
      </div>

      {/* Venue Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif font-bold text-lg text-neutral-900 group-hover:text-black tracking-tight">
              {venue.name}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-800 shrink-0">
              <Star className="w-3.5 h-3.5 fill-current text-neutral-900" />
              <span>{venue.rating}</span>
            </div>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{venue.location}</span>
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
          <div>
            <span className="font-bold text-base text-neutral-900">${venue.price}</span>
            <span className="text-xs text-neutral-500 font-normal"> / hour</span>
          </div>
          <Link
            to={`/venue/${venue.id}`}
            className="px-4 py-1.5 bg-white border border-neutral-300 hover:border-black rounded-lg text-xs font-semibold text-neutral-800 hover:text-black transition-all hover:bg-neutral-50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
