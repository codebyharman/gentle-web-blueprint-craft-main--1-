
import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideshowImages = [
    "/lovable-uploads/5c12ab35-6ca8-4af9-a3c7-223da511a2b7.png",
    "/lovable-uploads/3f34065b-606b-4fa5-9b78-5a77dffc6287.png", 
    "/lovable-uploads/31eeb88f-2db8-40d8-8221-b4ae4c09043f.png",
    "/lovable-uploads/603771c8-9fc0-4df5-8454-fdf9a7ee2e40.png",
    "/lovable-uploads/9a5d391e-e44f-432e-8684-e9d49fe554b0.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slideshow ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-red-900/60 to-yellow-900/60"></div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;
