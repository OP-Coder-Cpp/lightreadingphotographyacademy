"use client";

import { motion,useInView,AnimatePresence } from "framer-motion";
import { useRef,useEffect, useState } from "react";
import photo1 from "@/assets/1.webp";
import photo2 from "@/assets/2.webp";
import photo3 from "@/assets/3.webp";
import photo4 from "@/assets/4.webp";
import photo5 from "@/assets/5.webp";
import photo6 from "@/assets/A2.webp";
import Image from "next/image";

const images = [photo1,photo2 , photo3,photo4,photo5,photo6];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
    amount: 0.3,
    once: false,
  });

  useEffect(() => {
    if (!isInView) return; // pause when not visible

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
<section
      id="hero"
      className="relative
        w-screen
        md:h-screen
        overflow-hidden"
        ref={heroRef}
    >
       <div className="block md:hidden w-full">
        <Image
          src={images[index]}
          alt="hero images mobile"
          width={1920}
          height={1080}
          priority
          sizes="100vh"
          className="w-full h-auto object-contain"
        />
      
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
      <img src="/mouse.svg" className="w-7 h-7 md:w-10 md:h-10"alt="background" />
      </motion.div>

      </div>

      {/* DESKTOP: Full screen hero */}
      <div className="hidden md:block relative w-screen h-screen">
        <Image
          src={images[index]}
          alt="hero images desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
              <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <img src="/mouse.svg" className="w-7 h-7 md:w-10 md:h-10"alt="background" />
      </motion.div>
      </div>     
    </section>

  );
}