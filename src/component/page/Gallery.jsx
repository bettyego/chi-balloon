import React from 'react';

const galleryImages = [
  '/pexels-brunounreal-15117022.jpg',
  '/pexels-missy-mel-garza-476212078-15811476.jpg',
  '/pexels-mlkbnl-10651680.jpg',
  '/pexels-vidalbalielojrfotografia-14457430.jpg',
  '/ps6.jpeg',
  '/ps7.webp',
  '/lx2.jpg',
  '/lx.jpg',
  '/evt1.jpg',
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-500">
        Our Balloon Creations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group transition-all duration-300 ease-in-out"
          >
            <img
              src={src}
              alt={`Balloon decor ${index + 1}`}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
