import { motion } from 'framer-motion';

const features = [
  {
    icon: '/chi22.jpg',
    title: 'Creative Balloon Installations',
    description: 'Unique balloon designs that bring your event to life with color, elegance, and creativity.',
  },
  {
    icon: '/chi1.jpg',
    title: 'Customized Event Themes',
    description: 'From elegant weddings to fun birthdays — we craft the perfect theme tailored to your dream vision.',
  },
  {
    icon: '/chi13.jpg',
    title: 'Luxury Decor & Styling',
    description: 'Combining stunning backdrops, centerpieces, and styling to elevate your special day.',
  },
  {
    icon: '/chi24.jpg',
    title: 'Personalized Balloon Displays',
    description: 'Interactive displays that make your event memorable and enjoyable for all.',
  },
  {
    icon: '/chi40.jpg',
    title: 'Event Planning & Coordination',
    description: 'We handle the details, so you can focus on creating unforgettable moments.',
  },
  {
    icon: '/chi17.jpg',
    title: 'Balloon Art for Every Occasion',
    description: 'Whether it’s a wedding, birthday, or corporate event, we have the perfect balloon art for you.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

const Features = () => {
  return (
    <section className="bg-green-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-green-900 leading-tight">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-[#b8860b]/20 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 text-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-full h-56 sm:h-64 md:h-72 rounded-2xl object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-900">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
