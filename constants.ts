
import { MapPin } from "lucide-react";
import { isNull } from "util";

export const IMAGES = {
  logo: "https://sf-static.upanhlaylink.com/img/image_2025112870b76caa1110a18c06679b4a3e2e641d.jpg",
  profile: "https://sf-static.upanhlaylink.com/img/image_20251128c103edf26845210671d661a153b4a171.jpg",
  heroBg: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2070&auto=format&fit=crop",
  gear1: "https://images.unsplash.com/photo-1536704689578-8fc50fbcec75?q=80&w=1000&auto=format&fit=crop",
  gear2: "https://images.unsplash.com/photo-1528612956792-5dd75c3db47f?q=80&w=1000&auto=format&fit=crop",
  gear3: "https://images.unsplash.com/photo-1620021673323-e18e19c9e832?q=80&w=1000&auto=format&fit=crop",
};
export const CEO_DATA = {
  name: "ĐẶNG HOÀNG HUY",
  role: "CEO & FOUNDER",
  quote: "Trong thế giới của sự tĩnh lặng, mỗi dao động của phao là một bản nhạc kịch tính.",
  images: {
    // Central, colorful image (Cutout)
    main: "https://files.catbox.moe/78jisb.png", 
    // Background, left side (Grayscale Echo -> Now part of slideshow)
    left: "https://files.catbox.moe/28yqf9.png", 
    // Background, right side (Sepia Echo -> Now part of slideshow)
    right: "https://files.catbox.moe/7eb3cp.png" ,
    aqi: "https://files.catbox.moe/wsckx5.png",
    cauca: "https://files.catbox.moe/vctmt0.png",
    cauca1: "https://files.catbox.moe/y55on5.png",
    cauca3: "https://files.catbox.moe/nowire.png",
    cauca2: "https://files.catbox.moe/m9d0im.png",
    cauca4: "https://files.catbox.moe/izn5pp.png"
  }
};
export const NAVIGATION = [
  { name: "Giới thiệu", href: "#about" },
  { name: "Kỹ năng", href: "#services" },
  { name: "Sản phẩm", href: "#products" },
  { name: "Bộ sưu tập", href: "#gallery" },
  { name: "Mạng Xã Hội", href: "#social" },
];

// Updated to use Image URLs for icons instead of React Components
// Recommended size: 128x128px PNG Transparent
export const SERVICES = [
  {
    title: "Huấn Luyện Kỹ Thuật",
    description: "Chuyên sâu kỹ thuật Câu Đài & Câu Game. Tối ưu hóa thao tác, nhịp điệu và khả năng đọc tín hiệu phao.",
    icon: "https://files.catbox.moe/lbhavt.png", // Placeholder target/focus icon
  },
  {
    title: "Tư Vấn Trang Bị",
    description: "Set-up trục, thẻo, phao và cần phù hợp với từng giải đấu. Tinh chỉnh độ cân bằng và độ nhạy.",
    icon: "https://files.catbox.moe/z79d2o.png", // Placeholder float/fishing rod icon
  },
  {
    title: "Tổ Chức Giải Đấu",
    description: "Vận hành các giải đấu chuyên nghiệp. Quy trình chấm điểm chuẩn xác và công bằng.",
    icon: "https://files.catbox.moe/fo89fr.png", // Placeholder trophy icon
  },
  {
    title: "Kết Nối Đam Mê",
    description: "Xây dựng cộng đồng cần thủ văn minh. Chia sẻ kinh nghiệm thực chiến tại các hồ dịch vụ.",
    icon: "https://files.catbox.moe/2ikvm1.png", // Placeholder handshake/community icon
  }
];

export const STATS = [
  { value: "10+", label: "Năm Kinh Nghiệm" },
  { value: "50+", label: "Giải Thưởng" },
  { value: "1000+", label: "Hồ Câu Đã Chinh Phục" },
];

