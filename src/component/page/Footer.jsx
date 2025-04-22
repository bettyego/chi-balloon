import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-800 pt-10 pb-6 px-6 md:px-16 mt-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Pinchofluxeevents</h2>
          <p className="text-sm">
            Elevating celebrations with custom balloon decor and elegant event styling — one pop at a time!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-700">Home</Link></li>
            <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
            <li><Link to="/inquiryform" className="hover:text-green-700">Inquiry Form</Link></li>
            <li><Link to="/gallery" className="hover:text-green-700">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Contact</h3>
          <p className="text-sm mb-2">Email: pinchofluxeevents@gmail.com</p>
          <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          <p className="text-sm">Location: Atlanta, GA</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Stay Connected</h3>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border rounded-md mb-2 text-sm"
            />
            <button type="submit" className="w-full bg-[#d4af37] text-white text-sm py-2 rounded-md hover:bg-[#d4af37] transition">
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 text-[#d4af37] text-xl">
            <a href="https://www.facebook.com/share/1Bdj7r1o6Y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/pinchofluxe?igsh=YWxnejV5cmRjNWhx" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaYoutube />
            </a>
            <a href="mailto:pinchofluxeevents@gmail.com" className="hover:text-gray-700">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#d4af37] text-white p-3 rounded-full shadow-lg hover:bg-[#d4af37] transition z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pinchofluxeevents. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
