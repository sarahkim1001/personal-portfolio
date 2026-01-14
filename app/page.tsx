"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [practiceIndexHover, setPracticeIndexHover] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  // Graph paper background pattern for the card (15-20px squares)
  const graphPaperStyle = {
    backgroundColor: '#fcfcf9',
    backgroundImage: `
      linear-gradient(rgba(161, 161, 170, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(161, 161, 170, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '18px 18px, 18px 18px',
    backgroundPosition: '0 0, 0 0',
  };

  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center p-4 md:p-16">
      {/* Floating Index Card Container */}
      <div 
        className="relative w-full max-w-4xl min-h-[600px] md:min-h-[1200px] border-4 border-white bg-white"
        style={graphPaperStyle}
      >
        {/* Coordinates with pulse animation - inside card */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-[10px] tracking-widest text-zinc-400 font-mono">
            37.4419° N, 122.1430° W
          </p>
        </motion.div>

        {/* Main Content - Inside Card */}
        <div className="h-full flex flex-col items-center px-4 md:px-8 pt-12 md:pt-16 pb-24 md:pb-12 overflow-y-auto">
          {/* Centerpiece Typography */}
          <div className="text-center mb-8 md:mb-20 w-full">
            <img
              src="/img/spiral.png"
              alt=""
              className="mx-auto mb-3 md:mb-8 w-20 h-20 md:w-32 md:h-32"
            />
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-2 md:mb-6 px-2">
             Sarah Kim: Creative Technologist 
            </h1>
            <h2 className="text-sm md:text-lg text-zinc-500 font-normal px-2">
            Tracing the cultural lineage of modern interfaces.
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="w-full max-w-2xl text-center mb-8 md:mb-24 px-2">
            <p className="text-xs md:text-base text-zinc-600 leading-relaxed">
            I build digital systems at the intersection of cognitive psychology and cultural history. My work maps how interfaces influence human attention and identity, using research-led design to develop tools with greater systemic integrity.
            </p>
          </div>

          {/* Practice Index */}
          <div className="w-full max-w-4xl mb-8 md:mb-24">
            <h3 className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-3 md:mb-8 text-center">
              PRACTICE INDEX
            </h3>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 md:px-8">
            {/* Index Card 1: Functional Design */}
            <Link href="/products" className="block group">
              <motion.div
                className="relative w-48 md:w-56 aspect-[3/5] border bg-white p-4 md:p-6 flex flex-col"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  borderColor: practiceIndexHover.card1 ? "rgb(161 161 170)" : "rgb(228 228 231)",
                }}
                whileHover={{
                  y: -4,
                  rotate: -0.5,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center" }}
                onMouseEnter={() => setPracticeIndexHover({ ...practiceIndexHover, card1: true })}
                onMouseLeave={() => setPracticeIndexHover({ ...practiceIndexHover, card1: false })}
              >
                {/* REF Label - Top Right */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest font-mono">
                    REF. 01
                  </p>
                </div>
                
                {/* Card Title */}
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mt-6 md:mt-8 mb-auto">
                  Functional Design
                </h4>
                
                {/* Description - Always visible on mobile, fades in on hover for desktop */}
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 block md:hidden">
                  Auditing digital interfaces to build systems that support cognitive autonomy and user integrity.
                </p>
                <motion.p
                  className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 hidden md:block"
                  animate={{ opacity: practiceIndexHover.card1 ? 1 : 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  Auditing digital interfaces to build systems that support cognitive autonomy and user integrity.
                </motion.p>
              </motion.div>
            </Link>

            {/* Index Card 2: Speculative Art */}
            <Link href="/art" className="block group">
              <motion.div
                className="relative w-48 md:w-56 aspect-[3/5] border bg-white p-4 md:p-6 flex flex-col"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  borderColor: practiceIndexHover.card2 ? "rgb(161 161 170)" : "rgb(228 228 231)",
                }}
                whileHover={{
                  y: -4,
                  rotate: 0.5,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center", marginTop: "1rem" }}
                onMouseEnter={() => setPracticeIndexHover({ ...practiceIndexHover, card2: true })}
                onMouseLeave={() => setPracticeIndexHover({ ...practiceIndexHover, card2: false })}
              >
                {/* REF Label - Top Right */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest font-mono">
                    REF. 02
                  </p>
                </div>
                
                {/* Card Title */}
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mt-6 md:mt-8 mb-auto">
                  Speculative Art
                </h4>
                
                {/* Description - Always visible on mobile, fades in on hover for desktop */}
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 block md:hidden">
                  Mapping the behavioral impact of emerging media through mixed-media research and genealogical traces.
                </p>
                <motion.p
                  className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 hidden md:block"
                  animate={{ opacity: practiceIndexHover.card2 ? 1 : 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  Mapping the behavioral impact of emerging media through mixed-media research and genealogical traces.
                </motion.p>
              </motion.div>
            </Link>

            {/* Index Card 3: Cultural Research */}
            <Link href="/glossary" className="block group">
              <motion.div
                className="relative w-48 md:w-56 aspect-[3/5] border bg-white p-4 md:p-6 flex flex-col"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  borderColor: practiceIndexHover.card3 ? "rgb(161 161 170)" : "rgb(228 228 231)",
                }}
                whileHover={{
                  y: -4,
                  rotate: -0.3,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center", marginTop: "0.5rem" }}
                onMouseEnter={() => setPracticeIndexHover({ ...practiceIndexHover, card3: true })}
                onMouseLeave={() => setPracticeIndexHover({ ...practiceIndexHover, card3: false })}
              >
                {/* REF Label - Top Right */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest font-mono">
                    REF. 03
                  </p>
                </div>
                
                {/* Card Title */}
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mt-6 md:mt-8 mb-auto">
                  Cultural Research
                </h4>
                
                {/* Description - Always visible on mobile, fades in on hover for desktop */}
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 block md:hidden">
                  Investigating the intersection of human psychology, sociology, and digital sovereignty.
                </p>
                <motion.p
                  className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-4 hidden md:block"
                  animate={{ opacity: practiceIndexHover.card3 ? 1 : 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  Investigating the intersection of human psychology, sociology, and digital sovereignty.
                </motion.p>
              </motion.div>
            </Link>
            </div>
        </div>

          {/* Project Artifact - seventhsense.space */}
          <div
            className="w-full max-w-2xl mt-8 md:mt-24 mb-8 md:mb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          <motion.div
            className="relative bg-white border border-zinc-200 overflow-hidden shadow-sm"
            animate={{
              scale: isHovered ? 1.01 : 1,
              borderColor: isHovered ? "rgb(161 161 170)" : "rgb(228 228 231)",
              boxShadow: isHovered ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
              {/* Document Header */}
              <motion.div
                className="p-4 md:p-6 border-b border-zinc-100 bg-zinc-50/50"
                animate={{
                  backgroundColor: isHovered ? "rgba(250, 250, 249, 1)" : "rgba(250, 250, 249, 0.5)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Document
                </p>
                <h3 className="text-lg md:text-2xl font-medium text-zinc-900">
                  seventhsense.space
                </h3>
              </motion.div>

              {/* Document Content - Folder/Dossier Opening Effect */}
              {/* Always expanded on mobile, hover on desktop */}
              <motion.div
                className="p-4 md:p-6 overflow-hidden"
                animate={{
                  maxHeight: isHovered ? "1000px" : "100px",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  maxHeight: "none",
                }}
                className="md:max-h-[100px]"
              >
                {/* Show expanded content on mobile always, on desktop only when hovered */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      Launched in January 2026, seventhsense.space is a research-led platform exploring the intersection of human psychology and digital systems. The project functions as an 'integrity layer' for contemporary technoculture, performing audits on how modern interfaces reconfigure human attention and identity.
                    </p>
                    <p className="text-sm text-zinc-500">
                      Inspired by the work of Donna Haraway, the platform investigates the 'cyborgian organism'—the lived reality of being a hybrid of biology and technology in the Information Age.
                    </p>
                    <div className="mt-6 pt-4 border-t border-zinc-100">
                      <Link
                        href="https://seventhsense.space"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-900 border-b border-zinc-900 hover:border-zinc-600 transition-colors inline-block"
                      >
                        [ Enter Space ]
                      </Link>
                    </div>
                  </motion.div>
                </div>
                
                {/* Desktop: Show expanded content only on hover */}
                <div className="hidden md:block">
                  {isHovered ? (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        Launched in January 2026, seventhsense.space is a research-led platform exploring the intersection of human psychology and digital systems. The project functions as an 'integrity layer' for contemporary technoculture, performing audits on how modern interfaces reconfigure human attention and identity.
                      </p>
                      <p className="text-sm text-zinc-500">
                        Inspired by the work of Donna Haraway, the platform investigates the 'cyborgian organism'—the lived reality of being a hybrid of biology and technology in the Information Age.
                      </p>
                      <div className="mt-6 pt-4 border-t border-zinc-100">
                        <Link
                          href="https://seventhsense.space"
            target="_blank"
            rel="noopener noreferrer"
                          className="text-sm font-medium text-zinc-900 border-b border-zinc-900 hover:border-zinc-600 transition-colors inline-block"
                        >
                          [ Enter Space ]
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      className="text-sm text-zinc-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      A research-led platform examining the behavioral impact of emerging media and proposing frameworks for intentional digital environments.
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Colophon / Inventory No. in bottom right - outside card */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20">
        <Link
          href="/about"
          className="text-[9px] md:text-[10px] text-zinc-500 hover:text-zinc-400 transition-colors tracking-wider uppercase"
        >
          Colophon
        </Link>
      </div>
    </div>
  );
}
