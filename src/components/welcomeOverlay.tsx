"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WelcomeOverlay() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setHide(true), 3500);
  }, []);

  if (hide) return null;

  return (
<motion.div
  initial={{ y: 0 }}
  animate={{ y: "-100%" }}
  transition={{ duration: 1, delay: 2.5 }}
  className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src="/LRP Logo.png"
      alt="Academy logo"
      width={300}
      height={200}
    />
  </motion.div>

  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="text-4xl font-bold mt-6 text-white text-center"
  >
    Welcome to Our Academy of Creativity
  </motion.h1>
</motion.div>
  );
}