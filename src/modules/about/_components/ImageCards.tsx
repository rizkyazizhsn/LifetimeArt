"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsap } from "@/hooks/useGsap";
import { imageCardsAnimations } from "./imageCards.animation";

const ImageCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    src: `/assets/img/about/image-${index + 1}.png`,
    alt: `About image ${index + 1}`,
  }));

  const duplicatedImages = [...images, ...images];

  useGsap(
    containerRef,
    (gsap) => {
      imageCardsAnimations(containerRef.current!, gsap);
    },
    []
  );

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg fade-in-initial rounded-lg "
    >
      <div className="image-cards-track flex items-center gap-8">
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`} 
            className="image-card flex-shrink-0 group overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={500}
              className="w-[400px] h-[500px] object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCards;
