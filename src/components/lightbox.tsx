"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type LightboxProps = {
  images: string[];
  index: number;
  onClose: () => void;
};

export default function lightbox( { images,
  index,
  onClose,
}: LightboxProps) {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-[#ffde59] rounded-full animate-spin" />
        </div>
      )}
        <motion.img
          src={images[index]}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onLoad={() => setLoading(false)}
          transition={{ duration: 0.4 }}
          className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl ${
          loading ? "opacity-0" : "opacity-100"}`}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}