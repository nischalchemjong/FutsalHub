import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { offersData } from '../assets/assets';

const ExclusiveOffers = () => {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Subtitle + View All Offers Link */}
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

        {/* 3 Offer Cards (Wireframe Page 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-2xl bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 text-white p-7 sm:p-8 flex flex-col justify-between shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[260px]"
            >
              {/* Discount Badge & Titles */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-bold tracking-wide">
                  {offer.discount}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif mt-2">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                  {offer.description}
                </p>
              </div>

              {/* Bottom Expiry & View Offers */}
              <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">{offer.expiry}</span>
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
  );
};

export default ExclusiveOffers;
