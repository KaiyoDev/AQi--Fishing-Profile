import React, { useMemo, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Trophy } from 'lucide-react';
import { preloadImages } from './utils/ImageCache';

// Cast motion components to any to avoid "Property does not exist" TS errors
const MotionH4 = motion.h4 as any;
const MotionH2 = motion.h2 as any;

// Fisher-Yates Shuffle Algorithm for random array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery: React.FC = () => {
  // Preload all images once on mount to ensure browser cache
  useEffect(() => {
    const imageUrls = GALLERY_IMAGES.map(img => img.url);
    // Preload all images so browser caches them before they appear in loop
    preloadImages(imageUrls).catch(() => {
      // Silently handle errors - images will still load normally
    });
  }, []);

  // Shuffle images randomly for each row
  const row1Images = useMemo(() => {
    const shuffled = shuffleArray(GALLERY_IMAGES);
    return [...shuffled, ...shuffled];
  }, []);

  const row2Images = useMemo(() => {
    const shuffled = shuffleArray(GALLERY_IMAGES);
    return [...shuffled, ...shuffled];
  }, []);

  return (
    <section id="gallery" className="relative py-24 bg-stone-50 overflow-hidden min-h-screen flex flex-col justify-center scroll-mt-28">
      
      {/* 1. SIMPLIFIED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Water Ripples Pattern - Static */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Static Gradient Spots - No animation for better performance */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 mb-12 md:mb-20 text-center">
        <MotionH4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-aqi-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3"
        >
          Hành Trình Của AQi Fishing
        </MotionH4>
        <MotionH2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-condensed font-black text-aqi-black uppercase tracking-tighter leading-none mb-3 md:mb-4"
        >
          Bộ Sưu Tập
          <br />
          <span className="text-aqi-red">
            Niềm Tự Hào
          </span>
        </MotionH2>
        <p className="text-gray-500 mt-6 text-sm md:text-lg max-w-2xl mx-auto font-sans tracking-wide">
          Hàng ngàn khoảnh khắc chiến thắng rực lửa trên khắp mọi miền đất nước.
        </p>
      </div>

      {/* 2. OPTIMIZED MARQUEE - Using CSS for better performance */}
      <div className="relative z-30 flex flex-col gap-8 transform-gpu">
        
        {/* ROW 1: Left to Right */}
        <div className="relative transform-gpu">
          <MarqueeRow images={row1Images} direction="right" />
        </div>

        {/* ROW 2: Right to Left - Desktop only */}
        <div className="relative transform-gpu hidden md:block">
          <MarqueeRow images={row2Images} direction="left" />
        </div>

        {/* Mobile Indicator */}
        <div className="md:hidden text-center text-gray-400 text-xs uppercase tracking-widest mt-8">
          Lướt để khám phá
        </div>
      </div>

      {/* Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-40 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-40 pointer-events-none" />
    </section>
  );
};

// --- OPTIMIZED MARQUEE ROW with CSS animations ---
const MarqueeRow = memo(({ images, direction }: { images: typeof GALLERY_IMAGES, direction: 'left' | 'right' }) => {
  const animationClass = direction === 'left' 
    ? 'animate-marquee-left' 
    : 'animate-marquee-right';

  return (
    <div className="flex overflow-hidden w-full relative transform-gpu">
      <div 
        className={`flex gap-4 px-4 ${animationClass} transform-gpu`}
        style={{ 
          width: 'max-content',
          transform: 'translateZ(0)'
        }}
      >
        {/* Render images twice for seamless loop - Use stable keys based on URL hash for cache stability */}
        {images.map((img, index) => {
          // Create stable key from URL hash + loop position
          const urlHash = img.url.split('/').pop() || img.url;
          return (
            <TrophyCard 
              key={`loop1-${urlHash}-${index}`} 
              image={img} 
              loopPosition="loop1"
            />
          );
        })}
        {images.map((img, index) => {
          const urlHash = img.url.split('/').pop() || img.url;
          return (
            <TrophyCard 
              key={`loop2-${urlHash}-${index}`} 
              image={img} 
              loopPosition="loop2"
            />
          );
        })}
      </div>
    </div>
  );
});

MarqueeRow.displayName = 'MarqueeRow';

// --- OPTIMIZED TROPHY CARD with simplified hover ---
const TrophyCard = memo(({ image, loopPosition }: { image: any; loopPosition: 'loop1' | 'loop2' }) => {
  return (
    <div 
      className="relative w-[280px] md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white transform-gpu flex-shrink-0"
      style={{ 
        contain: 'layout style paint',
        transform: 'translateZ(0)'
      }}
    >
      {/* Image - Browser will use cached version since URL is the same */}
      <img 
        src={image.url} 
        alt={`${image.title} - ${image.location || ''} ${image.award ? '| Giải thưởng: ' + image.award : ''} | AQI Fishing Trophy Collection`}
        loading={loopPosition === 'loop1' ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover transform-gpu"
        style={{ 
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          imageRendering: 'auto'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
      
      {/* Context Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 opacity-80">
            <Trophy size={14} className="text-white drop-shadow-md" />
            <span className="text-[10px] md:text-xs font-bold text-gray-200 uppercase tracking-wider drop-shadow-md">
              {image.award || 'Thành Tích'}
            </span>
          </div>
          <h3 className="text-white font-bold text-sm md:text-base leading-tight uppercase tracking-wide drop-shadow-lg">
            {image.title}
          </h3>
          {image.location && (
            <p className="text-gray-300 text-[10px] mt-0.5 font-medium drop-shadow-md">
              {image.location}
            </p>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-aqi-red opacity-50" />
    </div>
  );
});

TrophyCard.displayName = 'TrophyCard';

export default Gallery;
