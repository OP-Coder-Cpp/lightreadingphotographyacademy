"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/Our Activities/1.jpg", "/Our Activities/2.jpg", "/Our Activities/3.jpg","/Our Activities/4.jpg",
  "/Our Activities/5.jpg","/Our Activities/6.jpg",
  "/Our Activities/7.jpg","/Our Activities/8.jpg",
"/Our Activities/10.jpg","/Our Activities/11.jpg","/Our Activities/12.jpg","/Our Activities/13.jpg","/Our Activities/14.jpg","/Our Activities/15.jpg","/Our Activities/16.jpg","/Our Activities/17.jpg","/Our Activities/18.jpg",
"/Our Activities/19.jpg","/Our Activities/20.jpg","/Our Activities/21.jpg","/Our Activities/22.jpg","/Our Activities/23.jpg","/Our Activities/24.jpg","/Our Activities/25.jpg","/Our Activities/26.jpg",
"/Our Activities/27.jpg","/Our Activities/28.jpg","/Our Activities/29.jpg","/Our Activities/30.jpg"];

export default function OurActivities() {
  return (
    <section
      id="Our Activities"
      className="relative py-16 bg-black overflow-hidden"
    >
      <div className="px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl  text-center font-bold text-white">
          Our Activities
        </h2>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative py-10 md:py-12 bg-black overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[250px] md:w-[320px] flex-shrink-0 rounded-2xl bg-white overflow-hidden border border-gray-800 hover:border-[#ffde59] transition"
            >
              <Image
                src={img}
                width={800}
                height={600}
                alt="Activities"
                className="w-full h-[200px] md:h-[250px] object-contain hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}