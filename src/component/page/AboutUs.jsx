import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const videoData = {
  Weddings: [
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID2',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID3',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID4',
  ],
  Birthdays: [
    'https://www.youtube.com/embed/BIRTHDAY_VIDEO_ID2',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID3',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID4',
  ],
  'Baby Gender Review': [
    'https://www.youtube.com/embed/_sKODoCgxKM',
    'https://www.youtube.com/embed/7taD8sUI2Aw',
    'https://www.youtube.com/embed/BABYSHOWER_VIDEO_ID2',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID3',
  ],
  'Corporate Events': [
    'https://www.youtube.com/embed/CORPORATE_VIDEO_ID1',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID2',
    'https://www.youtube.com/embed/WEDDING_VIDEO_ID3',
  ],
};

const AboutUs = () => {
  const [activeCategory, setActiveCategory] = useState('Weddings');

  return (
    <section className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-[#b8860b] mb-6 text-center">
          About Pinchofluxeevents
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Pinchofluxeevents is a luxury balloon and event decoration brand dedicated to creating unforgettable moments.
          From elegant weddings and baby showers to show-stopping birthdays and corporate activations, we bring visions to life with artistic flair and meticulous attention to detail.
        </p>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-[#b8860b] mb-4">Our Work in Action</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(videoData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeCategory === category
                    ? 'bg-[#b8860b] text-white'
                    : 'bg-white border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl border border-[#b8860b]"
        >
          {videoData[activeCategory].map((videoUrl, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <iframe
                  src={videoUrl}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
