
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ src: string; alt: string }>;
  initialIndex: number;
}

const PhotoModal = ({ isOpen, onClose, images, initialIndex }: PhotoModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white hover:text-gray-300 z-10"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 text-white hover:text-gray-300 z-10"
      >
        <ChevronRight size={32} />
      </button>

      <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="mb-2">{images[currentIndex].alt}</p>
        <p className="text-sm opacity-75">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default PhotoModal;
