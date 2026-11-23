import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { bookingsData } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState(bookingsData);

  const handlePayNow = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'Paid' } : b))
    );
    alert('Payment successful! Your match slot is confirmed.');
  };

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Wireframe Page 4) */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900">
            My Bookings
          </h1>
          <p className="mt-2 text-sm text-neutral-500 max-w-2xl">
            Easily manage your past, current, and upcoming futsal bookings in one place. Plan your next match in just a few clicks.
          </p>
        </div>

        {/* Table / List View */}
        <div className="border-t border-neutral-200">
          {/* Column Titles */}
          <div className="hidden md:grid grid-cols-12 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-200">
            <div className="col-span-6">Venues</div>
            <div className="col-span-4">Date & Timings</div>
            <div className="col-span-2 text-right">Payment</div>
          </div>

          {/* Booking Items */}
          <div className="divide-y divide-neutral-200">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Venue Details */}
                <div className="md:col-span-6 flex gap-4 items-start">
                  <div className="w-24 h-20 rounded-xl bg-neutral-200 shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80"
                      alt={booking.venueName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-neutral-900">
                      {booking.venueName}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{booking.address}</span>
                    </p>
                    <p className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Players: {booking.players}</span>
                    </p>
                    <p className="text-xs font-semibold text-neutral-900 mt-1">
                      Total: ${booking.total}
                    </p>
                  </div>
                </div>

                {/* Date & Timings */}
                <div className="md:col-span-4 space-y-1 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900">Start time:</span>
                    <span>{booking.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900">End time:</span>
                    <span>{booking.endTime}</span>
                  </div>
                </div>

                {/* Payment Status & Action */}
                <div className="md:col-span-2 flex flex-col md:items-end justify-center">
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        booking.status === 'Paid' ? 'bg-emerald-500' : 'bg-neutral-800'
                      }`}
                    />
                    <span className="text-neutral-800">{booking.status}</span>
                  </div>

                  {booking.status === 'Unpaid' && (
                    <button
                      type="button"
                      onClick={() => handlePayNow(booking.id)}
                      className="mt-2 px-5 py-1.5 border border-neutral-300 hover:border-black rounded-full text-xs font-semibold text-neutral-900 hover:bg-black hover:text-white transition"
                    >
                      Pay now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
