import React from 'react';
import { Trophy, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: 'FutsalHub Premier Cup 2025',
      prize: '$5,000',
      date: 'April 10 - 12, 2025',
      venue: 'The Grand Arena, Dubai',
      teams: '16 Teams',
      status: 'Registration Open'
    },
    {
      id: 2,
      title: 'Midnight Blitz 5v5 Championship',
      prize: '$2,500',
      date: 'May 02, 2025',
      venue: 'Crystal Futsal Arena, AZ',
      teams: '8 Teams',
      status: 'Early Bird'
    },
    {
      id: 3,
      title: 'City Champions Trophy',
      prize: '$3,500',
      date: 'June 18 - 20, 2025',
      venue: 'Skyline Futsal Hub, Chicago',
      teams: '12 Teams',
      status: 'Registration Open'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-neutral-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-black text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            Compete & Win
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900 mt-3">
            Upcoming Tournaments
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Register your squad for official FutsalHub knockout tournaments, league cups, and regional championships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                    {t.status}
                  </span>
                  <span className="font-bold text-neutral-900">Prize: {t.prize}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900">{t.title}</h3>
                
                <div className="mt-4 space-y-2 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>{t.teams}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => alert(`Registration details for ${t.title} will open shortly!`)}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <span>Register Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
