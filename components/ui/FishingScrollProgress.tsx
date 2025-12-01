import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

// Cast motion.div to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;

const FishingScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isHooked, setIsHooked] = useState(false);
  const [showScrollUI, setShowScrollUI] = useState(false); // 👈 NEW: kiểm soát hiện/ẩn

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Movement of float
  // Fix arithmetic error by explicit typing of v
  const containerTop = useTransform(smoothProgress, (v: number) => `${v * 85}%`);

  // Scroll event
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 👇 Chỉ hiện khi lướt xuống khỏi đầu trang
    if (latest > 0.05) setShowScrollUI(true);
    else setShowScrollUI(false);

    // Hook animation
    if (latest > 0.99) setIsHooked(true);
    else setIsHooked(false);
  });

  return (
    <AnimatePresence>
      {showScrollUI && (
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.25 }}
          className="fixed right-2 md:right-4 top-24 bottom-0 z-40 w-12 hidden lg:flex flex-col items-center pointer-events-none"
        >

          {/* Dây cước */}
          <div className="absolute top-0 bottom-10 w-[1px] bg-gray-400/30 backdrop-blur-sm"></div>

          {/* FLOAT + HOOK */}
          <MotionDiv 
            className="absolute w-8 flex flex-col items-center"
            style={{ top: containerTop }}
          >
            {/* Space Bean */}
            <div className="w-1 h-1.5 bg-black rounded-full mb-0.5"></div>

            {/* Float */}
            <div className="relative w-1.5 h-16 flex flex-col items-center">
              {/* Tip */}
              <div className="w-1 h-6 flex flex-col">
                <div className="h-1.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]"></div>
                <div className="h-1.5 bg-yellow-400"></div>
                <div className="h-1.5 bg-black"></div>
                <div className="h-1.5 bg-orange-500"></div>
              </div>

              {/* Body */}
              <div className="w-2 h-6 bg-white rounded-full border border-gray-200 shadow-sm -mt-0.5"></div>

              {/* Foot */}
              <div className="w-[1px] h-4 bg-gray-800 -mt-0.5"></div>
            </div>

            {/* Space Bean */}
            <div className="w-1 h-1.5 bg-black rounded-full -mt-1"></div>

            {/* Weight */}
            <div className="w-[1px] h-4 bg-gray-400/80"></div>

            {/* Hook */}
            <svg 
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
              className={`text-gray-500 drop-shadow-md transition-transform duration-300 -mt-1 ${isHooked ? 'translate-y-2' : ''}`}
            >
              <path d="M12 2v14c0 1.5 1 2.5 2.5 2.5S17 17.5 17 16" />
              <path d="M17 16l-2 2" />
              <circle cx="12" cy="2" r="1.5" fill="currentColor" />
            </svg>
          </MotionDiv>

          {/* BAIT */}
          <div className="absolute bottom-6 flex flex-col items-center justify-center">
            <MotionDiv
              animate={isHooked ? { 
                rotate: [-5, 5, -5],
                scale: [1, 1.1, 1],
                y: [0, -2, 0]
              } : { 
                rotate: 0, 
                scale: 1,
                y: 0 
              }}
              transition={isHooked ? { duration: 0.2, repeat: Infinity } : {}}
              className="relative z-20"
            >
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)] border border-yellow-600"></div>
            </MotionDiv>

            {/* DÍNH CÁ label */}
            <AnimatePresence>
              {isHooked && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0, x: -40 }}
                  animate={{ opacity: 1, scale: 1, x: -50 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-full whitespace-nowrap mr-2"
                >
                  <div className="bg-aqi-red text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                    Dính Cá!
                  </div>
                  <div className="absolute -right-2 top-1 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -right-4 bottom-0 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-75"></div>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>

        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default FishingScrollProgress;