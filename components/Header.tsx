import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { IMAGES, NAVIGATION } from '../constants';

// Cast motion components to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;
const MotionNav = motion.nav as any;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-100' 
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo Area - With layoutId for seamless transition */}
        <a href="#" className="flex items-center gap-5 group" aria-label="AQI Fishing - Về trang chủ">
          <MotionDiv
            layoutId="aqi-shared-logo"
            className="relative flex items-center justify-center w-16 h-16 overflow-hidden rounded-full"
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <img 
              src={IMAGES.logo} 
              alt="AQI Fishing Logo - Thương hiệu câu cá chuyên nghiệp hàng đầu Việt Nam" 
              className={`
                w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md
                ${isScrolled ? 'mix-blend-multiply' : 'rounded-full bg-white/10 backdrop-blur-sm p-1'}
              `}
            />
          </MotionDiv>
          <div className="flex flex-col justify-center">
            <span className={`text-3xl font-bold tracking-tighter font-serif leading-none ${isScrolled ? 'text-aqi-black' : 'text-white drop-shadow-md'}`}>
              AQI
            </span>
            <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-aqi-red' : 'text-white/90 drop-shadow-md'}`}>
              Fishing
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <MotionNav
          className="hidden lg:flex items-center gap-12" 
          aria-label="Điều hướng chính"
        >
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-semibold tracking-wider uppercase transition-colors relative group py-2
                ${isScrolled ? 'text-aqi-black hover:text-aqi-red' : 'text-white hover:text-white/80 drop-shadow-sm'}
              `}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-aqi-red transition-all duration-300 group-hover:w-full ${isScrolled ? '' : 'shadow-[0_0_8px_rgba(217,0,0,0.8)]'}`}></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-7 py-3 text-sm font-bold tracking-widest uppercase border transition-all duration-300 hover:shadow-lg rounded-sm
              ${isScrolled 
                ? 'border-aqi-black text-aqi-black hover:bg-aqi-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-aqi-black backdrop-blur-sm bg-white/5'
              }
            `}
          >
            Liên hệ
          </a>
          </MotionNav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-aqi-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-t overflow-hidden absolute w-full shadow-xl
              ${isScrolled 
                ? 'bg-white/95 border-gray-100' 
                : 'bg-black/60 border-white/10'
              }
            `}
          >
            <nav className="flex flex-col p-10 gap-8 items-center" aria-label="Menu di động">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold uppercase tracking-wide hover:text-aqi-red transition-colors
                    ${isScrolled ? 'text-aqi-black' : 'text-white'}
                  `}
                >
                  {item.name}
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 px-10 py-4 bg-aqi-red text-white text-base font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg"
                >
                  Liên Hệ tại đây
              </a>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;