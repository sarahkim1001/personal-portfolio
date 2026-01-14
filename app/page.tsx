"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="min-h-screen relative bg-black flex items-center justify-center p-8 md:p-16">
      {/* Floating Index Card Container */}
      <div 
        className="relative w-full max-w-4xl aspect-[4/6] md:aspect-[3/5] border-4 border-white bg-white"
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
        <div className="h-full flex flex-col items-center justify-center px-6 md:px-8 py-8 md:py-12 overflow-y-auto">
          {/* Centerpiece Typography */}
          <div className="text-center mb-6 md:mb-8">
            <img
              src="/img/spiral.png"
              alt=""
              className="mx-auto mb-4 md:mb-6 w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-2 md:mb-4">
              creative technologist 
            </h1>
            <h2 className="text-base md:text-lg text-zinc-500 font-normal">
              documenting the intersection of cultural history and modern systems
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="w-full max-w-2xl text-center mb-6 md:mb-8">
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              I translate the intersection of cognitive psychology and digital infrastructure. My work maps how modern interfaces influence our attention and identity, using research-led design to build systems with greater integrity.
            </p>
          </div>

          {/* Practice Index */}
          <div className="w-full max-w-3xl">
            <h3 className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-4 md:mb-6 text-center">
              PRACTICE INDEX
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Column 1: Functional Design */}
            <Link href="/products" className="block group">
              <motion.div
                className="h-full p-4 md:p-6 border border-zinc-200 bg-white/80 hover:bg-white transition-colors duration-300"
                whileHover={{
                  borderColor: "rgb(212 212 216)",
                  y: -2,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <h4 className="text-base md:text-lg font-medium text-zinc-900 mb-2 md:mb-3">
                  Functional Design
                </h4>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  Auditing digital interfaces to build systems that support cognitive autonomy and user integrity.
                </p>
              </motion.div>
            </Link>

            {/* Column 2: Speculative Art */}
            <Link href="/art" className="block group">
              <motion.div
                className="h-full p-4 md:p-6 border border-zinc-200 bg-white/80 hover:bg-white transition-colors duration-300"
                whileHover={{
                  borderColor: "rgb(212 212 216)",
                  y: -2,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <h4 className="text-base md:text-lg font-medium text-zinc-900 mb-2 md:mb-3">
                  Speculative Art
                </h4>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  Mapping the behavioral impact of emerging media through mixed-media research and genealogical traces.
                </p>
              </motion.div>
            </Link>

            {/* Column 3: Cultural Research */}
            <Link href="/glossary" className="block group">
              <motion.div
                className="h-full p-4 md:p-6 border border-zinc-200 bg-white/80 hover:bg-white transition-colors duration-300"
                whileHover={{
                  borderColor: "rgb(212 212 216)",
                  y: -2,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <h4 className="text-base md:text-lg font-medium text-zinc-900 mb-2 md:mb-3">
                  Cultural Research
                </h4>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  Investigating the intersection of human psychology, sociology, and digital sovereignty.
                </p>
              </motion.div>
            </Link>
            </div>
        </div>

          {/* Project Artifact - seventhsense.space */}
          <div
            className="w-full max-w-2xl mt-6 md:mt-8"
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
              duration: 0.4,
              ease: "easeOut",
            }}
          >
              {/* Document Header */}
              <motion.div
                className="p-6 border-b border-zinc-100 bg-zinc-50/50"
                animate={{
                  backgroundColor: isHovered ? "rgba(250, 250, 249, 1)" : "rgba(250, 250, 249, 0.5)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Document
                </p>
                <h3 className="text-2xl font-medium text-zinc-900">
                  seventhsense.space
                </h3>
              </motion.div>

              {/* Document Content - Folder/Dossier Opening Effect */}
              <motion.div
                className="p-6 overflow-hidden"
                animate={{
                  maxHeight: isHovered ? "1000px" : "100px",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {isHovered ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15,
                      ease: "easeOut",
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
