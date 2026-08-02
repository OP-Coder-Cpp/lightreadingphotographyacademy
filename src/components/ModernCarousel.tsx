"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselImage = {
  id: number;
  src: string;
  alt: string;
};

const images: CarouselImage[] = [
  { id: 1, src: "/Colab/1.jpeg", alt: "Image 1" },
  { id: 2, src: "/Colab/2.jpeg", alt: "Image 2" },
  { id: 3, src: "/Colab/3.jpeg", alt: "Image 3" },
  { id: 4, src: "/Colab/4.jpeg", alt: "Image 4" },
  { id: 5, src: "/Colab/5.jpeg", alt: "Image 5" },
  { id: 6, src: "/Colab/6.jpeg", alt: "Image 6" },
  { id: 7, src: "/Colab/7.jpeg", alt: "Image 7" },
  { id: 8, src: "/Colab/8.jpeg", alt: "Image 8" },
  { id: 9, src: "/Colab/9.jpeg", alt: "Image 9" },
  { id: 10, src: "/Colab/10.jpeg", alt: "Image 10" },
  { id: 11, src: "/Colab/11.jpeg", alt: "Image 11" },
  { id: 12, src: "/Colab/12.jpeg", alt: "Image 12" },
];

export default function ModernCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-10 mb-20">
          <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
                  Featured Showcase
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Collaboration Class With{" "}
                  <span className="text-[#ffde59]">Nikon</span>
              </h1>
          </div>
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="relative min-w-full overflow-hidden"
            >
              <div className="relative h-[300px] sm:h-[450px] lg:h-[600px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-contain"
                />


              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/20"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrent(index)}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              current === index
                ? "border-white ring-2 ring-white/70"
                : "border-white/10"
            }`}
          >
            <div className="relative h-24 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain transition duration-500 group-hover:scale-110"
              />
            </div>

            <div
              className={`absolute inset-0 transition ${
                current === index
                  ? "bg-black/10"
                  : "bg-black/40 group-hover:bg-black/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}