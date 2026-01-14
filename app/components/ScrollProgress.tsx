"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <div className="fixed right-8 top-0 bottom-0 w-px z-50 pointer-events-none">
      {/* Progress Track Background */}
      <div className="absolute inset-0 w-full bg-zinc-100" />
      
      {/* Progress Marker */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-zinc-400 origin-top"
        style={{
          scaleY: scaleY,
        }}
      >
        <div className="w-full h-px bg-zinc-400" />
      </motion.div>

      {/* Percentage Label */}
      <motion.div
        className="absolute top-1/2 -right-8 transform -translate-y-1/2 rotate-90 origin-center whitespace-nowrap"
        style={{
          opacity: opacity,
        }}
      >
        <span className="text-[9px] text-zinc-400 tracking-wider">
          {String(percentage).padStart(2, "0")} // 100
        </span>
      </motion.div>
    </div>
  );
}
