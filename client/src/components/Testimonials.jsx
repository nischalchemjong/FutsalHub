import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
            What Our Players Say
          </h2>
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
            Discover why players and teams choose FutsalHub to find courts and manage their bookings.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testi, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center font-bold text-neutral-600 text-sm">
                    ER
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">{testi.name}</h4>
                    <p className="text-xs text-neutral-400">{testi.location}</p>
                  </div>
                </div>

                {/* Stars Rating (Wireframe shows solid stars) */}
                <div className="flex items-center gap-1 text-neutral-900 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-current text-neutral-900" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  "{testi.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
