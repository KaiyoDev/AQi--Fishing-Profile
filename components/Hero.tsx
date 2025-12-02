
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { CEO_DATA } from '../constants';

// Cast motion components to any to avoid TS errors
const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;
const MotionPath = motion.path as any;

const Hero: React.FC = () => {
  // CEO Images Slideshow
  const ceoImages = Object.values(CEO_DATA.images).filter(Boolean);
  // Random initial image index
  const [currentImageIndex, setCurrentImageIndex] = useState(() => 
    Math.floor(Math.random() * ceoImages.length)
  );

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ceoImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ceoImages.length]);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* LAYER 0: BACKGROUND WAVES (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05]" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Red Glow Spot (Top Right) */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-aqi-red/10 rounded-full blur-[150px]"></div>

        {/* THE GLOWING FISHING LINE (Graphic Element) */}
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <MotionPath
            d="M-100,600 C300,500 600,800 1600,300"
            stroke="#d90000"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="opacity-40 shadow-[0_0_15px_rgba(217,0,0,0.8)]"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          {/* Echo line for style */}
          <MotionPath
            d="M-100,620 C300,520 600,820 1600,320"
            stroke="#d90000"
            strokeWidth="1"
            fill="none"
            className="opacity-20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
      </div>

      {/* LAYER 1B (Foreground): TOP LABEL (z-1) */}
          <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[12%] sm:top-[12%] md:top-[14%] left-0 right-0 z-[1] w-full text-center px-4"
      >
        {/* Top Label */}
        <p className="font-condensed font-bold uppercase tracking-[0.3em] text-aqi-red text-[11px] sm:text-xs md:text-sm">
          Pro Angler & CEO
        </p>
      </MotionDiv>

      {/* LAYER 1 (Background): 3D TYPOGRAPHY BEHIND IMAGE (z-0) - Below Label - Mobile Behind Image */}
      <MotionDiv 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[15%] md:top-[18%] left-0 right-0 z-[5] md:z-0 w-full flex items-start justify-center pointer-events-none"
                 style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D Text - Massive, Behind Image */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* AQI Fishing - Normal, No 3D, Font Sans-Serif - Mobile Responsive */}
          <h2 className="font-sports text-[10vw] sm:text-[5.5vw] md:text-[6vw] lg:text-[7vw] leading-none tracking-widest uppercase whitespace-nowrap mb-1 sm:mb-2 md:mb-4 max-w-[95vw] sm:max-w-none overflow-hidden">
            <span className="text-white">AQI </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-aqi-red to-red-600">Fishing</span>
          </h2>
          
           {/* ĐẶNG HOÀNG HUY - Main Line - INTENSE 3D EFFECTS - Mobile Responsive */}
           <h1
  className="font-condensed font-bold text-[13vw] sm:text-[8vw] md:text-[10vw] lg:text-[12vw] text-white leading-none tracking-tighter uppercase opacity-75 sm:opacity-70 md:opacity-80 lg:opacity-90 w-full px-2 sm:px-4"
  style={{
    textShadow: `
      /* Outer Glow Layers - Multiple Colors */
      0 0 10px rgba(255,255,255,0.8),
      0 0 20px rgba(255,255,255,0.6),
      0 0 30px rgba(255,255,255,0.5),
      0 0 40px rgba(217,0,0,0.4),
      0 0 60px rgba(217,0,0,0.3),
      0 0 80px rgba(255,255,255,0.2),
      0 0 100px rgba(255,255,255,0.15),
      0 0 120px rgba(217,0,0,0.1),

      /* 3D Depth Layers */
      1px 1px 0 rgba(0,0,0,0.9),
      2px 2px 0 rgba(0,0,0,0.8),
      3px 3px 0 rgba(0,0,0,0.7),
      4px 4px 0 rgba(0,0,0,0.6),
      5px 5px 0 rgba(0,0,0,0.5),
      6px 6px 0 rgba(0,0,0,0.4),
      7px 7px 0 rgba(0,0,0,0.3),
      8px 8px 0 rgba(0,0,0,0.2),
      10px 10px 20px rgba(0,0,0,0.8),
      12px 12px 30px rgba(0,0,0,0.7),
      15px 15px 40px rgba(0,0,0,0.6),
      20px 20px 60px rgba(0,0,0,0.5),

      /* Inner Shadow */
      -1px -1px 0 rgba(255,255,255,0.1),
      inset 0 0 30px rgba(255,255,255,0.1)
    `,
    transform: 'translateZ(50px) rotateX(8deg) rotateY(-3deg) scale(1.02)',
    transformStyle: 'preserve-3d',
    filter:
      'drop-shadow(0 0 20px rgba(255,255,255,0.3)) drop-shadow(0 0 40px rgba(217,0,0,0.2))',
    willChange: 'transform'
  }}
