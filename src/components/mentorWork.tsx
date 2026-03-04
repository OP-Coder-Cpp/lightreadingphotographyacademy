"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const images = ["/Mentor Work/1.jpg", "/Mentor Work/2.jpg", "/Mentor Work/3.jpg","/Mentor Work/4.jpg","/Mentor Work/5.jpg","/Mentor Work/6.jpg","/Mentor Work/7.jpg","/Mentor Work/8.jpg","/Mentor Work/9.jpg","/Mentor Work/10.jpg","/Mentor Work/11.jpg","/Mentor Work/12.jpg","/Mentor Work/13.jpg","/Mentor Work/14.jpg","/Mentor Work/15.jpg","/Mentor Work/16.jpg","/Mentor Work/17.jpg","/Mentor Work/18.jpg","/Mentor Work/19.jpg","/Mentor Work/20.jpg","/Mentor Work/21.jpg","/Mentor Work/22.jpg","/Mentor Work/23.jpg","/Mentor Work/24.jpg"];

export default function MentorWork() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <section
      id="mentorswork"
      className="relative bg-black py-20 px-6 md:px-16"
    >
      {/* Section Title */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">
          Mentor Works
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          A collection of professional photography works created by our mentor
          across different genres including studio lighting, portraits and
          artistic photography.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2  lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
            onClick={() => setSelected(i)}
          >
            <Image
              src={img}
              alt="Mentor Work"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-sm tracking-wide">
                <FaSearch/>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal Viewer */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white text-xl"
              onClick={() => setSelected(null)}
            >
              <FaTimes />
            </button>

            {/* Previous */}
            <button
              className="absolute left-6 text-white text-xl"
              onClick={prev}
            >
              <FaChevronLeft />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full"
            >
              <Image
                src={images[selected]}
                alt="Mentor Work"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-6 text-white text-xl"
              onClick={next}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}