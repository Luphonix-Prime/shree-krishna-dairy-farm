import { useEffect, useRef } from "react";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  direction: 'left' | 'right';
}

export default function ImageSlider({ images, direction }: ImageSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Duplicate images for seamless loop
    const originalImages = slider.innerHTML;
    slider.innerHTML = originalImages + originalImages;
  }, []);

  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="overflow-hidden">
      <div 
        ref={sliderRef}
        className={`flex space-x-6 w-max ${animationClass}`}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-80 h-60 object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