>
  ĐẶNG HOÀNG HUY
</h1>
  
        </div>
              </MotionDiv>

      {/* LAYER 2 (Middle): CEO IMAGE SLIDER (z-10) - Perfect Centered - Mobile on Top */}
      <div className="absolute inset-0 z-[15] md:z-10 w-full flex items-center md:items-end justify-center px-0 md:px-4 pt-0 md:pt-0">
        {/* Rim Light / Glow Behind */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[600px] bg-gradient-to-t from-aqi-red/20 to-transparent blur-[80px] rounded-full"></div>

        {/* CEO Images Slideshow with CRITICAL Gradient Fade Mask */}
        <AnimatePresence mode="wait">
          {ceoImages.map((imageUrl, index) => {
            if (index !== currentImageIndex) return null;
            return (
              <MotionImg
                key={`ceo-${index}`}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1],
                  filter: { duration: 0.6 }
                }}
                src={imageUrl}
                alt={`Đặng Hoàng Huy Fishing - AQI Fishing CEO & Pro Angler - ${CEO_DATA.role} - Hình ảnh ${index + 1}`}
                className="h-[70vh] sm:h-[75vh] md:h-[80%] lg:h-[90%] xl:h-[95%] w-full max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-none object-contain object-center md:object-bottom"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(217,0,0,0.15)) drop-shadow(-10px 0 30px rgba(0,0,0,0.8))',
                  // CRITICAL: Smooth gradient fade mask - mobile starts fade earlier
                  maskImage: isMobile 
                    ? 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.25) 80%, transparent 95%)'
                    : 'linear-gradient(to bottom, black 55%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
                  WebkitMaskImage: isMobile
                    ? 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.25) 80%, transparent 95%)'
                    : 'linear-gradient(to bottom, black 55%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* LAYER 3 (Foreground): BOTTOM CONTENT (z-20) - Tight Stack, No Gap */}
              <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-[4%] sm:bottom-[5%] md:bottom-[5%] left-0 right-0 z-20 w-full text-center px-4 -mt-12 sm:-mt-16 md:-mt-48 lg:-mt-56"
      >
        {/* Content Container - No Gradient Background */}
        <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-16">
          {/* Description Text - Responsive Sizing */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl px-2 sm:px-0">
            <span className="text-aqi-red font-semibold">AQI Fishing - Đặng Hoàng Huy Fishing</span> Nơi đẳng cấp của cần thủ chuyên nghiệp. Chuyên gia câu cá với 10+ năm kinh nghiệm, vô địch FLC 2019.
          </p>

          {/* Buttons - Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 items-center px-2 sm:px-0">
            <a 
              href="#gallery" 
              className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-aqi-red text-white font-bold uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(217,0,0,0.4)] flex items-center justify-center gap-2 rounded-sm text-xs sm:text-sm md:text-base"
            >
              Xem Bộ Sưu Tập <Trophy size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
            </a>
                <a 
                  href="https://www.facebook.com/moicauaqi"
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-aqi-black transition-all duration-300 flex items-center justify-center gap-2 rounded-sm text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liên Hệ Hợp Tác <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" /> Facebook
                </a>
          </div>
      </div>
        </MotionDiv>

    </section>
  );
};

export default Hero;
