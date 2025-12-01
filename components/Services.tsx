import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import TiltCard from './ui/TiltCard';

// Cast motion.div to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;

// Image-based partners data structure
const PARTNERS = [
  { name: "CHILASHOP", logo: "https://sf-static.upanhlaylink.com/img/image_2025112922637db27500c28c68ce696e6ddb35b5.jpg" },
  { name: "HOAGIATHANH", logo: "https://sf-static.upanhlaylink.com/img/image_20251129f425db20029725bc1622efdfff699300.jpg" },
  { name: "SAPHAM", logo: "https://sf-static.upanhlaylink.com/img/image_2025112916ff26b93d0e28df184963cfe6e2afc1.jpg" },
  { name: "TAGFISHING", logo: "https://sf-static.upanhlaylink.com/img/image_20251129b191ca8ad6dd3f3c0a394c914acc3db1.jpg" },
  { name: "VGFA", logo: "https://sf-static.upanhlaylink.com/img/image_20251129e1dc7552df39b7eb276639a6adfa0930.jpg" },
  { name: "VIETNAM FISHING", logo: "https://sf-static.upanhlaylink.com/img/image_2025112970b9beba0280f205f39b2f9c6b5369c8.jpg" },
  { name: "ENDLESSWORLDFISING", logo: "https://sf-static.upanhlaylink.com/img/image_202511298e9d15f2a16726418b9a7b60efc26852.jpg" },
  { name: "VFGE", logo: "https://sf-static.upanhlaylink.com/img/image_20251129039f0dd450c985940796c19d9b7551cd.jpg" },
  { name: "XSAMTIN", logo: "https://sf-static.upanhlaylink.com/img/image_202511294f2d211fef9f0b490c88cd48b195325c.jpg" },
  { name: "DAIWA", logo: "https://sf-static.upanhlaylink.com/img/image_20251129f62271417dca0e5cde9838b2135e2e73.jpg" },
  { name: "GANAKATSU", logo: "https://sf-static.upanhlaylink.com/img/image_2025112961209d63387cfb3e44f23dff05f7e9ef.jpg" },
  { name: "GAMASENKO", logo: "https://sf-static.upanhlaylink.com/img/image_202511300c5dd4590cd0dc19f01f8b9654dde4cb.jpg" },
  { name: "GUF", logo: "https://sf-static.upanhlaylink.com/img/image_20251130646b08f584bbe599a31510353b50d494.jpg" },
  { name: "QUINLONG", logo: "https://sf-static.upanhlaylink.com/img/image_202511309d626a96f7a0b941f0423dc3d13d6074.jpg" },
  { name: "LIAQIN", logo: "https://file.hstatic.net/200000490833/collection/logo_lianqiu_a_09726e03d7b14fb5a0b8b5113589d12f.png" },
];

