import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, CATALOG_ITEMS } from '../constants';
import ShimmerSkeleton from './ui/ShimmerSkeleton';

const ITEMS_PER_PAGE = 8;

// Cast motion components to any to avoid "Property does not exist" TS errors
const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());

  // Filter items based on active tab
  const filteredItems = activeTab === 'all' 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter(item => item.category === activeTab);

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 and clear loaded images when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setLoadedImages(new Set());
    setErrorImages(new Set());
  }, [activeTab]);

  // Preload first image of current page for faster loading
  useEffect(() => {
    if (paginatedItems.length > 0 && paginatedItems[0]?.image) {
      const img = new Image();
      img.src = paginatedItems[0].image;
    }
  }, [paginatedItems]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: Scroll to top of grid
    const grid = document.getElementById('product-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="products" className="py-12 md:py-24 bg-gray-50 relative overflow-hidden scroll-mt-28">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50">
         <div className="absolute top-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/5 rounded-full blur-[60px] md:blur-[100px]"></div>
         <div className="absolute bottom-20 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-16">
            <h4 className="text-aqi-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3">
              Danh mục kỹ thuật số
            </h4>
            <h2 className="text-3xl md:text-6xl font-condensed font-black text-aqi-black uppercase tracking-tighter leading-none mb-3 md:mb-4">
              Bộ Sưu Tập <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Dụng Cụ</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-lg">
              Tuyển chọn những trang bị tối ưu nhất cho kỹ thuật Câu Đài & Câu Game. <br className="hidden md:block"/>
              Chúng tôi không bán sản phẩm, chúng tôi cung cấp giải pháp.
            </p>
        </div>

        {/* --- 2. CATEGORY FILTER TABS --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                relative px-3 md:px-6 py-1.5 md:py-3 rounded-full font-bold text-[10px] md:text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1
                ${activeTab === cat.id 
                  ? 'bg-aqi-red text-white shadow-[0_10px_20px_-5px_rgba(217,0,0,0.4)] ring-2 ring-red-500 ring-offset-2' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-aqi-black shadow-sm border border-gray-200'
                }
              `}
            >
              {cat.label}
              {activeTab === cat.id && (
                <MotionSpan 
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-white/10" 
                />
              )}
            </button>
          ))}
        </div>
        
        {/* --- 3. 3D PRODUCT SHOWCASE GRID --- */}
        {/* Mobile: 2 Columns (grid-cols-2), Desktop: 4 Columns */}
        <div id="product-grid" className="min-h-[600px]">
            <MotionDiv 
                layout
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
            >
            <AnimatePresence mode="wait">
                {paginatedItems.map((item, index) => {
                    // Ảnh đầu tiên (visible trên màn hình) tải nhanh, còn lại lazy
                    const isFirstImage = index === 0;
                    const isVisibleAboveFold = index < 4; // 4 ảnh đầu tiên (2x2 trên mobile, 4x1 trên desktop)
                    
                    return (
                    <MotionDiv
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="group perspective-1000"
                    >
                        {/* 
                            CARD CONTAINER
                        */}
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-sm md:shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 md:group-hover:-translate-y-3 relative overflow-hidden h-full flex flex-col border border-gray-100">
                            
                            {/* --- IMAGE AREA (4:3) --- */}
                            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                {/* Shimmer Skeleton Loader - Only show when image is loading */}
                                {!loadedImages.has(item.id) && !errorImages.has(item.id) && (
                                    <ShimmerSkeleton 
                                        className="absolute inset-0 z-20"
                                        rounded="none"
                                    />
                                )}
                                
                                {/* Product Image with optimized loading */}
                                <img 
                                    src={item.image} 
                                    alt={`${item.name} - ${item.description || 'Sản phẩm câu cá chuyên nghiệp'} | AQI Fishing Store`} 
                                    loading={isVisibleAboveFold ? "eager" : "lazy"}
                                    fetchPriority={isFirstImage ? "high" : "auto"}
                                    decoding={isVisibleAboveFold ? "sync" : "async"}
                                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 relative z-10 ${
                                        loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={(e) => {
                                      setLoadedImages(prev => new Set(prev).add(item.id));
                                      e.currentTarget.style.opacity = '1';
                                    }}
                                    onError={(e) => {
                                      setErrorImages(prev => new Set(prev).add(item.id));
                                      setLoadedImages(prev => {
                                        const newSet = new Set(prev);
                                        newSet.delete(item.id);
                                        return newSet;
                                      });
                                    }}
                                />
                                
                                {/* Error Placeholder */}
                                {errorImages.has(item.id) && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                                        <div className="text-center p-4">
                                            <div className="text-gray-400 text-4xl mb-2">📷</div>
                                            <p className="text-gray-500 text-xs">Không tải được ảnh</p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Badge */}
                                {item.badge && (
                                    <div className={`absolute top-2 left-2 md:top-4 md:left-4 ${item.badgeColor} text-white text-[9px] md:text-[10px] font-bold px-2 py-1 md:px-3 md:py-1.5 uppercase tracking-wider rounded shadow-lg transform z-10`}>
                                        <div className="flex items-center gap-1">
                                            <Sparkles size={8} className="md:w-2.5 md:h-2.5" />
                                            {item.badge}
                                        </div>
                                    </div>
                                )}

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* --- CONTENT AREA --- */}
                            <div className="p-3 md:p-6 flex flex-col flex-grow">
                                {/* Category Label */}
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-300"></span>
                                    {item.label}
                                </span>

                                {/* Product Name - Smaller on mobile */}
                                <h3 className="font-condensed font-black text-xs md:text-2xl text-aqi-black uppercase leading-tight mb-1 md:mb-2 group-hover:text-aqi-red transition-colors line-clamp-2">
                                    {item.name}
                                </h3>

                                {/* Description - Smaller text, hidden on very small screens if needed */}
                                <p className="text-[10px] md:text-sm text-gray-500 font-medium line-clamp-2 mb-2 md:mb-6">
                                    {item.description}
                                </p>

                                {/* --- ACTION BUTTON (Consultation) --- */}
                                <div className="mt-auto pt-2 md:pt-4 border-t border-gray-100">
                                    <a 
                                        href="#contact"
                                        className="w-full flex items-center justify-center gap-1.5 md:gap-2 border md:border-2 border-aqi-red text-aqi-red hover:bg-aqi-red hover:text-white px-2 py-1.5 md:px-4 md:py-3 rounded-md md:rounded-lg font-bold text-[9px] md:text-sm uppercase tracking-wider transition-all duration-300 group-hover:shadow-lg"
                                    >
                                        <MessageCircle size={12} className="md:w-[18px] md:h-[18px]" />
                                        <span>Tư Vấn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                    );
                })}
            </AnimatePresence>
            </MotionDiv>
            
            {/* Empty State */}
            {paginatedItems.length === 0 && (
                 <div className="col-span-full text-center py-20">
                    <p className="text-gray-400">Không tìm thấy sản phẩm trong danh mục này.</p>
                 </div>
            )}
        </div>

        {/* --- PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
            <div className="mt-8 md:mt-16 flex justify-center items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1.5 md:p-3 rounded-full border border-gray-200 text-gray-500 hover:border-aqi-red hover:text-aqi-red disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                >
                    <ChevronLeft size={16} className="md:w-5 md:h-5" />
                </button>

                <div className="flex gap-1 md:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`
                                w-7 h-7 md:w-10 md:h-10 rounded-full font-bold text-[10px] md:text-sm flex items-center justify-center transition-all
                                ${currentPage === page 
                                    ? 'bg-aqi-red text-white shadow-lg shadow-red-200' 
                                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                                }
                            `}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1.5 md:p-3 rounded-full border border-gray-200 text-gray-500 hover:border-aqi-red hover:text-aqi-red disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                >
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
                </button>
            </div>
        )}

        {/* --- BOTTOM CTA --- */}
        <div className="mt-12 md:mt-20 text-center">
             <p className="text-gray-500 mb-2 md:mb-6 font-medium italic text-xs md:text-base">
                "Dụng cụ chỉ là phần xác, kỹ năng mới là phần hồn. Hãy để chúng tôi giúp bạn kết hợp cả hai."
             </p>
             <a href="#contact" className="inline-block border-b-2 border-aqi-black text-aqi-black font-bold text-[10px] md:text-sm uppercase tracking-widest hover:text-aqi-red hover:border-aqi-red transition-all pb-1">
                Liên hệ đặt hàng
             </a>
        </div>

      </div>
    </section>
  );
};

export default Products;