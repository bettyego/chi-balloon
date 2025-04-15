import { motion } from 'framer-motion';


const features = [
  {
    icon: '/evt.jpg',
    title: 'Creative Balloon Installations',
    description: 'Unique balloon designs that bring your event to life with color, elegance, and creativity.',
  },
  {
    icon: '/evt3.webp',
    title: 'Customized Event Themes',
    description: 'From elegant weddings to fun birthdays — we craft the perfect theme tailored to your dream vision.',
  },
  {
    icon: '/lx.jpg',
    title: 'Luxury Decor & Styling',
    description: 'Combining stunning backdrops, centerpieces, and styling to elevate your special day.',
  },
  {
    icon: '/bt1.jpg',
    title: 'Personalized Balloon Displays',
    description: 'Interactive displays that make your event memorable and enjoyable for all.',
  },
  {
    icon: '/evt1.jpg',
    title: 'Event Planning & Coordination',
    description: 'We handle the details, so you can focus on creating unforgettable moments.',
  },
  {
    icon: '/lx2.jpg',
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
      duration: 1.5, // smoother and longer duration
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

const Features = () => {
  return (
    <>
      {/* SVG header with light purple color
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d8b4fe" // light purple
          fillOpacity="1"
          d="M0,96L60,85.3C120,75,240,53,360,85.3C480,117,600,203,720,218.7C840,235,960,181,1080,165.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg> */}

      <section className="bg-purple-50 py-16 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-72 rounded-3xl object-cover p-2 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3 text-purple-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
