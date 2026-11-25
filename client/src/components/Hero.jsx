import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Clock, Users } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Dubai');
  const [date, setDate] = useState('Mar 15, 2025');
  const [time, setTime] = useState('6:00 PM');
  const [players, setPlayers] = useState('10');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/venues?location=${encodeURIComponent(location)}&players=${encodeURIComponent(players)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-neutral-900 text-white overflow-hidden pt-28 pb-20">
      {/* Background Graphic & Vignette Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transform transition duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-900/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Wireframe Tag: The Ultimate Futsal Experience */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium uppercase tracking-wider text-neutral-200 mb-6">
          <span>The Ultimate Futsal Experience</span>
        </div>

        {/* Wireframe Heading: Discover Your Perfect Futsal Destination */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight max-w-4xl mx-auto leading-[1.12] text-white">
          Discover Your Perfect <br />
          <span>Futsal Destination</span>
        </h1>

        {/* Wireframe Subheading */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Find and book your next futsal court with FutsalHub. <br className="hidden sm:inline" />
          Bring your team and get ready to play.
        </p>

        {/* Wireframe Search Filter Widget */}
        <div className="mt-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-3 sm:p-2.5 shadow-2xl text-neutral-900 border border-white/40">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-0 items-center">
            {/* Field 1: Venues */}
            <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Venues
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer mt-0.5 appearance-none pr-4"
              >
                <option value="Dubai">Dubai</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York">New York</option>
                <option value="Chicago">Chicago</option>
                <option value="San Diego">San Diego</option>
              </select>
            </div>

            {/* Field 2: Date */}
            <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Mar 15, 2025"
                className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
              />
            </div>

            {/* Field 3: Time */}
            <div className="px-5 py-2.5 sm:border-r border-neutral-200 text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Time
              </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="6:00 PM"
                className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
              />
            </div>

            {/* Field 4: Players */}
            <div className="px-5 py-2.5 text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Players
              </label>
              <select
                value={players}
                onChange={(e) => setPlayers(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="10">10</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="14">14</option>
              </select>
            </div>

            {/* Search Action */}
            <div className="p-1">
              <button
                type="submit"
                className="w-full h-full py-3.5 px-6 bg-neutral-950 hover:bg-black text-white rounded-xl sm:rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                <Search className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
