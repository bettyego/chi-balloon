import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black">
            Chi's BalloonArt
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 lg:gap-8 text-base lg:text-lg text-black font-medium">
            <Link to="/" className="hover:text-pink-500 transition">Home</Link>
            <Link to="/about" className="hover:text-pink-500 transition">About</Link>
            <Link to="/services" className="hover:text-pink-500 transition">Services</Link>
            <Link to="/inquiryform" className="hover:text-pink-500 transition">Inquiry</Link>
            <Link to="/review" className="hover:text-pink-500 transition">Reviews</Link>
            <Link to="/gallery" className="hover:text-pink-500 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-pink-500 transition">Contact</Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              to="/inquiryform"
              className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition duration-300 text-sm sm:text-base"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-4 py-6 space-y-4 text-white text-base font-medium">
          <Link to="/" onClick={toggleMobileMenu} className="block hover:text-pink-400">Home</Link>
          <Link to="/about" onClick={toggleMobileMenu} className="block hover:text-pink-400">About</Link>
          <Link to="/services" onClick={toggleMobileMenu} className="block hover:text-pink-400">Services</Link>
          <Link to="/inquiryform" onClick={toggleMobileMenu} className="block hover:text-pink-400">Inquiry</Link>
          <Link to="/review" onClick={toggleMobileMenu} className="block hover:text-pink-400">Reviews</Link>
          <Link to="/gallery" onClick={toggleMobileMenu} className="block hover:text-pink-400">Gallery</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="block hover:text-pink-400">Contact</Link>
          <Link
            to="/inquiryform"
            onClick={toggleMobileMenu}
            className="inline-block mt-4 bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-500 text-white transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
