import React from 'react';

const reviews = [
  { id: 1, author: 'Jessica A.', content: "ChiBalloonArt made my baby shower magical! The balloon arch and color scheme were stunning. Guests couldn't stop taking pictures." },
  { id: 2, author: 'Michael T.', content: "Professional, punctual, and extremely creative. They transformed our corporate event into something vibrant and elegant!" },
  { id: 3, author: 'Sarah K.', content: "My daughter’s birthday party was a dream come true thanks to ChiBalloonArt. The custom balloon wall was the highlight of the day." },
  { id: 4, author: 'Daniel O.', content: "Highly recommend! They brought so much life to our wedding reception with tasteful balloon decor that matched our theme perfectly." },
  { id: 5, author: 'Emily W.', content: "Incredible attention to detail! From the bouquet centerpieces to the photo booth backdrop — everything was flawless." },
  { id: 6, author: 'Tunde F.', content: "Our baby naming ceremony had such a festive atmosphere thanks to ChiBalloonArt’s beautiful balloon garlands and stage decor." },
  { id: 7, author: 'Laura C.', content: "I hired ChiBalloonArt for a gender reveal and WOW! They nailed the pink-and-blue theme with such elegance and joy." },
  { id: 8, author: 'Gbenga A.', content: "From start to finish, they were easy to work with. The grand opening decor they did for our store was eye-catching and fun." },
  { id: 9, author: 'Nina M.', content: "We loved their balloon backdrop for our family photoshoot. The setup looked straight out of Pinterest!" },
  { id: 10, author: 'Ayo J.', content: "Their creativity is unmatched. ChiBalloonArt helped me surprise my wife on our anniversary with a heart-themed balloon setup." },
  { id: 11, author: 'Tracy N.', content: "Booking them for our church’s end-of-year party was the best decision. The kids absolutely loved the colorful balloon displays!" },
  { id: 12, author: 'David B.', content: "They came highly recommended and totally lived up to the hype. Their balloon installations are pure art." }
];

const ClientReview = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-pink-600">What Our Clients Are Saying</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white shadow-lg rounded-xl p-6 text-center transition hover:scale-105 duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{review.author}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
