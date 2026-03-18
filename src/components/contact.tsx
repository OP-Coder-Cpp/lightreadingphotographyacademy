"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt,FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaStar,
  FaYoutube
} from "react-icons/fa";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews :Review[] = [
  {
    name: "Souvik Chanda",
    rating: 5,
    comment: "Joining Light Reading Photography Academy has been one of the best decisions for my photography journey. In just one month, I have learned more than I expected — not only about camera settings and technical aspects, but about truly",
  },
  {
    name: "Kaushik Banerjee.",
    rating: 5,
    comment: "This is a place where you can not only learn photography but a place where you start loving photography. Guidance provided by our Mentor sir helps every student in every possible way to think differently for getting amazing results.",
  },
  {
    name: "আপনার কথা",
    rating: 5,
    comment: "Light Trading Academy is a dream place for me. Thank you Santu sir, he is such a good teacher, friend and grandfather who teaches us. I am very happy to join this academy.",
  },
  {
    name: "Ananta Ghosh",
    rating: 5,
    comment: "Light Reading  Photography is a place I truly love… I feel incredibly proud to be a student of Light  Reading Photography... If I hadn’t joined, I wouldn’t have realized what photography really is. Learning photography from here I absolutely, truly, deeply love it",
  },
  {
    name: "Sayan Biswas",
    rating: 5,
    comment: "I am a student of LRP and I am very impressed and satisfied.I would say LRP this is the best academy for a beginner to learn photography. This academy is full of creativity and the classes are very interesting … ",
  },
  {
    name: "Basak Bhisal",
    rating: 5,
    comment: "I didn't know anything before, after going to you I gained a lot of experience. I had no experience in outdoor shooting and I learned a lot from you, you take great care of our work there. Thank you very much sir 🙏🙏🙏🙏❤️❤️❤️ …",
  },
  {
    name: "Tanmoy Das Photography",
    rating: 5,
    comment: "Excellent Academy. Especially the exhibition they do every year is amazing",
  },
  {
    name: "Alisa Khatun",
    rating: 5,
    comment: "really enjoyed this exhibition. The artworks are creative, meaningful, and visually appealing. It’s definitely worth experiencing.",
  },
  {
    name: "Ashoke C",
    rating: 5,
    comment: "Exlnt experience.  Feeling enriched. Teacher is a dedicated photographer that's why learning is enjoyable.I wish all succ of this institution.",
  },
  {
    name: "Biswadeep Das",
    rating: 5,
    comment: "I’m completely new to photography, and this academy has been an amazing experience so far. The lessons cover all the fundamentals and advance level of photography in great detail, and my doubts are quickly cleared after each session.",
  },
];
  
export default function Contact() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] bg-black px-6 md:px-16 py-12"
    >
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
        <h2 className="text-4xl font-bold text-white mb-8">
        Contact Us
      </h2>
      <div className=" bg-black/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 max-w-3xl ">
        <div className="space-y-6 text-gray-300">

          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#ffde59] text-xl mt-1" />
            <p>
              Light Reading Photography Academy <br />
              13, Rishi Bankim Chandra Rd, near Bank of Baroda, near DTDC <br />
              Naihati, West Bengal 743165
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#ffde59] text-xl" />
            <a
              href="tel:+91918961195186"
              className="hover:text-[#ffde59] transition-colors"
            >
              +918961195186
            </a>
          </div>

        </div>
      </div>
      <h2 className="text-4xl font-bold text-white mt-8 mb-8">
        Google Reviews
      </h2>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              bg-[#111111]
              border
              border-gray-800
              rounded-2xl
              p-8
              shadow-[0_0_40px_rgba(255,222,89,0.05)]
            "
          >
            <div className="flex items-center gap-2 mb-4">
              {[...Array(reviews[index].rating)].map((_, i) => (
                <FaStar key={i} className="text-[#ffde59]" />
              ))}
            </div>

            <p className="text-gray-300 mb-6">
              "{reviews[index].comment}"
            </p>

            <h4 className="text-white font-semibold">
              – {reviews[index].name}
            </h4>
          </motion.div>
        </div>
        {/* Google Map */}
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6901430461553!2d88.4166585!3d22.887902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8979a2f824ac1%3A0xa2e866784b3301ff!2sLIGHT%20READING%20PHOTOGRAPHY%20AN%20ACADEMY%20OF%20CREATIVITY!5e0!3m2!1sen!2sin!4v1771875211550!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Social Footer */}
      <div className="mt-20 border-t border-gray-800 pt-10 flex justify-center gap-8">
        <a
          href="https://facebook.com/profile.php?id=100063651492600"
          target="_blank"
          className="text-gray-400 hover:text-[#ffde59] transition"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href="https://instagram.com/lightreadingphotography21"
          target="_blank"
          className="text-gray-400 hover:text-[#ffde59] transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://wa.me/918961195186?text=I%20want%20to%20enroll%20in%20photography%20course"
          target="_blank"
          className="text-gray-400 hover:text-[#ffde59] transition"
        >
          <FaWhatsapp size={20} />
        </a>
          <a
          href="https://www.youtube.com/@LightReadingPhotographyAcademy"
          target="_blank"
          className="text-gray-400 hover:text-[#ffde59] transition"
        >
          <FaYoutube size={20} />
        </a>
      </div>
      <span className=" flex items-center justify-center py-8 text-gray-400 hover:text-[#ffde59] transition" >Designed and Developed with ❤️ by a Student</span>
    </section>
  );
}