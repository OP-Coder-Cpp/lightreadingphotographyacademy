"use client";

import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlinePresentationChartBar,
} from "react-icons/hi";

export default function Mentor() {
  return (
    <section
      id="mentor"
      className="relative min-h-screen px-6 md:px-20 py-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MentorBackground.jpeg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 w-full">
        {/* Image */}
        <motion.img
          src="/Mentor.jpg"
          alt="Mentor"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            w-52
            md:w-76
            lg:w-[450px]
            rounded-2xl
            object-cover
            shadow-[0_0_60px_rgba(255,222,89,0.08)]
          "
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            text-center
            md:text-left
            flex
            flex-col
            items-center
            md:items-start
          "
        >
          <div className="relative inline-block mb-6">
          {/* Golden Accent Line */}
          <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-1 bg-[#ffde59] rounded-full" />

            <h2 className="text-4xl md:text-5xl font-bold text-white pl-4">
              Meet the Mentor :
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold text-white pl-4">
              Santu Adhikary
            </h2>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 text-justify">
            An eminent photo-artist with extensive experience in both commercial and fine art photography since 2010, he has earned national and international recognition for his work. His photographs have been exhibited across India and abroad, reflecting his artistic vision and technical excellence.
            He holds prestigious distinctions including AFIP and EFIP from the Federation of Indian Photography, and AFIAP from the Fédération Internationale de l'Art Photographique (France). He has also been honoured with Hon.PESGSPC (Cyprus), GPA.PESGSPC (Cyprus), and Hon.APF (Mumbai) for his outstanding contribution to art photography.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <HiOutlineClock className="text-[#ffde59] text-3xl" />
                <h3 className="text-3xl font-bold text-[#ffde59]">15+</h3>
              </div>
              <p className="text-gray-400 text-sm mt-2">Years Experience</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <HiOutlineAcademicCap className="text-[#ffde59] text-3xl" />
                <h3 className="text-3xl font-bold text-[#ffde59]">350+</h3>
              </div>
              <p className="text-gray-400 text-sm mt-2 ">Awards</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <HiOutlinePresentationChartBar className="text-[#ffde59] text-3xl" />
                <h3 className="text-3xl font-bold text-[#ffde59]">100+</h3>
              </div>
              <p className="text-gray-400 text-sm mt-2">Workshops Conducted Yearly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}