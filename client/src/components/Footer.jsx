import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-12 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-100">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <polygon points="12,5 16,8 14.5,13 9.5,13 8,8" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-neutral-900">
                Futsal<span className="text-neutral-500 font-normal">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Find futsal courts, book your next match, and manage your team bookings in one place with FutsalHub.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-neutral-400">
              {/* Instagram */}
              <a href="#instagram" className="hover:text-black transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#twitter" className="hover:text-black transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#facebook" className="hover:text-black transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" className="hover:text-black transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-500">
              <li>
                <Link to="/about" className="hover:text-black transition-colors">About</Link>
              </li>
              <li>
                <a href="#careers" className="hover:text-black transition-colors">Careers</a>
              </li>
              <li>
                <a href="#press" className="hover:text-black transition-colors">Press</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-black transition-colors">Blog</a>
              </li>
              <li>
                <a href="#partners" className="hover:text-black transition-colors">Partners</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-500">
              <li>
                <a href="#help" className="hover:text-black transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#safety" className="hover:text-black transition-colors">Safety Information</a>
              </li>
              <li>
                <a href="#cancellation" className="hover:text-black transition-colors">Cancellation Options</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-black transition-colors">Accessibility</a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
              Subscribe for futsal news, tournaments, and special offers.
            </p>
            {subscribed ? (
              <p className="text-xs text-emerald-600 font-medium py-2">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 p-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2025 FutsalHub. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-neutral-700 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-neutral-700 transition-colors">Terms</a>
            <a href="#sitemap" className="hover:text-neutral-700 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
