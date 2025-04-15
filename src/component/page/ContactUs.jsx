import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 "
    
    >
      <h2 className="text-3xl font-bold text-center  text-pink-500 mb-8">Get In Touch</h2>
      
      <form className="bg-pink-50 shadow-lg rounded-lg p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-pink-400"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-pink-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-pink-400"
            placeholder="+123 456 7890"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-pink-400"
            placeholder="Tell us about your event..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