export const GALLERY_IMAGES = [
  {
    url: "https://sf-static.upanhlaylink.com/img/image_2025112852371ee579c223cdb3fee2f9c33cd2c5.jpg",
    title: "Giải nhì - Hồ câu bằng lăng",
    award: "GIẢI NHÌ",
    location: "Hồ câu Bằng Lăng"
  },
  {
    url: "https://sf-static.upanhlaylink.com/img/image_20251129808fd3d93cecb9568555f13e00f7c7ef.jpg",
    title: "Cá nhiều I - Hồ câu đại bằng",
    award: "GIẢI CÁ NHIỀU I",
    location: "Hồ câu Đại Bằng"
  },
  {
    url: "https://sf-static.upanhlaylink.com/img/image_202511290213e956aa705c2836c81d62254b94e9.jpg",
    title: "Giải nhất I - CLB AESG và những người bạn",
    award: "VÔ ĐỊCH (NHẤT I)",
    location: "CLB AESG Mở Rộng"
  },
  {
    url: "https://sf-static.upanhlaylink.com/img/image_20251129bc4c5419592f2e2e4397aa7eb0bdca0a.jpg",
    title: "Giải khuyến khích - Chì Lá Farm",
    award: "GIẢI KHUYẾN KHÍCH",
    location: "Chì Lá Farm"
  },
  {
    url: "https://sf-static.upanhlaylink.com/img/image_202511282ef205aa2102234e33d1de980764d779.jpg",
    title: "Giải nhì đồng đội - Hồ câu Dasar",
    award: "NHÌ ĐỒNG ĐỘI",
    location: "Hồ câu Dasar"
  },
  {
    url: "https://sf-static.upanhlaylink.com/img/image_202511299d97e72c38ecaf33450bb09f0bd55fa3.jpg",
    title: "Giải năm - CLB câu tay TP.Thủ Đức",
    award: "GIẢI NĂM",
    location: "CLB TP.Thủ Đức"
  },
  {
    url: "https://files.catbox.moe/obro0a.jpg",
    title: "Giải 24 - CLB Toro và những người bạn",
    award: "GIẢI 24",
    location: "CLB Toro Mở Rộng"
  },
  {
    url: "https://files.catbox.moe/gfuvy9.jpg",
    title: "Giải nhất - Giải giao lưu mở rộng câu cá Xã Hưng Thịnh",
    award: "GIẢI NHẤT",
    location: "Xã Hưng Thịnh"
  },
  {
    url: "https://files.catbox.moe/7vx27x.jpg",
    title: "Giải ba - Chung kết giao hữu Việt - Trung",
    award: "GIẢI BA",
    location: "Chung Kết Giao Hữu Việt - Trung"
  },
  {
    url: "https://files.catbox.moe/d3rlni.jpg",
    title: "Giải nhì - Giải VuaKong",
    award: "GIẢI NHÌ",
    location: "Giải VuaKong"
  },
  {
    url: "https://files.catbox.moe/oi7f61.jpg",
    title: "Giải khuyến khích 2 - Giao lưu CLB MIDI 8/2025",
    award: "GIẢI KHUYẾN KHÍCH 2",
    location: "CLB MIDI 8/2025"
  },
  {
    url: "https://files.catbox.moe/vgko0c.jpg",
    title: "Cá nhiều III - Hồ câu Đại Bằng",
    award: "GIẢI CÁ NHIỀU III",
    location: "Hồ câu Đại Bằng"
  },
  {
    url: "https://files.catbox.moe/xsgcfx.jpg",
    title: "Giải ba - Giải câu tranh cúp MILU",
    award: "GIẢI BA",
    location: "Giải Câu Tranh Cúp MILU"
  },
  {
    url: "https://files.catbox.moe/ykracd.jpg",
    title: "Giải khuyến khích - Tranh cúp ALT Fishing lần 1",
    award: "GIẢI KHUYẾN KHÍCH",
    location: "Tranh Cúp ALT Fishing Lần 1"
  },
  {
    url: "https://files.catbox.moe/p902pm.jpg",
    title: "Giải nhì - Khui hồ câu A Thiên",
    award: "GIẢI NHÌ",
    location: "Hồ câu A Thiên"
  },
  {
    url: "https://files.catbox.moe/znt22o.jpg",
    title: "Giải tư - Giao lưu cuối năm hồ câu Thanh Trung",
    award: "GIẢI TƯ",
    location: "Hồ câu Thanh Trung"
  },
  {
    url: "https://files.catbox.moe/jq4cwx.jpg",
    title: "Giải ba - Giao lưu cuối năm hồ câu Dami Fishing",
    award: "GIẢI BA",
    location: "Hồ câu Dami Fishing"
  },
  {
    url: "https://files.catbox.moe/89taj5.jpg",
    title: "Giải ba - Mini game hồ câu Thành Công",
    award: "GIẢI BA",
    location: "Hồ câu Thành Công"
  },
  {
    url: "https://files.catbox.moe/wbmph1.jpg",
    title: "Giải nhất - Tranh cúp Tag Fishing 2024",
    award: "GIẢI NHẤT",
    location: "CLB Câu Cá Thể Thao & Giải Trí 139"
  },
  {
    url: "https://files.catbox.moe/i1c6gh.jpg",
    title: "Giải sáu / Giải nhất đồng đội - Giao lưu hữu nghị Việt - Trung 2024",
    award: "GiẢI SÁU / NHẤT ĐỒNG ĐỘI",
    location: "Hoa Gia Thành"
  },
  {
    url: "https://files.catbox.moe/pobv9b.jpg",
    title: "Giải khuyến khích / Giải ba đồng đội - Đại chiến tây nguyên năm giáp thìn 2024",
    award: "GIẢI KHUYẾN KHÍCH / BA ĐỒNG ĐỘI",
    location: "Kon Tum"
  },
  {
    url: "https://files.catbox.moe/wfs3cy.jpg",
    title: "Giải bảy - Tranh cúp Tag Fishing lần 1",
    award: "GIẢI BẢY",
    location: "Hoa Gia Thành"
  },
  {
    url: "https://files.catbox.moe/cr6kzf.jpg",
    title: "Giải nhì - CLB Thanh xe tải",
    award: "GIẢI NHÌ",
    location: "CLB Thanh Xe Tải"
  },
  {
    url: "https://files.catbox.moe/yiuwy1.jpg",
    title: "Giải ba - Tranh cup SAPHAM 2023",
    award: "GIẢI BA",
    location: "Hồ câu SAPHAM"
  },
  {
    url: "https://files.catbox.moe/ht9rvj.jpg",
    title: "Giải bảy - Giải câu Pro Fishing Year End 2023",
    award: "GIẢI BẢY",
    location: "Pro Fishing Year End 2023"
  },
  {
    url: "https://files.catbox.moe/mmzmei.jpg",
    title: "Giải năm - Tranh cúp VietNam Fishing Gear Expo 2023",
    award: "GIẢI NĂM",
    location: "Hoa Gia Thành"
  },
  {
    url: "https://files.catbox.moe/ngood1.jpg",
    title: "Giải nhất - Giải câu ra mắt team Lãng Tử CLB Thanh Xe Tải",
    award: "GIẢI NHẤT",
    location: "CLB Thanh Xe Tải"
  },
  {
    url: "https://files.catbox.moe/oscm7c.jpg",
    title: "Giải ba - Giải game cá phi hồ câu Hai Đẩu ",
    award: "GIẢI BA",
    location: "Hồ câu Hai Đẩu"
  },
  {
    url: "https://files.catbox.moe/ao4sch.png",
    title: "Giải nhất - Tranh cúp LaoMa Fishing lần 1",
    award: "GIẢI NHẤT",
    location: "LaoMa Fishing"
  },
  {
    url: "https://files.catbox.moe/mtsg5f.jpg",
    title: "Vô địch - Giải câu cá quốc tế FLc 2019 lần 2",
    award: "VÔ ĐỊCH",
    location: "FLC Quy Nhơn"
  },
  {
    url: "https://files.catbox.moe/4nnvil.jpg",
    title: "Giải bảy - Giải vô địch cúp các câu lạc bộ câu cá toàn quốc 2022",
    award: "GIẢI BẢY",
    location: "Đồng Nai"
  },
  {
    url: "https://files.catbox.moe/6ypkhd.jpg",
    title: "Giải năm - CLB cần tay đất thủ",
    award: "GIẢI NĂM",
    location: "CLb Cần Tay Đất Thủ"
  },
  {
    url: "https://files.catbox.moe/vxefsh.jpg",
    title: "Giải năm - Giải tranh cúp Midi Quốc Gia",
    award: "GIẢI NĂM",
    location: "Hà Nội"
  },
  {
    url: "https://files.catbox.moe/r606h2.jpg",
    title: "Giải tư - Giải bắc nam sum họp",
    award: "GIẢI TƯ",
    location: "Đồng Nai"
  },
  {
    url: "https://files.catbox.moe/u85pbs.jpg",
    title: "Giải ba - Tranh cup Bình Định mở rộng",
    award: "GIẢI BA",
    location: "Vĩnh Thạnh, Bình Định"
  },
  {
    url: "https://files.catbox.moe/432rd5.jpg",
    title: "Giải khuyến khích - Giải vô địch quốc gia 2022",
    award: "GIẢI KHUYẾN KHÍCH",
    location: "Đồng Nai"
  },
  {
    url: "https://files.catbox.moe/8ozcs3.jpg",
    title: "Giải nhất - Tranh cup Hoa Gia Thành lần thứ XI",
    award: "GIẢI NHẤT",
    location: "Hoa Gia Thành"
  },
  {
    url: "https://files.catbox.moe/ru7c62.jpg",
    title: "Giải ba - Giải câu cá mừng xuân Shop Tâm Câu",
    award: "GIẢI BA",
    location: "Shop Tâm Câu"
  },
  {
    url: "https://files.catbox.moe/nrzvus.jpg",
    title: "Giải nhất - Giải Koi - Cobra Bà Rịa Vũng Tàu",
    award: "GIẢI NHẤT",
    location: "Vũng Tàu"
  },
  {
    url: "https://files.catbox.moe/6r0vs5.jpg",
    title: "Giải nhất - Test hồ câu phi Chì lá Farm",
    award: "GIẢI NHẤT",
    location: "Chì Lá Farm"
  }
];



