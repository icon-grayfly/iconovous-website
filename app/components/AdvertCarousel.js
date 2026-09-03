"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect } from "react";

const adverts = [
  "Enterprise IT Solutions",
  "Cloud Infrastructure",
  "AI Automation Systems",
  "Cybersecurity & Compliance",
  "24/7 Technical Support",
  "DevOps & Scalability",
  "Software Engineering Excellence",
  "Digital Transformation Experts",
];

export default function AdvertCarousel() {
  const controls = useAnimationControls();

  const startCarousel = useCallback(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 70,
        ease: "linear",
      },
    });
  }, [controls]);

  useEffect(() => {
    startCarousel();
  }, [startCarousel]);

  return (
    <div
      className="advert-carousel"
      aria-label="Company services"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={startCarousel}
      onFocus={() => controls.stop()}
      onBlur={startCarousel}
    >
      <motion.div animate={controls} className="advert-carousel__track">
        {[...adverts, ...adverts].map((advert, index) => (
          <span key={`${advert}-${index}`}>{advert}</span>
        ))}
      </motion.div>
    </div>
  );
}
