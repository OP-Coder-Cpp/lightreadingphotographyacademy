"use client";

import { motion,useInView,AnimatePresence } from "framer-motion";
import { useRef,useEffect, useState } from "react";

const images = ["/hero section/1.webp", "/hero section/2.webp", "/hero section/3.webp","/hero section/4.webp","/hero section/5.webp","/hero section/A2.webp"];

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
        w-full
        md:h-[100svh]
        overflow-hidden"
        ref={heroRef}
    >
       <AnimatePresence  mode='sync'>
        <motion.img
        key={index}
        src={images[index]}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
          flex
          flex-col
          w-full
          h-auto
          md:h-[100svh]
          md:object-cover
          object-contain 
          "
      />
      

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <img src="/mouse.svg" className="w-7 h-7 md:w-10 md:h-10"alt="background" />
      </motion.div>
       </AnimatePresence>
      
    </section>

  );
}
