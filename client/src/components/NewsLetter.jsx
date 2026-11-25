import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-950 text-white py-16 px-6 sm:px-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Stay in the Game
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-lg mx-auto font-light leading-relaxed">
            Join our newsletter for new futsal venues, exclusive offers, and the latest tournament updates.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="mt-8 p-4 bg-white/10 rounded-xl max-w-md mx-auto flex items-center justify-center gap-2 text-sm text-emerald-400 border border-emerald-500/30 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5" />
              <span>You have joined the FutsalHub newsletter!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 text-white placeholder-neutral-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 border border-neutral-700 cursor-pointer whitespace-nowrap shadow-sm"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Wireframe Consent Text */}
          <p className="mt-4 text-[11px] text-neutral-500 font-light">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
