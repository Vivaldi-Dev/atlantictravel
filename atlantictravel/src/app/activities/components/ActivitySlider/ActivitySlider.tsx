"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  url: string;
  activityId: number;
}

interface ActivitySliderProps {
  photos: Photo[];
}

export const ActivitySlider: React.FC<ActivitySliderProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  if (!photos.length) return <div>Nenhuma foto disponível</div>;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <Image
        src={`https://api.panoramatours.co.mz${photos[currentIndex].url}`}
        alt={`Slide ${currentIndex}`}
        fill
        className="object-cover"
        priority/>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide">
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide">
        &gt;
      </button>

  
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};