import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const galleryData = {
  Weddings: ['/chi15.jpg', '/chi43.jpg', '/chi25.jpg', '/chi40.jpg', '/chi11.jpg'],
  Birthdays: ['/chi2.jpg', '/chi6.jpg', '/chi17.jpg', '/chi16.jpg', '/chi40.jpg', '/chi10.jpg', '/chi14.jpg', '/chi41.jpg', '/chi42.jpg', '/chi24.jpg', '/chi26.jpg', '/chi30.jpg', '/chi3.jpg'],
  'Baby Showers': ['/chi32.jpg', '/chi31.jpg', '/chi8.jpg', '/chi28.jpg', '/chi29.jpg'],
  'Corporate Events': ['/chi4.jpg', '/chi13.jpg', '/chi22.jpg', '/chi27.jpg'],
  Kids: ['/chi30.jpg', '/chi34.jpg', '/chi39.jpg', '/chi37.jpg', '/chi44.jpg', '/chi31.jpg', '/chi24.jpg', '/chi35.jpg', '/chi38.jpg', '/chi7.jpg'],
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Weddings');

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#fef9ec] py-16 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[rgb(234,171,12)] mb-14 tracking-tight">
          Our Event Gallery
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(galleryData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                activeCategory === category
                  ? 'bg-[rgb(234,171,12)] text-white'
                  : 'bg-white text-[#006400] border border-[#b8860b] hover:bg-[#fdf6e3]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryData[activeCategory].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl shadow-xl border border-[#b8860b] bg-white">
                <img
                  src={img}
                  alt={`${activeCategory} ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
