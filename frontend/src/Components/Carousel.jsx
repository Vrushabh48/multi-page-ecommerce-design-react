// Carousel.js
import React, { useState } from 'react';

const images = [
  'https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp',
  'https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp',
  'https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp',
  'https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp'
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'} ${index < currentIndex ? '-translate-x-full' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="rounded-box h-full w-80 object-cover shadow-md" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="hidden absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"><img src="file:///C:/Users/Vrushabh/Downloads/right-arrow_4983028.png" alt="" /></button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"><img src="file:///C:/Users/Vrushabh/Downloads/right-arrow_4983028.png" alt="" /></button>
    </div>
  );
}

export default Carousel;
