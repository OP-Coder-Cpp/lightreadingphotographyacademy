"use client";

import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import { FaCameraRetro, FaQuestionCircle, FaImages,FaPalette } from "react-icons/fa";

interface Course {
  title: string;
  price: string;
  level: string;
  duration: string;
  curriculum:string;
  description: string[];
}

const courses: Course[] = [
  {
  title: "3-Month Pro Visual Photography",
  price: "$2000",
  level: "Beginner to Pro",
  duration: "3 Months",
  curriculum:"/Course Details/Pro level.pdf",
  description: [
    "Exposure, Aperture, Shutter Speed & ISO Mastery",
    "Incident & Reflected Light Understanding",
    "White Balance & Kelvin Control",
    "Hard & Soft Light Practical Training",
    "Depth of Field & Focal Length Study",
    "Composition Techniques (3 Core Classes)",
    "Wedding, Street, Travel & Nature Photography",
    "Outdoor Practical Field Sessions",
  ],
  },
  {
  title: "3-Month Advanced Studio Lighting",
  price: "$2000",
  level: "Advanced",
  duration: "3 Months",
  curriculum:"/Course Details/Advance Pro level.pdf",
  description: [
    "Incident & Reflected Light Deep Study",
    "Modifiers, Diffusers & Light Intensity Control",
    "Flash, Trigger & Strobe Settings Mastery",
    "Direction & Quality of Light Techniques",
    "Rembrandt, Loop, Short & Broad Lighting",
    "Split, Profile, Beauty & Rim Lighting",
    "2, 3 & 4 Light Fashion Portrait Setups",
    "Key, Fill, Hair, Side & Background Lighting",
    ],
  },
  {
  title: "Diploma Photography Course",
  price: "$2000",
  level: "Beginner to Pro",
  duration: "9 months",
  curriculum:"/Course Details/9 Months Diploma Course.pdf",
  description: [
    "Advanced Lightroom & Photoshop Workflows",
    "Professional Color Correction & Color Grading",
    "Wedding, Street & Portrait Retouching",
    "Travel, Bird, Macro & Studio Editing",
    "Product Photography Editing Techniques",
    "Skin Retouching & Detail Enhancement",
    "Creative Effects & Mood Development",
    "Album Design & Final Output Preparation",
    ],
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative min-h-screen px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MentorBackground.jpeg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">
        {/* Extra Learning Support Section */}
        <section className="mt-12 mb-8 md:px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Beyond The Classroom
            </h2>
            <p className="text-gray-400 mt-4">
              Practical exposure and continuous mentorship to sharpen your skills.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-black/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffde59] transition duration-300">
              <FaCameraRetro className="text-[#ffde59] text-3xl mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                Regular Photowalk Sessions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Hands-on outdoor photography sessions to apply concepts in real-world
                environments and build confidence behind the camera.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffde59] transition duration-300">
              <FaQuestionCircle className="text-[#ffde59] text-3xl mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                Doubt Clearing Sessions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Dedicated sessions to clarify technical concepts, camera settings,
                lighting techniques, and creative approaches.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffde59] transition duration-300">
              <FaImages className="text-[#ffde59] text-3xl mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                Photo Study Sessions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Structured photo analysis and critique sessions to improve composition,
                storytelling, and artistic vision.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-black/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffde59] transition duration-300">
              <FaPalette className="text-[#ffde59] text-3xl mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                Annual Exhibition
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A grand yearly exhibition showcasing student works, giving them real
                exposure, recognition, and professional presentation experience.
              </p>
            </div>

          </div>
        </section>
      <h2 className="text-4xl font-bold text-white mb-8">
        Course Details
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-[#111111]
              border
              border-gray-800
              rounded-2xl
              p-8
              transition-all
              duration-300
              hover:border-gray-600
              hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
            "
          >
            {/* Level Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                {course.level}
              </span>

            <HiOutlineSearch className="text-gray-500 text-lg" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-4">
              {course.title}
            </h3>

            {/* Description */}
            <ul className="text-gray-400 text-sm leading-relaxed mb-6 space-y-2">
                {Array.isArray(course.description) ? (
                course.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                <span className="text-white">•</span>
                <span>{point}</span>
            </li>
            ))
            ) : (
            <li>{course.description}</li>
              )}
              </ul>

            {/* Footer */}
            <div className="flex justify-between items-center border-t border-gray-800 pt-6">
              <span className="text-sm text-gray-500">
                {course.duration}
              </span>
              <div className="text-3xl font-bold text-[#ffde59] mb-8">
              {course.price}
              </div>
              <button
              onClick={() => window.open(course.curriculum, "_blank")}
                className="
                  text-sm
                  text-white
                  border
                  border-gray-700
                  px-4
                  py-2
                  rounded-full
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 tracking-wide">
            <span className="text-[#ffde59] font-semibold underline">
              Online Classes
            </span>{" "}
            are also available for students across locations.
          </p>
        </div>
      </div>

    </section>
  );
}