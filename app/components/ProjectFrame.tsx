"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectFrameProps {
  title: string;
  role: string;
  narrative: string;
  metadata: string;
  url: string;
  imageUrl?: string;
  graphPaper?: boolean;
  coordinates?: string;
}

export default function ProjectFrame({ title, role, narrative, metadata, url, imageUrl, graphPaper = false, coordinates }: ProjectFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Graph paper background pattern
  const graphPaperStyle = graphPaper ? {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px',
    backgroundPosition: '0 0, 0 0, 0 0, 0 0',
  } : {};

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-white border border-zinc-200 overflow-hidden hover:border-zinc-300"
        aria-label={`Visit ${title}`}
        style={graphPaperStyle}
      >
        {/* Coordinates */}
        {coordinates && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <p className="text-[10px] tracking-widest text-zinc-400 font-mono">
              {coordinates}
            </p>
          </div>
        )}

        {/* Background Image/Preview */}
        {imageUrl && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            animate={{
              opacity: isHovered ? 0.4 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10">
          {/* Default State - Title and Role */}
          <motion.div
            className="text-center"
            animate={{
              y: isHovered ? -20 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              ease: "easeOut",
            }}
          >
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">{title}</h3>
            <p className="text-sm text-zinc-500">{role}</p>
          </motion.div>

          {/* Hover State - Narrative, Metadata, and CTA */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex flex-col justify-center p-8 max-w-2xl mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <motion.p
                className="text-sm text-zinc-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                {narrative}
              </motion.p>
              
              <motion.p
                className="text-sm text-zinc-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                {metadata}
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <span className="text-sm font-medium text-zinc-900 border-b border-zinc-900 hover:border-zinc-600 transition-colors">
                  Visit Site
                </span>
              </motion.div>
            </motion.div>
          )}
        </div>
      </Link>
    </div>
  );
}
