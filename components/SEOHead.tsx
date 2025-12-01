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

  // Person Schema (CEO)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Đặng Hoàng Huy",
    "jobTitle": "CEO & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "AQI Fishing"
    },
    "description": "Vô địch FLC 2019, 10+ năm kinh nghiệm, 50+ danh hiệu. Chuyên gia đào tạo kỹ thuật câu cá chuyên nghiệp.",
    "image": "https://sf-static.upanhlaylink.com/img/image_20251128c103edf26845210671d661a153b4a171.jpg",
    "url": websiteUrl,
    "sameAs": [
      "https://facebook.com/aqifishing",
      "https://instagram.com/aqifishing",
      "https://youtube.com/@aqifishing"
    ],
    "knowsAbout": [
      "Câu cá chuyên nghiệp",
      "Kỹ thuật câu đài",
      "Kỹ thuật câu game",
      "Huấn luyện câu cá",
      "Tổ chức giải đấu câu cá"
    ],
    "award": [
      "Vô địch FLC 2019",
      "50+ danh hiệu câu cá"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AQI Fishing",
    "url": websiteUrl,
    "logo": logoUrl,
    "description": "Chuyên đào tạo kỹ thuật câu cá, tư vấn trang bị và tổ chức giải đấu chuyên nghiệp",
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
    </>
  );
};

export default SEOHead;