const FLOAT_THEMES = [
  {
    gradient: "from-aqi-red via-orange-500 to-yellow-400",
    shadow: "shadow-orange-500/30",
    border: "border-aqi-red",
    textHover: "group-hover:text-aqi-red",
    cardShadowHover: "hover:shadow-red-100",
    bgIcon: "bg-aqi-red"
  },
  {
    gradient: "from-emerald-600 via-green-500 to-lime-400",
    shadow: "shadow-green-500/30",
    border: "border-green-500",
    textHover: "group-hover:text-green-600",
    cardShadowHover: "hover:shadow-green-100",
    bgIcon: "bg-green-600"
  },
  {
    gradient: "from-blue-600 via-cyan-500 to-teal-300",
    shadow: "shadow-cyan-500/30",
    border: "border-cyan-500",
    textHover: "group-hover:text-cyan-600",
    cardShadowHover: "hover:shadow-cyan-100",
    bgIcon: "bg-cyan-600"
  },
  {
    gradient: "from-purple-600 via-fuchsia-500 to-pink-400",
    shadow: "shadow-purple-500/30",
    border: "border-purple-500",
    textHover: "group-hover:text-purple-600",
    cardShadowHover: "hover:shadow-purple-100",
    bgIcon: "bg-purple-600"
  }
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // AUTO-SCROLL LOGIC FOR MOBILE
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      // Only scroll if on mobile/tablet (check if scroll is actually possible)
      if (window.innerWidth >= 1024 || isPaused) return;

      const cardWidth = container.firstElementChild?.clientWidth || 0;
      const gap = 16; // md:gap-4 is 16px
      const scrollAmount = cardWidth + gap;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll - 10) {
        // Loop back to start smoothly
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll next
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  // ANIMATION VARIANTS
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "backOut" 
      } 
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50 overflow-visible relative border-t-0 scroll-mt-32">
      
      {/* CSS Hack to hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 C 10 20 0 30 0 40 C 0 30 10 20 20 20 Z M 20 20 C 30 20 40 30 40 40 C 40 30 30 20 20 20 Z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
           }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 overflow-visible">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-28">
          <h4 className="text-aqi-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3">
            Không Có Thử Thách Nào Khó
          </h4>
          <h2 className="text-3xl md:text-6xl font-condensed font-black text-aqi-black uppercase tracking-tighter leading-none mb-3 md:mb-4">
            Kỹ Năng & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Chiến Thuật</span>
          </h2>
          <div className="w-16 md:w-20 h-1.5 bg-cyan-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>

        {/* 
            SERVICES LIST
            Mobile: Flex Horizontal with Snap + Auto Scroll
            Desktop: Grid 4 columns + 3D Tilt
        */}
        <MotionDiv 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-24 pb-12 lg:pb-0 px-2 lg:px-0 no-scrollbar pt-24 md:pt-32"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => {
            const theme = FLOAT_THEMES[index % FLOAT_THEMES.length];
            
            return (
            <MotionDiv 
              key={index}
              variants={cardVariants}
              className="relative h-full min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center"
            >
              {/* 3D TILT WRAPPER (Desktop Effect) */}
              <TiltCard intensity={15} className="h-full">
                <div 
                  className={`bg-white px-6 md:px-8 pt-20 md:pt-24 pb-8 h-full rounded-2xl shadow-lg ${theme.cardShadowHover} transition-all duration-300 border-b-4 ${theme.border} relative overflow-visible z-10 mx-2 lg:mx-0 group`}
                >
                  
                  {/* THE "FISHING RIG" CONTAINER */}
                  <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                      
                      {/* Float Body (Bobbing Animation) */}
                      <MotionDiv 
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className={`w-12 h-20 md:w-14 md:h-24 rounded-full bg-gradient-to-b ${theme.gradient} shadow-xl ${theme.shadow} flex items-center justify-center border-4 border-white relative overflow-hidden`}
                      >
                          <div className="absolute top-2 left-2 w-3 h-8 bg-white/30 rounded-full blur-[2px]"></div>
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-6 h-6 md:w-8 md:h-8 object-contain drop-shadow-md relative z-10 filter brightness-200 contrast-200"
                          />
                      </MotionDiv>

                      {/* Fishing Line */}
                      <div className="w-[1px] h-6 bg-gray-300/80 -mt-1 relative z-0"></div>

                      {/* The Hook (Swing + Parallax Animation) */}
                      <MotionDiv 
                          animate={{ 
                             rotate: [0, -10, 10, -5, 5, 0], // Pendulum Swing
                             y: [-6, 6, -6] // Vertical Parallax (slightly delayed vs float)
                          }}
                          transition={{
                            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 } // Slight delay creates depth
                          }}
                          style={{ originY: 0 }}
                          className="text-gray-500 drop-shadow-sm -mt-[1px]"
                      >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 1v12c0 3.5 2.5 6 5.5 6s5.5-2.5 5.5-6v-2" />
                              <path d="M23 11l-3 3" />
                              <path d="M12 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                          </svg>
                      </MotionDiv>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mt-2 relative z-10">
                      <h3 className={`text-lg md:text-xl font-condensed font-bold text-aqi-black uppercase tracking-tight mb-3 md:mb-4 ${theme.textHover} transition-colors`}>
                      {service.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                      {service.description}
                      </p>
                  </div>
                </div>
              </TiltCard>
            </MotionDiv>
          )})}
        </MotionDiv>

        {/* INDICATOR FOR MOBILE SWIPE */}
        <div className="lg:hidden flex justify-center gap-2 mb-12 -mt-8">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest animate-pulse">
                Vuốt để xem thêm &rarr;
            </span>
        </div>

        {/* PARTNERS & BRANDS (Compact on Mobile) */}
        <div className="py-12 md:py-20 mb-8 bg-transparent border-none shadow-none">
             <div className="text-center mb-8 md:mb-16">
                <h5 className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] font-sans">
                  Đối Tác & Thương Hiệu Đồng Hành
                </h5>
             </div>

             <div className="relative w-full overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                 <MotionDiv 
                    className="flex items-center gap-8 md:gap-32 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                 >
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div 
                            key={i} 
                            className="group relative flex items-center justify-center px-2 md:px-4 bg-transparent border-none shadow-none"
                        >
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
                              className="h-8 md:h-24 w-auto max-w-[100px] md:max-w-[200px] object-contain opacity-100 transition-transform duration-300 transform group-hover:scale-110 mix-blend-multiply"
                            />
                        </div>
                    ))}
                 </MotionDiv>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Services;