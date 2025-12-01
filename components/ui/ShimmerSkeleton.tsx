import React from 'react';

interface ShimmerSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  variant?: 'rectangular' | 'circular' | 'text';
}

const ShimmerSkeleton: React.FC<ShimmerSkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'md',
  variant = 'rectangular'
}) => {
  const roundedClass = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }[rounded];

  const variantClass = {
    rectangular: '',
    circular: 'rounded-full',
    text: 'rounded'
  }[variant];

  const finalRounded = variant === 'circular' ? 'rounded-full' : roundedClass;

  return (
    <div
      className={`
        relative overflow-hidden bg-gray-200
        ${finalRounded}
        ${className}
      `}
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    >
      {/* Shimmer Effect - Vệt sáng quét từ trái sang phải */}
      <div
        className="absolute inset-0 animate-shimmer pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
    </div>
  );
};

export default ShimmerSkeleton;

