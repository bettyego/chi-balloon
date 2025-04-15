import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-pink-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="./src/assets/pexels-vidalbalielojrfotografia-14457430.jpg" 
            alt="Balloon setup"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            <strong>Chi’s BalloonArt</strong> is a creative balloon design and event styling company founded by <strong>Chinyere Onuma Chukukere</strong>. With a deep love for celebrations and artistic flair, we transform ordinary spaces into magical moments.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Based in the USA and proudly family-owned, we specialize in stunning balloon installations for all occasions—baby showers, weddings, birthdays, graduations, corporate events, and more.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our goal is simple: to make your events unforgettable. Every design is customized with attention to detail, love, and a touch of elegance that reflects your unique vision.
          </p>
          <p className="text-pink-600 font-semibold text-lg italic">
            “Every celebration deserves magic — and we’re here to create it.”
          </p>
        </motion.div>
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission & Vision</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At Chi’s BalloonArt, our mission is to bring joy, elegance, and color to life’s most cherished moments. We envision a world where every event—big or small—feels extraordinary, filled with laughter, beauty, and unforgettable memories.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
