"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ArtCardProps {
  title: string;
  inquiry: string;
  medium: string;
  year: string;
  status: string;
  illustration?: React.ReactNode;
}

export default function ArtCard({ title, inquiry, medium, year, status, illustration }: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Graph paper background pattern
  const graphPaperStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px',
    backgroundPosition: '0 0, 0 0, 0 0, 0 0',
  };

  return (
    <motion.div
      className="group relative aspect-video bg-white border overflow-hidden"
      style={graphPaperStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "rgb(161 161 170)" : "rgb(228 228 231)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {/* Initial View - Illustration (only if provided) */}
      {/* Hide on mobile, show on desktop when not hovered */}
      {illustration && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 hidden md:flex"
          animate={{
            opacity: isHovered ? 0.3 : 1,
            scale: isHovered ? 0.95 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {illustration}
        </motion.div>
      )}

      {/* Mobile: Always show inquiry text */}
      <div className="md:hidden flex flex-col justify-center p-8 z-10">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-medium text-zinc-900 mb-4">
            {title}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {inquiry}
          </p>
        </div>
      </div>

      {/* Desktop: Hover State - Artistic Inquiry Text */}
      <motion.div
        className="hidden md:flex absolute inset-0 flex flex-col justify-center p-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
          <div className="max-w-2xl mx-auto space-y-4">
            <motion.h3
              className="text-xl font-medium text-zinc-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-sm text-zinc-600 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              {inquiry}
            </motion.p>
          </div>
        </motion.div>

      {/* Metadata - Spec Sheet Info at Bottom */}
      {/* Always visible on mobile, opacity changes on desktop hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t border-zinc-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <p className="text-zinc-500 mb-1">Medium</p>
            <p className="text-zinc-900 font-medium">{medium}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Year</p>
            <p className="text-zinc-900 font-medium">{year}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Status</p>
            <p className="text-zinc-900 font-medium">{status}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
