import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-10 pb-6 px-6 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">ChiBalloonArt</h2>
          <p className="text-sm">
            Elevating celebrations with custom balloon decor and elegant event styling — one pop at a time!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-pink-500">Services</Link></li>
            <li><Link to="/inquiryform" className="hover:text-pink-500">Inquiry Form</Link></li>
            <li><Link to="/gallery" className="hover:text-pink-500">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">Email: info@chiballoonartdecor.com</p>
          <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          <p className="text-sm">Location: Atlanta, GA</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-pink-500 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaPinterestP />
            </a>
            <a href="mailto:info@chiballoonartdecor.com" className="hover:text-gray-700">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} chiBalloonArt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
