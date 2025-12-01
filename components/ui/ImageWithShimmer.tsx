import React, { useState } from 'react';
import ShimmerSkeleton from './ShimmerSkeleton';

interface ImageWithShimmerProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageWithShimmer: React.FC<ImageWithShimmerProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  return (
    <div className="relative w-full h-full">
      {/* Shimmer Skeleton - Hiển thị khi đang load */}
      {isLoading && !hasError && (
        <ShimmerSkeleton
          className={`absolute inset-0 ${skeletonClassName}`}
          rounded="none"
        />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ImageWithShimmer;

