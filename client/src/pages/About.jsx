import React from 'react';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            About FutsalHub
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-neutral-900 mt-4 leading-tight">
            Revolutionizing the Way <br />
            You Play and Book Futsal
          </h1>
          <p className="mt-4 text-neutral-500 text-sm sm:text-base leading-relaxed">
            FutsalHub connects players, teams, and tournament organizers with the best verified futsal pitches worldwide. From casual weekly pickup matches to competitive championships, we make futsal accessible to all.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <ShieldCheck className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-base text-neutral-900">Verified Pitches</h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Every futsal court on FutsalHub is inspected for safety, surface quality, and standard dimensions.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <Zap className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-base text-neutral-900">Instant Booking</h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Check real-time court availability and lock in your slot in under 60 seconds.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <Users className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-base text-neutral-900">Team Management</h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Coordinate player rosters, manage booking fees, and share match details seamlessly.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <Award className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-base text-neutral-900">Tournaments</h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Participate in seasonal leagues, regional knockout cups, and win prizes.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/venues"
            className="px-8 py-3 bg-neutral-950 text-white rounded-full font-semibold text-sm hover:bg-black transition shadow-md"
          >
            Explore Available Courts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
