import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Facebook } from 'lucide-react';
import { IMAGES } from '../constants';

// Cast motion components to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;
const MotionH4 = motion.h4 as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

interface SocialStat {
  value: string;
  label: string;
}

// TikTok Icon Component (SVG)
const TikTokIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 1 7.6 6.83 6.83 0 0 0 4.46-6.64V7.53A8.64 8.64 0 0 0 19.59 6.69Z" />
  </svg>
);

interface SocialProfile {
  id: string;
  platform: string;
  icon: React.ReactNode;
  avatar: string;
  name: string;
  handle: string;
  stats: SocialStat[];
  bio: string;
  btnText: string;
  theme: 'red' | 'black' | 'blue';
}

const SOCIAL_DATA: SocialProfile[] = [
  {
    id: 'tiktok',
    platform: 'TikTok',
    icon: <TikTokIcon size={40} />,
    avatar: IMAGES.logo,
    name: 'AQI Fishing',
    handle: '@moicauaqi',
    stats: [
      { value: '2.4K', label: 'Follower' },
      { value: '8.7K', label: 'Thích' },
      { value: '2', label: 'Đang follow' }
    ],
    bio: 'Vào giỏ hàng mua ủng hộ em nha 😜',
    btnText: 'Follow',
    theme: 'black'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    icon: <Youtube size={40} />,
    avatar: IMAGES.logo,
    name: 'AQI Fishing Channel',
    handle: '@aqifishing',
    stats: [
      { value: '50K', label: 'Subscribers' },
      { value: '200', label: 'Videos' },
      { value: '2.5M', label: 'Views' }
    ],
    bio: 'Chia sẻ kỹ thuật câu cá và đánh giá sản phẩm chất lượng của AQI Fishing.',
    btnText: 'Đăng Ký / Subscribe',
    theme: 'red'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    icon: <Facebook size={40} />,
    avatar: IMAGES.logo,
    name: 'AQI Fishing Fanpage',
    handle: '@aqifishing',
    stats: [
      { value: '15K', label: 'Followers' },
      { value: '1.2K', label: 'Đánh giá' },
      { value: '5.0', label: 'Sao' }
    ],
    bio: 'Trang thông tin chính thức. Cập nhật sản phẩm và video mới nhất của AQI Fishing.',
    btnText: 'Theo Dõi Page',
    theme: 'blue'
  }
];

const Social: React.FC = () => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'red':
        return {
          banner: 'bg-gradient-to-r from-red-500 to-red-600',
          button: 'bg-red-600 hover:bg-red-700 text-white',
          buttonShadow: 'shadow-red-200',
          textAccent: 'text-red-600'
        };
      case 'black':
        return {
          banner: 'bg-gradient-to-r from-gray-900 to-black',
          button: 'bg-black hover:bg-gray-800 text-white',
          buttonShadow: 'shadow-gray-900/20',
          textAccent: 'text-gray-900'
        };
      case 'blue':
        return {
          banner: 'bg-gradient-to-r from-blue-500 to-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          buttonShadow: 'shadow-blue-200',
          textAccent: 'text-blue-600'
        };
      default:
        return {
          banner: 'bg-gray-200',
          button: 'bg-gray-600 hover:bg-gray-700 text-white',
          buttonShadow: 'shadow-gray-200',
          textAccent: 'text-gray-600'
        };
    }
  };

  return (
    <section id="social" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <MotionH4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-aqi-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3"
          >
            Media & Community
          </MotionH4>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-condensed font-black text-aqi-black uppercase tracking-tighter leading-none mb-3 md:mb-4"
          >
            Kết Nối Với <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqi-red to-orange-500">
              Cộng Đồng AQI
            </span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg font-sans"
          >
            Theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật nội dung mới nhất
          </MotionP>
        </div>

        {/* --- SOCIAL PROFILE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOCIAL_DATA.map((profile, index) => {
            const theme = getThemeClasses(profile.theme);
            
            return (
              <MotionDiv
                key={profile.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  
                  {/* Header/Cover Banner */}
                  <div className={`${theme.banner} h-20 relative`}>
                    {/* Platform Icon Watermark */}
                    <div className="absolute top-4 right-4 text-white/30">
                      {profile.icon}
                    </div>
                  </div>

                  {/* Avatar - Overlapping Banner */}
                  <div className="relative -mt-10 flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white ring-2 ring-gray-100">
                      <img 
                        src={profile.avatar} 
                        alt={`${profile.name} - ${profile.platform} Profile của AQI Fishing`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=200&auto=format&fit=crop';
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="px-6 pb-6">
                    
                    {/* Identity */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-black text-gray-900 mb-1">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {profile.handle}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-4 border-t border-b border-gray-100 py-4">
                      {profile.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-lg font-black ${theme.textAccent} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bio/Slogan */}
                    <p className="text-sm text-gray-600 text-center mb-6 min-h-[40px] leading-relaxed">
                      {profile.bio}
                    </p>

                    {/* CTA Button */}
                    <button 
                      className={`w-full py-3 ${theme.button} font-bold uppercase tracking-wider rounded-lg shadow-lg ${theme.buttonShadow} transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]`}
                    >
                      {profile.btnText}
                    </button>

                  </div>

                </div>
              </MotionDiv>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Social;
