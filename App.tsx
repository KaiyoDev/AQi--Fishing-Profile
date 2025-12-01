import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import FishingScrollProgress from './components/ui/FishingScrollProgress';
import SEOHead from './components/SEOHead';
import ShimmerSkeleton from './components/ui/ShimmerSkeleton';

// Code splitting: Lazy load heavy components
const Gallery = lazy(() => import('./components/Gallery'));
const Social = lazy(() => import('./components/Social'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component với Shimmer Skeleton
const SectionLoader = () => (
  <div className="min-h-screen bg-stone-50 py-24 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <div className="text-center mb-12 space-y-4">
        <ShimmerSkeleton width="200px" height="24px" className="mx-auto" />
        <ShimmerSkeleton width="300px" height="16px" className="mx-auto" />
      </div>
      
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <ShimmerSkeleton height="200px" rounded="lg" />
            <ShimmerSkeleton height="20px" />
            <ShimmerSkeleton height="16px" width="60%" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-aqi-red selection:text-white">
      {/* SEO Structured Data */}
      <SEOHead />
      
      {/* Custom Scrollbar */}
      <FishingScrollProgress />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        
        {/* Lazy loaded sections */}
        <Suspense fallback={<SectionLoader />}>
        <Gallery />
        <Social />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
      <Contact />
      </Suspense>
    </div>
  );
};

export default App;
