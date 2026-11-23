import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Calendar, MapPin, LogOut } from 'lucide-react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Determine if we are on the home page
  const isHomePage = location.pathname === '/';

  // Listen to scroll events on home page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/venues?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserDropdownOpen(false);
  };

  // Determine theme mode (transparent hero vs solid white)
  const isSolid = !isHomePage || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSolid
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 text-neutral-900'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isSolid
                    ? 'bg-black text-white group-hover:bg-neutral-800'
                    : 'bg-white text-black group-hover:bg-neutral-100'
                }`}
              >
                {/* Sleek Futsal Ball / Stadium Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <polygon
                    points="12,5 16,8 14.5,13 9.5,13 8,8"
                    fill="currentColor"
                  />
                  <line x1="12" y1="5" x2="12" y2="2.5" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="16" y1="8" x2="19" y2="6.5" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="14.5" y1="13" x2="17.5" y2="16.5" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="9.5" y1="13" x2="6.5" y2="16.5" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="8" y1="8" x2="5" y2="6.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight flex items-center">
                <span>Futsal</span>
                <span className={isSolid ? 'text-neutral-500 font-normal ml-0.5' : 'text-neutral-300 font-normal ml-0.5'}>
                  Hub
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-all py-1.5 relative ${
                    isActive
                      ? isSolid
                        ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                        : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : isSolid
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/venues"
                className={({ isActive }) =>
                  `transition-all py-1.5 relative ${
                    isActive
                      ? isSolid
                        ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                        : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : isSolid
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                Venues
              </NavLink>

              <NavLink
                to="/tournaments"
                className={({ isActive }) =>
                  `transition-all py-1.5 relative ${
                    isActive
                      ? isSolid
                        ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                        : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : isSolid
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                Tournaments
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-all py-1.5 relative ${
                    isActive
                      ? isSolid
                        ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                        : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : isSolid
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                About
              </NavLink>
            </nav>

            {/* Right Action Icons & Login */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search venues"
                className={`p-2 rounded-full transition-colors ${
                  isSolid
                    ? 'hover:bg-neutral-100 text-neutral-700 hover:text-black'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Dropdown / Icon */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  aria-label="User Account"
                  className={`p-2 rounded-full transition-colors flex items-center gap-1.5 ${
                    isSolid
                      ? 'hover:bg-neutral-100 text-neutral-700 hover:text-black'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <User className="w-5 h-5" />
                  {currentUser && (
                    <span className="hidden lg:inline text-xs font-semibold max-w-[80px] truncate">
                      {currentUser.name.split(' ')[0]}
                    </span>
                  )}
                </button>

                {/* User Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 text-neutral-800 z-50 animate-fadeIn">
                    {currentUser ? (
                      <>
                        <div className="px-4 py-2 border-b border-neutral-100">
                          <p className="text-xs text-neutral-400">Signed in as</p>
                          <p className="text-sm font-semibold truncate">{currentUser.name}</p>
                          <p className="text-xs text-neutral-500 truncate">{currentUser.email}</p>
                        </div>
                        <Link
                          to="/my-bookings"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
                        >
                          <Calendar className="w-4 h-4 text-neutral-500" />
                          <span>My Bookings</span>
                        </Link>
                        <Link
                          to="/venues"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
                        >
                          <MapPin className="w-4 h-4 text-neutral-500" />
                          <span>Explore Venues</span>
                        </Link>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-neutral-100 mt-1"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="px-4 py-2 border-b border-neutral-100">
                          <p className="text-xs text-neutral-400">Welcome to FutsalHub</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setUserDropdownOpen(false);
                            setLoginModalOpen(true);
                          }}
                          className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition-colors"
                        >
                          Sign In / Register
                        </button>
                        <Link
                          to="/my-bookings"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
                        >
                          <Calendar className="w-4 h-4 text-neutral-500" />
                          <span>My Bookings</span>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Login Button (Pill shape according to Wireframe) */}
              {currentUser ? (
                <Link
                  to="/my-bookings"
                  className={`hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isSolid
                      ? 'bg-neutral-900 text-white hover:bg-black'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                  }`}
                >
                  My Bookings
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setLoginModalOpen(true)}
                  className={`hidden sm:inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 shadow-sm ${
                    isSolid
                      ? 'bg-neutral-900 text-white hover:bg-black'
                      : 'bg-neutral-900/90 text-white border border-neutral-700 hover:bg-black'
                  }`}
                >
                  Login
                </button>
              )}

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isSolid
                    ? 'hover:bg-neutral-100 text-neutral-800'
                    : 'hover:bg-white/10 text-white'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Bar Dropdown */}
        {searchOpen && (
          <div className="bg-white text-neutral-900 border-b border-neutral-200 shadow-md py-4 px-4 sm:px-6 animate-slideDown">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-5 h-5 text-neutral-400 absolute left-4" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search futsal courts by name, city, or venue (e.g. Dubai, Grand Arena)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-28 py-3 bg-neutral-50 rounded-full border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-neutral-900 border-b border-neutral-200 shadow-xl px-5 pt-3 pb-6 space-y-4 animate-slideDown">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </form>

            <nav className="flex flex-col space-y-2 pt-2">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-base font-medium transition ${
                    isActive ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/venues"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-base font-medium transition ${
                    isActive ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`
                }
              >
                Venues
              </NavLink>

              <NavLink
                to="/tournaments"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-base font-medium transition ${
                    isActive ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`
                }
              >
                Tournaments
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-base font-medium transition ${
                    isActive ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/my-bookings"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-base font-medium transition ${
                    isActive ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`
                }
              >
                My Bookings
              </NavLink>
            </nav>

            <div className="pt-3 border-t border-neutral-100">
              {currentUser ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{currentUser.name}</p>
                    <p className="text-xs text-neutral-500">{currentUser.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs text-red-600 font-medium px-3 py-1.5 bg-red-50 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-neutral-900 text-white rounded-full font-medium text-sm hover:bg-black transition text-center shadow-md"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Login / Auth Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />
    </>
  );
};

export default Navbar;
