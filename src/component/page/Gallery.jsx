// Gallery.jsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const galleryData = {
  Weddings: [
    '/evt.jpg',
    '/evt1.jpg',
    '/lx.jpg',
    '/lx2.jpg',
    '/pexels-missy-mel-garza-476212078-15811476.jpg',
    '/pexels-vidalbalielojrfotografia-14457430.jpg',
  ],
  Birthdays: [
    '/bq2.webp',
    '/bq6.webp',
    '/bt3.jpg',
    '/evt2.jpg',
    '/evt3.webp',
    '/lx1.jpg',
    '/pexels-brunounreal-15117022.jpg',
    '/ps7.webp',
  ],
  'Baby Showers': [
    '/pexels-vincenzo-iorio-381015179-28179599.jpg',
    '/gallery/baby2.jpg',
  ],
  'Corporate Events': [
    '/gallery/corp1.jpg',
    '/gallery/corp2.jpg',
  ],
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Weddings');

  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(galleryData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <Swiper spaceBetween={16} slidesPerView={1.2} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}>
        {galleryData[activeCategory].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`${activeCategory} ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
