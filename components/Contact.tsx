import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { IMAGES } from '../constants';

// Fishing Hook Icon SVG
const HookIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 1v12c0 3.5 2.5 6 5.5 6s5.5-2.5 5.5-6v-2" />
    <path d="M23 11l-3 3" />
    <path d="M12 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

// Fishing Rod & Line Decorative SVG
const FishingRodSVG = () => (
  <svg 
    width="100%" 
    height="200" 
    viewBox="0 0 400 200" 
    fill="none" 
    className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
    style={{ transform: 'translateX(10%)' }}
  >
    {/* Fishing Rod */}
    <line x1="50" y1="50" x2="350" y2="150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Fishing Line */}
    <path 
      d="M350 150 Q370 160 380 180 Q385 190 380 200" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Hook */}
    <path 
      d="M380 200 L385 205 L380 210 L375 205 Z" 
      fill="currentColor"
      opacity="0.8"
    />
    {/* Small fish silhouette */}
    <ellipse cx="320" cy="160" rx="15" ry="8" fill="currentColor" opacity="0.3" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative text-white pt-24 pb-12 border-t-4 border-aqi-red overflow-hidden scroll-mt-28" role="contentinfo" aria-label="Thông tin liên hệ và footer">
      
      {/* Background Texture - Dark Underwater/Carbon Fiber Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.85), rgba(0,0,0,0.95)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 0 L100 50 L50 100 Z' fill='%23ffffff' fill-opacity='0.02'/%3E%3Cpath d='M25 25 L75 25 L75 75 L25 75 Z' fill='%23ffffff' fill-opacity='0.01'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'cover, 50px 50px',
          backgroundPosition: 'center, 0 0'
        }}
      />
      
      {/* Water Ripples Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 m-20 0 a20 20 0 1 1 40 0 a20 20 0 1 1 -40 0' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M30 30 m-15 0 a15 15 0 1 1 30 0 a15 15 0 1 1 -30 0' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

      {/* Decorative Fishing Rod SVG */}
      <div className="absolute bottom-0 right-0 w-full h-64 z-0 text-white/5">
        <FishingRodSVG />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                <img src={IMAGES.logo} alt="AQI Fishing Logo - Liên hệ với chúng tôi tại Chìa Lá Shop, Xuân Lộc, Đồng Nai" className="h-10 w-10 object-contain bg-white rounded-full p-1" />
                <span className="text-2xl font-serif font-bold">AQI FISHING</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 font-medium">
              Kết nối đam mê, chia sẻ kinh nghiệm. Chúng tôi luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình chinh phục.
            </p>
            <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: 'https://facebook.com/aqifishing' },
                  { Icon: Instagram, href: 'https://instagram.com/aqifishing' },
                  { Icon: Youtube, href: 'https://youtube.com/@aqifishing' }
                ].map(({ Icon, href }, i) => (
                    <a 
                      key={i} 
                      href={href} 
                      className="relative w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aqi-red hover:border-aqi-red transition-all duration-300 group"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }}
                    >
                        <Icon size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-condensed font-bold uppercase tracking-widest mb-8 border-b-2 border-aqi-red pb-4 inline-block text-aqi-red">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div 
                      className="relative mt-1 text-aqi-red group-hover:scale-110 transition-transform"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                        width: '32px',
                        height: '32px',
                        background: 'rgba(217, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <span className="font-medium">52 Trần Phú, TT. Gia Ray, Xuân Lộc, Đồng Nai<br />Chìa Lá Shop - Xuân Lộc</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div 
                      className="text-aqi-red group-hover:scale-110 transition-transform"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                        width: '32px',
                        height: '32px',
                        background: 'rgba(217, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <span className="font-medium">0779.456780 - 09222.58588</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div 
                      className="text-aqi-red group-hover:scale-110 transition-transform"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                        width: '32px',
                        height: '32px',
                        background: 'rgba(217, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <span className="font-medium">contact@aqifishing.xyz</span>
                </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-lg font-condensed font-bold uppercase tracking-widest mb-8 border-b-2 border-aqi-red pb-4 inline-flex items-center gap-2 text-aqi-red">
              <MapPin size={20} className="text-aqi-red" />
              Vị Trí Cửa Hàng
            </h3>
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border-2 border-white/10 shadow-xl">
              <iframe
                src={`https://www.google.com/maps?q=52+Trần+Phú,+TT.+Gia+Ray,+Xuân+Lộc,+Đồng+Nai,+Chìa+Lá+Shop&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chìa Lá Shop Location"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              <a 
                href="https://maps.google.com/?q=52+Trần+Phú,+TT.+Gia+Ray,+Xuân+Lộc,+Đồng+Nai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqi-red hover:text-red-400 transition-colors font-medium"
              >
                Xem trên Google Maps →
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright and Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} AQI Fishing. All rights reserved.</p>
            
            {/* Credits */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500">Design & Dev by</span>
              <span className="font-bold text-gray-300">Dang Hoang An</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