// --- PRODUCT CATALOG DATA ---

export const CATEGORIES = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'rods', label: 'Cần Câu' },
  { id: 'floats', label: 'Phao & Trục' },
  { id: 'baits', label: 'Tinh Mùi & Mồi' },
  { id: 'accessories', label: 'Phụ Kiện' },
];

const RAW_ITEMS = [
  {
  id: 1,
  category: 'baits',
  name: 'MỒI CÂU NGỰ LỘ',
  label: 'Mồi câu',
  description: 'Mồi câu Ngự Lộ – hương dẫn cá mạnh, độ hòa tan tốt, phù hợp nhiều loại địa hình và thời điểm câu.',
  image: 'https://files.catbox.moe/k8tmi6.jpg',
  badge: 'Best Seller',
  badgeColor: 'bg-yellow-500'
},
{
  id: 2,
  category: 'baits',
  name: 'CỐT PHI ĐẬM ĐẶC',
  label: 'Phụ gia câu cá',
  description: 'Cốt Phi đậm đặc 100ml – tăng hiệu quả dụ cá, chuyên dùng cho cá Phi lớn và ổn định trong mọi môi trường nước ngọt.',
  image: 'https://files.catbox.moe/5xqg3i.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 3,
  category: 'baits',
  name: 'CAO PHI ĐẬM ĐẶC',
  label: 'Phụ gia câu cá',
  description: 'Cao Phi đậm đặc 100ml – chuyên dụ cá Phi lớn, tăng hiệu quả kích ăn và ổn định trong mọi môi trường nước ngọt.',
  image: 'https://files.catbox.moe/jlsptu.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 4,
  category: 'baits',
  name: 'TÔM NAM CỰC TRÂU ĐIÊN 150G',
  label: 'Bột tôm dẫn dụ',
  description: 'Bột tôm Nam Cực Trâu Điên 150g – nguyên liệu tuyển chọn chuẩn Đài Loan, giữ vị tươi, mùi thơm mạnh giúp dẫn dụ cá nhanh và tăng độ đạm cho bài mồi. Kết hợp tốt với các loại mồi khác.',
  image: 'https://files.catbox.moe/qjma2w.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 5,
  category: 'baits',
  name: 'TRỨNG SỮA SIÊU CẤP TRÂU ĐIÊN',
  label: 'Phụ gia dụ cá',
  description: 'Trứng Sữa Siêu Cấp Trâu Điên – mùi thơm béo ngọt đặc trưng, dẫn dụ mạnh nhiều loại cá như chép, phi, trôi, trắm, mè. Hiệu quả trong mọi điều kiện thời tiết.',
  image: 'https://files.catbox.moe/776ytl.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 6,
  category: 'baits',
  name: 'CHÉP MỘT CHAI 100ml',
  label: 'Phụ gia dụ cá chép',
  description: 'Chép Một Chai 100ml – phụ gia đơn giản, hiệu quả, dễ dùng. Pha 5–10ml cùng mồi chép hạt hoặc 500g cám, trộn thêm bột tạo rong để tăng độ hấp dẫn khi câu và xả ổ.',
  image: 'https://files.catbox.moe/nqewwi.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 7,
  category: 'baits',
  name: 'RÔ RÂU PHI',
  label: 'Tinh mùi dẫn dụ',
  description: 'Tinh mùi Rô Râu Phi – chuyên dùng cho các loại cá rô và phi, chỉ cần nhỏ 5–10 giọt cho 300g mồi để tăng hiệu quả dẫn dụ.',
  image: 'https://files.catbox.moe/7c2rw9.jpg',
  badge: 'Hot',
  badgeColor: 'bg-red-600'
},
{
  id: 8,
  category: 'baits',
  name: 'NƯỚC ĐEN 101',
  label: 'Phụ gia nước đen',
  description: 'Nước Đen 101 – dung dịch hỗ trợ tạo màu nước, ổn định ổ câu và tăng khả năng gom cá khi sử dụng chung với các loại mồi nền.',
  image: 'https://files.catbox.moe/hzxxbd.jpg',
  badge: 'New',
  badgeColor: 'bg-green-600'
},
{
  id: 9,
  category: 'floats',
  name: 'TRỤC QINGLONG 1998 - 50M',
  label: 'Cước câu kỷ niệm',
  description: 'Phiên bản QingLong 1998 – cước nylon siêu cường lực Nhật Bản, màu nâu, mềm trơn ít xoăn, chìm nhanh, chống ma sát gấp 20 lần, chịu tải lớn và chống tia UV, giữ chất lượng ổn định qua nhiều lần sử dụng.',
  image: 'https://files.catbox.moe/2srbbh.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 10,
  category: 'baits',
  name: 'SÉT 4 CHAI CHUYÊN CHÉP THỤT',
  label: 'Combo phụ gia',
  description: 'Combo 4 chai gồm Đường Đen AQiF, Tương Sữa AQiF, Bơ Sữa 69 và Mật Khoai GW. Phù hợp mọi loại hình câu, hiệu quả với cá lớn, cá nhát; thành phần tự nhiên an toàn cho cá và người dùng.',
  image: 'https://files.catbox.moe/t4fhqs.png',
  badge: 'Best Seller',
  badgeColor: 'bg-yellow-500'
},
{
  id: 11,
  category: 'floats',
  name: 'THẺO DÂY MRT - LƯỠI SZCHANGE',
  label: 'Thẻo câu công nghệ',
  description: 'Thẻo Dây MRT - Lưỡi szchange – làm theo thông số chuẩn, độ đồng đều cao, độ bền ổn định. Phù hợp nhiều size từ #0 đến #1.2, tiện dụng cho câu hồ dịch vụ và tự nhiên.',
  image: 'https://files.catbox.moe/diz9g3.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 12,
  category: 'floats',
  name: 'THẺO CARBON NHẬT - LƯỠI TITAN KING',
  label: 'Thẻo câu cao cấp',
  description: 'Thẻo carbon Nhật kết hợp lưỡi Titan King – độ bền cao, sắc bén, chống giãn, chịu tải tốt. Đo ni chuẩn giúp ổn định khi câu hồ dịch vụ và tự nhiên.',
  image: 'https://files.catbox.moe/pu7zkc.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 13,
  category: 'accessories',
  name: 'GÁC CẦN & CÁN VỢT RS HUYỀN VŨ 2M1',
  label: 'Phụ kiện cán vợt – gác cần',
  description: 'Combo cán vợt và gác cần RS Huyền Vũ 2m1 – carbon 40T, độ cứng 20H, phù hợp câu tổng hợp và săn hàng. Bộ phụ kiện max level dành cho anh em dùng cần VuaKong.',
  image: 'https://files.catbox.moe/pu7zkc.jpg',
  badge: 'Hot',
  badgeColor: 'bg-red-600'
},
{
  id: 14,
  category: 'floats',
  name: 'PHAO NGHỊ ĐIỀU',
  label: 'Phao câu cao cấp',
  description: 'Phao Nghị Điều – thân phao nhẹ, độ nổi ổn định, chân phao cứng giúp truyền tín hiệu tốt khi thụt và câu tỉa. Phù hợp nhiều loại địa hình và kiểu câu.',
  image: 'https://files.catbox.moe/89nfba.jpg',
  badge: 'Limited',
  badgeColor: 'bg-blue-600'
},
{
  id: 15,
  category: 'baits',
  name: 'TẠO SỢI LÃO QUỶ',
  label: 'Phụ gia tạo sợi',
  description: 'Tạo Sợi Lão Quỷ – bột phụ gia từ trứng và lúa mì, giúp tăng độ kết dính, làm mồi chắc hơn, khó tan, dễ vê mồi vào lưỡi và tối ưu cho câu đài. Chỉ cần lượng nhỏ đã mang lại hiệu quả rõ rệt.',
  image: 'https://files.catbox.moe/vo2c8v.jpg',
  badge: 'New',
  badgeColor: 'bg-green-600'
},
{
  id: 16,
  category: 'accessories',
  name: 'ĐÈN SOI PHAO YUFU',
  label: 'Đèn soi phao',
  description: 'Đèn soi phao Yufu – ánh sáng mạnh, gom tia tốt, hỗ trợ quan sát phao rõ ràng khi câu đêm. Đi kèm bộ sạc tiện lợi.',
  image: 'https://files.catbox.moe/u1j459.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 17,
  category: 'rods',
  name: 'CẦN LONG CHIẾN CỰC – KINH ĐIỂN',
  label: 'Cần câu 5H cao cấp',
  description: 'Cần Long Chiến Cực 5H – trọng lượng nhẹ, bản 6m3 chỉ 184g nhưng tải cá lên đến 3500g. Carbon M40X + T1000G cho độ trợ lực cao, phù hợp câu dịch vụ, tự nhiên và thi đấu.',
  image: 'https://files.catbox.moe/ih787a.jpg',
  badge: 'Best Seller',
  badgeColor: 'bg-yellow-500'
},
{
  id: 18,
  category: 'accessories',
  name: 'KHAY MỒI PRO FISHING 2023',
  label: 'Khay mồi câu',
  description: 'Khay mồi Pro Fishing 2023 – thiết kế nhôm cao cấp kết hợp nhựa siêu bền, bề mặt rộng dễ trộn mồi, chống bám dính và tiện dụng cho mọi kiểu câu.',
  image: 'https://files.catbox.moe/v34y1d.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 19,
  category: 'accessories',
  name: 'BAO CẦN GUF 201',
  label: 'Bao đựng cần câu',
  description: 'Bao cần GUF 201 – chất liệu da PU kết hợp nhựa ABS cho độ bền cao, chống va đập, nhiều ngăn chứa tiện dụng và chân đứng chắc chắn cho mọi địa hình câu.',
  image: 'https://files.catbox.moe/sxmkhp.jpg',
  badge: 'Hot',
  badgeColor: 'bg-red-600'
},
{
  id: 20,
  category: 'accessories',
  name: 'HỘP ĐỰNG CẦN GUF 88',
  label: 'Hộp đựng cần cao cấp',
  description: 'Hộp đựng cần GUF 88 – chất liệu nhựa ABS cao cấp, cứng cáp và bền bỉ, thiết kế đứng vững chắc, bảo vệ cần tối đa khi di chuyển và sử dụng.',
  image: 'https://files.catbox.moe/l63hk4.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 21,
  category: 'baits',
  name: 'TƠ NHỆN – SPIDER POWER',
  label: 'Phụ gia tăng liên kết',
  description: 'Spider Power – bột tơ nhện hỗ trợ kết dính, giúp mồi đứng nước tốt hơn, tăng độ dẻo và giữ ổ lâu hơn. Phù hợp cho nhiều loại bài mồi và điều kiện câu.',
  image: 'https://files.catbox.moe/v6tah6.jpg',
  badge: 'New',
  badgeColor: 'bg-green-600'
},
{
  id: 22,
  category: 'floats',
  name: 'CƯỚC TRỤC BAZAN THI ĐẤU – THẾ HỆ MỚI',
  label: 'Dây trục thi đấu',
  description: 'Cước trục Bazan thi đấu – thế hệ mới với độ bền cao, độ mảnh chuẩn theo thông số Nhật Bản, chịu tải ổn định, thích hợp cho câu thi đấu và câu dịch vụ.',
  image: 'https://files.catbox.moe/kfzbjp.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 23,
  category: 'baits',
  name: 'HƯƠNG LIỆU LÃO QUỶ – TRỨNG SỮA & CHÉP DÂU',
  label: 'Tinh mùi dụ cá',
  description: 'Hương liệu Lão Quỷ – phiên bản Trứng Sữa và Chép Dâu, mùi mạnh, dẫn dụ nhanh, tăng hiệu quả gom cá trong hồ dịch vụ và tự nhiên.',
  image: 'https://files.catbox.moe/60uprk.jpg',
  badge: 'Hot',
  badgeColor: 'bg-red-600'
},
{
  id: 24,
  category: 'baits',
  name: '135 CHÉP MCS',
  label: 'Tinh mùi dụ chép',
  description: '135 Chép MCS – nước dụ mùi mạnh, hỗ trợ gom cá nhanh, đặc biệt hiệu quả với cá chép trong hồ dịch vụ và tự nhiên. Lắc đều trước khi sử dụng.',
  image: 'https://files.catbox.moe/9j36l4.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 25,
  category: 'rods',
  name: 'ĐÔNG ĐẠO PHI THIÊN',
  label: 'Cần câu cao cấp',
  description: 'Đông Đạo Phi Thiên – thiết kế họa tiết cổ phong, độ hoàn thiện cao, độ cứng mạnh, phù hợp câu tổng hợp và săn hàng với độ ổn định vượt trội.',
  image: 'https://files.catbox.moe/99en0x.jpg',
  badge: 'Limited',
  badgeColor: 'bg-blue-600'
},
{
  id: 26,
  category: 'rods',
  name: 'KHINH NGẠNH PHONG – CUỒNG LANG SUPER',
  label: 'Cần câu 5.5H',
  description: 'Cần Cuồng Lang Super – độ cứng 5.5H, tải cá tối đa 2200g. Vật liệu 46T + M40X + T1100 siêu nhẹ, bản 4m5 chỉ 87g, trợ lực mạnh và độ bền cao.',
  image: 'https://files.catbox.moe/r837he.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
},
{
  id: 27,
  category: 'baits',
  name: 'BỘT SỮA NON',
  label: 'Phụ gia sữa',
  description: 'Bột sữa non – mùi sữa đậm, giúp tăng độ hấp dẫn và tạo mồi mềm dẻo hơn. Dùng bổ sung vào các bài mồi để tăng hiệu quả gom cá.',
  image: 'https://files.catbox.moe/tf9kre.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 28,
  category: 'floats',
  name: 'PHAO CỎ THỦ CÔNG LƯƠNG THỊNH – 3 CÂY',
  label: 'Phao thủ công',
  description: 'Bộ 3 phao cỏ thủ công Lương Thịnh – thân phao nhẹ, nổi ổn định, chân phao cứng truyền tín hiệu tốt, phù hợp câu thẻo nhỏ và câu tỉa chính xác.',
  image: 'https://files.catbox.moe/6iwuck.jpg',
  badge: null,
  badgeColor: ''
},
{
  id: 26,
  category: 'rods',
  name: 'CẦN CƯỜNG LANG SUPER 5.5H',
  label: 'Cần câu 5.5H',
  description: 'Cường Lang Super – độ cứng 5.5H, vật liệu 46T + M40X + T1100, tải cá tối đa 2200g. Phiên bản 4m5 chỉ nặng 87g, trợ lực tốt và độ bền cao.',
  image: 'https://files.catbox.moe/r837he.jpg',
  badge: 'Premium',
  badgeColor: 'bg-purple-600'
}






];

// Export items without duplication
export const CATALOG_ITEMS = RAW_ITEMS;
