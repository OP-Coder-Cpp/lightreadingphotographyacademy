// app/components/Courses.tsx

"use client";

import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import {
  FaCameraRetro,
  FaQuestionCircle,
  FaImages,
  FaPalette,
} from "react-icons/fa";

interface Course {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercent: string;
  level: string;
  duration: string;
  curriculum: string;
  description: string[];
}

const courses: Course[] = [
  {
    title: "3-Month Pro Visual Photography",
    originalPrice: "₹17,999",
    discountedPrice: "₹14,999",
    discountPercent: "17%",
    level: "Beginner to Pro",
    duration: "3 Months",
    curriculum: "/Course Details/Pro level - 1st Semester.pdf",
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
    originalPrice: "₹17,999",
    discountedPrice: "₹14,999",
    discountPercent: "17%",
    level: "Pro to Advanced",
    duration: "3 Months",
    curriculum: "/Course Details/Advance Pro level - 2nd Semester.pdf",
    description: [
      "Learn how light works in photography",
      "Understand different types of lighting",
      "Master camera and flash exposure",
      "Portrait lighting styles",
      "Advertisement & Fashion photography business",
      "Creative wedding lighting",
      "Advanced composition",
      "Studio equipment practice",
      "Light direction control",
      "Multi-light setups",
    ],
  },
  {
    title: "9-Month Diploma Photography Course",
    originalPrice: "₹33,999",
    discountedPrice: "₹27,999",
    discountPercent: "18%",
    level: "Beginner to Advanced",
    duration: "9 months",
    curriculum: "/Course Details/9 Months Diploma Course.pdf",
    description: [
      "Complete photography training",
      "Camera settings mastery",
      "Natural + studio lighting",
      "Portrait lighting styles",
      "Multiple photography genres",
      "Storytelling composition",
      "Editing + album design",
      "Product photography",
      "Advanced studio lighting",
    ],
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative min-h-screen px-6 md:px-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MentorBackground.jpeg')" }}
      />

      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative z-10">
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
            {[ 
              {
                icon: <FaCameraRetro />,
                title: "Regular Photowalk Sessions",
                text: "Hands-on outdoor sessions for real-world confidence.",
              },
              {
                icon: <FaQuestionCircle />,
                title: "Doubt Clearing Sessions",
                text: "Clarify technical and creative photography concepts.",
              },
              {
                icon: <FaImages />,
                title: "Photo Study Sessions",
                text: "Improve composition and storytelling vision.",
              },
              {
                icon: <FaPalette />,
                title: "Annual Exhibition",
                text: "Professional exposure through yearly showcase.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffde59] transition duration-300"
              >
                <div className="text-[#ffde59] text-3xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
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
              className="bg-[#111111] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs tracking-widest text-[#ffde59] uppercase">
                  {course.level}
                </span>

                <HiOutlineSearch className="text-gray-500 text-lg" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {course.title}
              </h3>

              <ul className="text-gray-400 text-sm leading-relaxed mb-6 space-y-2">
                {course.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center border-t justify-between border-gray-800 pt-6 text-center">
                <span className="text-sm text-gray-500">
                  {course.duration}
                </span>

                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500 line-through">
                    {course.originalPrice}
                  </span>

                  <span className="text-2xl md:text-3xl font-bold text-[#ffde59]">
                    {course.discountedPrice}
                  </span>

                  <span className="text-xs text-green-400 font-semibold">
                    {course.discountPercent} OFF
                  </span>
                </div>

                <button
                  onClick={() => window.open(course.curriculum, "_blank")}
                  className="text-sm text-white border border-gray-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center py-8">
          <p className="text-lg text-gray-300 tracking-wide">
            <span className="text-3xl text-[#ffde59] px-2 py-1 rounded">
              Online Classes
            </span>{" "}
            are also available for students across locations.
          </p>
        </div>
      </div>
    </section>
  );
}