"use client";

import { useState } from "react";
import Lightbox from "./lightbox";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg","/gallery/4.jpg","/gallery/5.jpg","/gallery/6.jpg","/gallery/7.jpg","/gallery/8.jpg","/gallery/9.jpg","/gallery/10.jpg","/gallery/11.jpg","/gallery/12.jpg","/gallery/13.jpg","/gallery/14.jpg","/gallery/15.jpg","/gallery/16.jpg","/gallery/17.jpg","/gallery/18.jpg","/gallery/19.jpg","/gallery/20.jpg","/gallery/21.jpg","/gallery/22.jpg","/gallery/23.jpg","/gallery/24.jpg","/gallery/25.jpg","/gallery/26.jpg"];

export default function Students() {
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <section id="students" className="py-16 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">Students' Work</h2>
      <div className="columns-2 md:columns-3 gap-4">
  {images.map((img, i) => (
    <div
      key={i}
      onClick={() => setSelected(i)}
      className="relative mb-4 cursor-pointer overflow-hidden rounded-lg group"
    >
      {/* <img
        src={img}
        className="w-full transition-transform duration-500 group-hover:scale-110"
      /> */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-[#ffde59] rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={img}
        alt="Gallery Image"
        width={800}
        height={600}
        onLoad={() => setLoading(false)}
        className={`w-full transition-transform duration-500 group-hover:scale-110 ${
        loading ? "opacity-0" : "opacity-100"}`}
        loading="lazy"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
        <span className="text-white text-sm tracking-widest">
          <FaSearch/>
        </span>
      </div>
    </div>
  ))}
</div>
      {selected !== null && (
        <Lightbox images={images} index={selected} onClose={() => setSelected(null)} />
      )}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end mt-8 "
        >
        <a
        href="https://facebook.com/profile.php?id=100063651492600"
        target="_blank"
        rel="noopener noreferrer"
        className="
        group
        flex
        items-center
        gap-3
        border
        border-gray-700
        px-6
        py-3
        rounded-full
        text-white
        transition-all
        duration-300
        hover:border-[#ffde59]
        hover:bg-[#ffde59]
        hover:text-black
      "
      >
      <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110 " />
      <span className="text-sm tracking-wide">
        Check our Facebook Page for More Works!
      </span>
  </a>
    </motion.div>
    </section>
  );
}