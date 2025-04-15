import React from 'react';

const galleryImages = [
  './src/assets/pexels-brunounreal-15117022.jpg',
  './src/assets/pexels-missy-mel-garza-476212078-15811476.jpg',
  './src/assets/pexels-mlkbnl-10651680.jpg',
  './src/assets/pexels-vidalbalielojrfotografia-14457430.jpg',
  './src/assets/ps6.jpeg',
  './src/assets/ps7.webp',
  '/src/assets/lx2.jpg',
  './src/assets/lx.jpg',
  './src/assets/evt1.jpg',
  
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">Our Balloon Creations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={src}
              alt={`Balloon decor ${index + 1}`}
              className="w-full h-screen object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
