import React from 'react';
import { motion } from 'framer-motion';

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1.2,
      ease: 'easeOut',
    },
  }),
};

const Owner = () => {
  return (
    <section className="bg-pink-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/owner.jpg"
            alt="Chinyere Onuma Chukukere"
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            variants={paragraphVariants}
            custom={0}
          >
            Meet the Founder
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-4 text-lg"
            variants={paragraphVariants}
            custom={1}
          >
            <strong>Chinyere Onuma Chukukere</strong> is the heart and creative mind behind our balloon decoration business.
            A passionate designer and visionary, Chinyere turned her love for art, color, and celebration into a successful
            business that has brought joy to countless events.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-4 text-lg"
            variants={paragraphVariants}
            custom={2}
          >
            Married and a proud mother of three, she balances family and entrepreneurship with grace. Based in the USA, her
            work reflects a blend of elegance, creativity, and cultural richness.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-4 text-lg"
            variants={paragraphVariants}
            custom={3}
          >
            Since launching the business <strong>over [insert years] years ago</strong>, Chinyere has built a reputation for excellence,
            transforming ordinary spaces into unforgettable experiences. Her commitment to detail and customer satisfaction
            has made her a beloved name in the event decoration scene.
          </motion.p>

          <motion.p
            className="text-pink-600 font-semibold text-lg"
            variants={paragraphVariants}
            custom={4}
          >
            “Every celebration deserves magic — and we’re here to create it.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Owner;
