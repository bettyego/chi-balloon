import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const Header = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-transparent fixed top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="text-2xl font-bold text-pink-500">Chi's BalloonArt</div>

          <nav className="hidden md:flex gap-8 text-lg text-black drop-shadow-md">
            <Link to="/" className="hover:text-pink-400 transition">Home</Link>
            <Link to="/about" className="hover:text-pink-400 transition">About</Link>
            <Link to="/services" className="hover:text-pink-400 transition">Services</Link>
            <Link to="/inquiryform" className="hover:text-pink-400 transition">InquiryForm</Link>
            <Link to="/review" className="hover:text-pink-400 transition">ClientReview</Link>
            <Link to="/gallery" className="hover:text-pink-400 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-pink-400 transition">Contact us</Link>
          </nav>

          <div className="hidden md:block">
  <Link
    to="/inquiryform"
    className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
  >
    Book Now
  </Link>
</div>


          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
  <div className="md:hidden px-4 pb-4 bg-black/80 backdrop-blur-md text-white">
    <ul className="flex flex-col gap-4 text-lg">
    <Link to="/" className="hover:text-pink-400 transition">Home</Link>
            <Link to="/about" className="hover:text-pink-400 transition">About</Link>
            <Link to="/services" className="hover:text-pink-400 transition">Services</Link>
            <Link to="/inquiryform" className="hover:text-pink-400 transition">InquiryForm</Link>
            <Link to="/review" className="hover:text-pink-400 transition">ClientReview</Link>
            <Link to="/gallery" className="hover:text-pink-400 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-pink-400 transition">Contact us</Link>
    </ul>
  </div>
)}

    </header>
  );
};

export default Header;
