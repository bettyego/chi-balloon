import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('src/assets/pexels-vidalbalielojrfotografia-14457430.jpg')",
      }}
    >
      <div className="text-center text-white bg-black/50 p-8 rounded-xl max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Celebrate in Style, <br /> Wow Them with Balloons
        </h1>
        <p className="mt-4 text-lg">
          From intimate gatherings to grand events, we create magical balloon experiences that leave lasting impressions.
        </p>
        <Link to="/inquiryform">
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-full text-white font-semibold transition duration-300">
            Let's Create Magic
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
