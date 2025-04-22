import React from 'react';
import { GiPartyPopper } from 'react-icons/gi';
import { FaCrown, FaHeart, FaGift } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Balloon Garlands',
    description: 'Custom balloon garlands designed to fit your event theme, available in any size and color combination.',
    icon: <GiPartyPopper className="text-white text-2xl" />,
  },
  {
    title: 'Luxury Backdrops',
    description: 'Stunning backdrops to elevate your event’s visual appeal — from shimmer walls to floral arches.',
    icon: <FaCrown className="text-white text-2xl" />,
  },
  {
    title: 'Event Styling',
    description: 'We provide full styling for your event, including table settings, props, and coordination.',
    icon: <FaHeart className="text-white text-2xl" />,
  },
  {
    title: 'Custom Party Packages',
    description: 'Tailored decoration packages for birthdays, baby showers, weddings, and more.',
    icon: <FaGift className="text-white text-2xl" />,
  },
];

const Services = () => {
  return (
    <section className="bg-[#fef9ec] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#006400] mb-6 tracking-tight">
          Our Services
        </h2>
        <p className="text-[#444] mb-14 text-lg max-w-2xl mx-auto">
          Creating memorable moments with vibrant, elegant, and customized balloon décor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-[#b8860b] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#006400] group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#006400] mb-3">
                {service.title}
              </h3>
              <p className="text-[#555] text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
