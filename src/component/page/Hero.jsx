import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="h-[90vh] sm:h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('/pexels-vidalbalielojrfotografia-14457430.jpg')",
      }}
    >
      <div className="text-center text-white bg-black/50 p-6 sm:p-8 md:p-10 rounded-2xl max-w-xl sm:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-snug">
          Celebrate in Style, <br className="hidden sm:block" /> Wow Them with Balloons
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-100">
          From intimate gatherings to grand events, we create magical balloon experiences that leave lasting impressions.
        </p>
        <Link to="/inquiryform">
          <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-full text-white font-semibold text-sm sm:text-base transition duration-300">
            Let's Create Magic
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
