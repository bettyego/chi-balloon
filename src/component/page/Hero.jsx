import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    image: '/chi43.jpg',
    title: 'Celebrate in Style',
    text: 'Transform your events with balloon magic, elegance, and flair.',
    align: 'center',
  },
  {
    image: '/chi4.jpg',
    title: 'Luxury Balloon Installations',
    text: 'From weddings to baby showers, we craft wow-worthy setups.',
    align: 'left',
  },
  {
    image: '/chi5.jpg',
    title: 'Every Detail Matters',
    text: 'We design each piece to reflect your vision & vibe.',
    align: 'right',
  },
  {
    image: '/chi41.jpg',
    title: 'Let’s Make Memories',
    text: 'Your event deserves unforgettable moments — we deliver them.',
    align: 'center',
  },
  {
    image: '/chi9.jpg',
    title: 'Let’s Make Magic',
    text: 'Your event deserves unforgettable magic touch — we are always ready.',
    align: 'center',
  },
  {
    image: '/chi10.jpg',
    title: 'Unmatched Creativity',
    text: 'Our team is dedicated to bringing unique, creative ideas to life for your special day.',
    align: 'left',
  },
  {
    image: '/chi11.jpg',
    title: 'Exquisite Designs',
    text: 'Every arrangement is carefully crafted with luxury and elegance in mind.',
    align: 'right',
  },
  {
    image: '/chi14.jpg',
    title: 'Your Dream Event Awaits',
    text: 'From balloons to decor, we create an atmosphere that matches your dream event.',
    align: 'center',
  },
  {
    image: '/chi22.jpg',
    title: 'Personalized Touch',
    text: 'We add the personal touch that makes every moment at your event stand out.',
    align: 'left',
  },
  {
    image: '/chi27.jpg',
    title: 'Timeless Elegance',
    text: 'Our designs are created with timeless beauty to ensure your event is stunning now and forever.',
    align: 'right',
  },
  {
    image: '/chi28.jpg',
    title: 'Every Moment Counts',
    text: 'We focus on the smallest details that create lasting memories for you and your guests.',
    align: 'center',
  },
  {
    image: '/chi33.jpg',
    title: 'Transforming Spaces',
    text: 'From ordinary to extraordinary — we elevate every space to match your event’s vibe.',
    align: 'left',
  },
  {
    image: '/chi34.jpg',
    title: 'A Vision Come to Life',
    text: 'Watch your vision unfold through our hands-on, detail-oriented event designs.',
    align: 'right',
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + slides.length) % slides.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getAlignment = (align) => {
    if (align === 'left') return 'items-start text-left';
    if (align === 'right') return 'items-end text-right';
    return 'items-center text-center';
  };

  return (
    <section {...handlers} className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10" />

          <div
            className={`relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 md:px-20 ${getAlignment(
              slides[index].align
            )}`}
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl drop-shadow-xl"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-200 mt-4 max-w-xl drop-shadow-md"
            >
              {slides[index].text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6"
            >
              <Link to="/inquiryform">
                <button className="px-7 py-3 bg-[#b8860b] hover:bg-green-800 text-white rounded-full text-base font-semibold shadow-lg transition duration-300">
                  Let’s Create Magic
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/40'
            } transition duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
