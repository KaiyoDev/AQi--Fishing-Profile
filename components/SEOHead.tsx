import React from 'react';

const SEOHead: React.FC = () => {
  const websiteUrl = 'https://aqifishing.xyz';
  const logoUrl = 'https://sf-static.upanhlaylink.com/img/image_2025112870b76caa1110a18c06679b4a3e2e641d.jpg';
  
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "AQI Fishing",
    "description": "Chuyên đào tạo kỹ thuật câu cá, tư vấn trang bị và tổ chức giải đấu chuyên nghiệp",
    "image": logoUrl,
    "url": websiteUrl,
    "telephone": "0779456780",
    "email": "contact@aqifishing.xyz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "52 Trần Phú, TT. Gia Ray",
      "addressLocality": "Xuân Lộc",
      "addressRegion": "Đồng Nai",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.9294",
      "longitude": "107.2379"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/aqifishing",
      "https://instagram.com/aqifishing",
      "https://youtube.com/@aqifishing",
      "https://tiktok.com/@moicauaqi"
    ]
  };

  // Person Schema (CEO) - Enhanced for "Đặng Hoàng Huy Fishing"
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Đặng Hoàng Huy",
    "alternateName": ["Đặng Hoàng Huy Fishing", "AQI Fishing Đặng Hoàng Huy"],
    "jobTitle": "CEO & Founder, Pro Angler",
    "worksFor": {
      "@type": "Organization",
      "name": "AQI Fishing"
    },
    "description": "Đặng Hoàng Huy Fishing - Vô địch FLC 2019, 10+ năm kinh nghiệm, 50+ danh hiệu. Chuyên gia đào tạo kỹ thuật câu cá chuyên nghiệp. AQI Fishing Đặng Hoàng Huy là chuyên gia hàng đầu về câu đài và câu game tại Việt Nam.",
    "image": "https://sf-static.upanhlaylink.com/img/image_20251128c103edf26845210671d661a153b4a171.jpg",
    "url": websiteUrl,
    "sameAs": [
      "https://facebook.com/aqifishing",
      "https://instagram.com/aqifishing",
      "https://youtube.com/@aqifishing"
    ],
    "knowsAbout": [
      "AQI Fishing",
      "Đặng Hoàng Huy Fishing",
      "Câu cá chuyên nghiệp",
      "Kỹ thuật câu đài",
      "Kỹ thuật câu game",
      "Huấn luyện câu cá",
      "Tổ chức giải đấu câu cá",
      "Pro Angler",
      "Chuyên gia câu cá"
    ],
    "award": [
      "Vô địch FLC 2019",
      "50+ danh hiệu câu cá",
      "Giải nhất nhiều giải đấu câu cá"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Pro Angler & CEO",
      "occupationLocation": {
        "@type": "City",
        "name": "Xuân Lộc, Đồng Nai"
      }
    }
  };

  // Organization Schema - Enhanced
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AQI Fishing",
    "alternateName": ["AQI Fishing Đặng Hoàng Huy", "Đặng Hoàng Huy Fishing"],
    "url": websiteUrl,
    "logo": logoUrl,
    "description": "AQI Fishing - Đặng Hoàng Huy Fishing: Chuyên đào tạo kỹ thuật câu cá, tư vấn trang bị và tổ chức giải đấu chuyên nghiệp. Đặng Hoàng Huy Fishing là chuyên gia hàng đầu về câu đài và câu game tại Việt Nam.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Đặng Hoàng Huy"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0779456780",
      "contactType": "customer service",
      "email": "contact@aqifishing.xyz",
      "areaServed": "VN",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://facebook.com/aqifishing",
      "https://instagram.com/aqifishing",
      "https://youtube.com/@aqifishing",
      "https://tiktok.com/@moicauaqi"
    ],
    "keywords": "AQI Fishing, Đặng Hoàng Huy Fishing, AQI Fishing Đặng Hoàng Huy, câu cá chuyên nghiệp, kỹ thuật câu cá, pro angler"
  };

  // Website Schema - For Google to understand the site structure
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AQI Fishing - Đặng Hoàng Huy Fishing",
    "alternateName": ["AQI Fishing Đặng Hoàng Huy", "Đặng Hoàng Huy Fishing"],
    "url": websiteUrl,
    "description": "AQI Fishing - Đặng Hoàng Huy Fishing: Chuyên gia câu cá chuyên nghiệp, vô địch FLC 2019, 10+ năm kinh nghiệm. Đào tạo kỹ thuật câu đài và câu game.",
    "publisher": {
      "@type": "Organization",
      "name": "AQI Fishing",
      "logo": logoUrl
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${websiteUrl}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Article Schema - For Google to extract article content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AQI Fishing - Đặng Hoàng Huy Fishing: Hành Trình Đam Mê & Bản Lĩnh Cần Thủ",
    "alternativeHeadline": "Đặng Hoàng Huy Fishing - Chuyên Gia Câu Cá Chuyên Nghiệp",
    "description": "AQI Fishing - Đặng Hoàng Huy Fishing: Vô địch FLC 2019, 10+ năm kinh nghiệm, 50+ danh hiệu. Chuyên đào tạo kỹ thuật câu cá, tư vấn trang bị và tổ chức giải đấu. Đặng Hoàng Huy là chuyên gia hàng đầu về câu đài và câu game tại Việt Nam.",
    "image": "https://sf-static.upanhlaylink.com/img/image_20251128c103edf26845210671d661a153b4a171.jpg",
    "author": {
      "@type": "Person",
      "name": "Đặng Hoàng Huy",
      "alternateName": "Đặng Hoàng Huy Fishing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AQI Fishing",
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    },
    "datePublished": "2017-01-01",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${websiteUrl}#about`
    },
    "articleSection": "Giới thiệu",
    "keywords": "AQI Fishing, Đặng Hoàng Huy Fishing, AQI Fishing Đặng Hoàng Huy, câu cá chuyên nghiệp, vô địch FLC 2019, kỹ thuật câu cá, pro angler, chuyên gia câu cá",
    "articleBody": "AQI Fishing được thành lập bởi Đặng Hoàng Huy Fishing - một chuyên gia câu cá chuyên nghiệp với hơn 10 năm kinh nghiệm. Từ năm 2017, khi vừa tốt nghiệp đại học, Đặng Hoàng Huy đã chọn rẽ sang một con đường đầy thử thách: từ bỏ công việc văn phòng kế toán với mức lương ổn áp để theo đuổi đam mê thật sự với câu cá. Chỉ sau 2 năm miệt mài theo đuổi, Đặng Hoàng Huy chạm đến bước ngoặt lớn đầu tiên khi nâng cao chiếc cúp Vô địch FLC Toàn Quốc 2019. Đây là thành tích đáng tự hào của AQI Fishing và Đặng Hoàng Huy Fishing, khẳng định vị thế hàng đầu trong làng câu cá chuyên nghiệp tại Việt Nam."
  };

  // FAQPage Schema - For Google to extract snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "AQI Fishing là gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AQI Fishing là tổ chức chuyên đào tạo kỹ thuật câu cá chuyên nghiệp do Đặng Hoàng Huy - vô địch FLC 2019, 10+ năm kinh nghiệm, 50+ danh hiệu thành lập. AQI Fishing Đặng Hoàng Huy chuyên về câu đài và câu game."
        }
      },
      {
        "@type": "Question",
        "name": "Đặng Hoàng Huy Fishing là ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Đặng Hoàng Huy Fishing là chuyên gia câu cá chuyên nghiệp, vô địch FLC 2019, với hơn 10 năm kinh nghiệm và 50+ danh hiệu. Ông là CEO & Founder của AQI Fishing, chuyên đào tạo kỹ thuật câu đài và câu game tại Xuân Lộc, Đồng Nai."
        }
      },
      {
        "@type": "Question",
        "name": "AQI Fishing Đặng Hoàng Huy cung cấp dịch vụ gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AQI Fishing - Đặng Hoàng Huy Fishing cung cấp: Huấn luyện kỹ thuật câu cá chuyên nghiệp (Câu Đài & Câu Game), Tư vấn trang bị và setup dụng cụ, Tổ chức giải đấu câu cá chuyên nghiệp, Kết nối cộng đồng cần thủ."
        }
      },
      {
        "@type": "Question",
        "name": "Đặng Hoàng Huy đã đạt được những thành tích gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Đặng Hoàng Huy Fishing đã đạt được: Vô địch FLC 2019, 50+ danh hiệu trong các giải đấu câu cá, 10+ năm kinh nghiệm câu cá chuyên nghiệp, Giải nhất nhiều giải đấu lớn tại Việt Nam."
        }
      }
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang chủ",
        "item": websiteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Giới thiệu",
        "item": `${websiteUrl}#about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kỹ năng",
        "item": `${websiteUrl}#services`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Sản phẩm",
        "item": `${websiteUrl}#products`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Liên hệ",
        "item": `${websiteUrl}#contact`
      }
    ]
  };

  return (
    <>
      {/* LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Person Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Website Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* FAQPage Structured Data - For Google snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Article Structured Data - For Google to extract article content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
};

export default SEOHead;

