"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/Achievements/1.jpg", "/Achievements/2.jpg", "/Achievements/3.jpg","/Achievements/4.jpg",
  "/Achievements/5.jpg","/Achievements/6.jpg",
  "/Achievements/7.jpg","/Achievements/8.jpg",
"/Achievements/10.jpg","/Achievements/11.jpg","/Achievements/12.jpg","/Achievements/13.jpg","/Achievements/14.jpg","/Achievements/15.jpg","/Achievements/16.jpg","/Achievements/17.jpg","/Achievements/18.jpg",
"/Achievements/19.jpg","/Achievements/20.jpg","/Achievements/21.jpg","/Achievements/22.jpg","/Achievements/23.jpg","/Achievements/24.jpg","/Achievements/25.jpg","/Achievements/26.jpg",
"/Achievements/27.jpg","/Achievements/28.jpg","/Achievements/29.jpg","/Achievements/30.jpg","/Achievements/31.jpg","/Achievements/32.jpg","/Achievements/33.jpg","/Achievements/34.jpg",
"/Achievements/35.jpg","/Achievements/36.jpg","/Achievements/37.jpg","/Achievements/38.jpg","/Achievements/39.jpg","/Achievements/40.jpg","/Achievements/41.jpg","/Achievements/42.jpg"];

export default function StudentAchievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 bg-black overflow-hidden"
    >
      <div className="px-6 md:px-16 mb-16 ">
        <h2 className="text-4xl md:text-5xl  text-center font-bold text-white">
          Students' Awards 
        </h2>
        <p className="text-gray-400 mt-4  text-center justify-content">
          Celebrating outstanding performances, awards, and professional
          milestones achieved by our students.
        </p>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative py-16 md:py-18 bg-black overflow-hidden">
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
                alt="Student Achievement"
                className="w-full h-[200px] md:h-[250px] object-contain hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}