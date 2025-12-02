
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, animate, useTransform } from 'framer-motion';
import { IMAGES } from '../constants';

// Cast motion components to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;
const MotionPath = motion.path as any;
const MotionH2 = motion.h2 as any;
const MotionA = motion.a as any;

// --- Sub-component for Counting Animation ---
const StatCounter = ({ from, to, label, suffix = "+" }: { from: number; to: number; label: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const count = useMotionValue<number>(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }
  }, [isInView, from, to, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start w-full relative z-10 text-center md:text-left">
      <div className="flex items-baseline gap-0.5 mb-1 justify-center md:justify-start">
        <span className="text-2xl md:text-5xl font-sports font-bold text-aqi-black tracking-tight">
            {displayValue}
        </span>
        <span className="text-xl md:text-2xl font-bold text-aqi-red">{suffix}</span>
      </div>
      <span className="text-[10px] md:text-sm font-sans font-bold text-gray-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-12 md:py-24 bg-white overflow-hidden">
      
      {/* 3. UNDERWATER LIGHT AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <MotionDiv 
            animate={{ 
                scale: [1, 1.15, 1], 
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[120px]"
         />
      </div>

      {/* 1. THE "CAST LINE" STORYTELLING SVG - Desktop Only */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block max-w-7xl mx-auto opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
            <MotionPath
                d="M 600 -50 C 600 200, 150 150, 150 400 C 150 650, 800 550, 900 700" 
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          {/* LEFT COLUMN (40%) - Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 perspective-1000">
             <MotionDiv
                animate={{ 
                    y: [-5, 5, -5],
                    rotate: [-0.5, 0.5, -0.5]
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
                className="will-change-transform"
             >
                 <MotionDiv 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="relative w-full aspect-[4/3] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl group"
                 >
                    <img 
                      src={IMAGES.profile} 
                      alt="Đặng Hoàng Huy Fishing - AQI Fishing CEO & Pro Angler - Chuyên gia câu cá chuyên nghiệp" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                 </MotionDiv>
             </MotionDiv>
          </div>

          {/* RIGHT COLUMN (60%) - Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 pt-0 text-center lg:text-left">
             
             {/* Badge */}
             <MotionDiv 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-red-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 border border-red-100"
             >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-aqi-red animate-pulse"></span>
                <span className="text-aqi-red text-[10px] md:text-xs font-bold uppercase tracking-widest">Về AQI Fishing</span>
             </MotionDiv>

             {/* Heading */}
             <MotionH2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-aqi-black leading-[1.1] mb-6 md:mb-8 tracking-tight"
             >
               HÀNH TRÌNH ĐAM MÊ <br/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqi-red to-red-600">
                 & BẢN LĨNH CẦN THỦ
               </span>
             </MotionH2>

             {/* Body Text - Article Content for SEO */}
             <article 
                className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 text-justify md:text-left"
             >
               <p>
  <strong className="text-aqi-black">AQI Fishing</strong> được thành lập bởi <strong className="text-aqi-black">Đặng Hoàng Huy Fishing</strong> - một chuyên gia câu cá chuyên nghiệp với hơn 10 năm kinh nghiệm. 
  Từ năm <strong className="text-aqi-black">2017</strong>, khi vừa tốt nghiệp đại học, <strong className="text-aqi-black">Đặng Hoàng Huy</strong> đã chọn rẽ sang một con đường đầy thử thách: 
  từ bỏ công việc văn phòng kế toán với mức lương ổn áp để theo đuổi <strong className="text-aqi-black">đam mê thật sự</strong> với câu cá. 
  Không điểm tựa, không kinh nghiệm, chỉ có niềm tin rằng mình phải sống đúng với điều mình yêu thích và có thể kiếm được tiền để nuôi mình.
</p>

<p>
  <strong className="text-aqi-black">AQI Fishing - Đặng Hoàng Huy Fishing</strong> đã trải qua một hành trình đầy thử thách và thành công. 
  Chỉ sau <strong className="text-aqi-black">2 năm</strong> miệt mài theo đuổi, <strong className="text-aqi-black">Đặng Hoàng Huy</strong> chạm đến bước ngoặt lớn đầu tiên 
  khi nâng cao chiếc cúp <strong className="text-aqi-black">Vô địch FLC Toàn Quốc 2019</strong>. 
  Đây là thành tích đáng tự hào của <strong className="text-aqi-black">AQI Fishing</strong> và <strong className="text-aqi-black">Đặng Hoàng Huy Fishing</strong>, 
  khẳng định vị thế hàng đầu trong làng câu cá chuyên nghiệp tại Việt Nam.
</p>

<p>
  Từ khoảnh khắc đó đến nay, <strong className="text-aqi-black">AQI Fishing</strong> vẫn tiếp tục mở ra những trải nghiệm, những giải đấu và những bài học quý giá. 
  <strong className="text-aqi-black">Đặng Hoàng Huy Fishing</strong> luôn sẵn sàng chia sẻ lại với anh em có chung đam mê về kỹ thuật câu đài, câu game, 
  và các phương pháp tối ưu để đạt được thành công trong các giải đấu câu cá chuyên nghiệp.
</p>

<p>
  <strong className="text-aqi-black">AQI Fishing - Đặng Hoàng Huy Fishing</strong> không chỉ là một thương hiệu, mà còn là một cộng đồng của những người đam mê câu cá. 
  Với hơn <strong className="text-aqi-black">50+ danh hiệu</strong> và <strong className="text-aqi-black">1000+ hồ câu đã chinh phục</strong>, 
  <strong className="text-aqi-black">Đặng Hoàng Huy</strong> đã xây dựng <strong className="text-aqi-black">AQI Fishing</strong> thành một địa chỉ tin cậy 
  cho những ai muốn học hỏi và phát triển kỹ năng câu cá chuyên nghiệp tại Xuân Lộc, Đồng Nai và trên toàn quốc.
</p>

             </article>

             {/* Stats Row - HORIZONTAL ON MOBILE */}
             <MotionDiv 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="grid grid-cols-3 gap-2 md:gap-12 border-t border-gray-100 pt-6 md:pt-8 mb-8 md:mb-10 relative"
             >
                <StatCounter from={0} to={10} label="Kinh Nghiệm" />
                <StatCounter from={0} to={50} label="Giải Thưởng" />
                <StatCounter from={0} to={1000} label="Hồ Câu" />
             </MotionDiv>

             {/* CTA */}
             <MotionDiv 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 md:border-l-4 border-aqi-red md:pl-6"
             >
                <MotionA 
                  href="#services" 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto text-center bg-aqi-black text-white px-6 py-3 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wide hover:bg-aqi-red transition-colors shadow-lg"
                >
                   Khám Phá Hành Trình
                </MotionA>

                <span className="text-xs md:text-sm font-serif italic text-gray-600 font-medium">
                  "Săn bắt là bản năng, bảo tồn là văn hóa."
                </span>
             </MotionDiv>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;