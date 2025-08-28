import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useLazyComponent';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = '/placeholder.svg',
  priority = false,
  className,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');
  const imageRef = useRef<HTMLImageElement>(null);
  
  const isInView = useIntersectionObserver(imageRef, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  React.useEffect(() => {
    if ((isInView || priority) && !imageSrc) {
      setImageSrc(src);
    }
  }, [isInView, priority, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <div ref={imageRef} className={`relative ${className || ''}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      {imageSrc && (
        <img
          src={hasError ? fallbackSrc : imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className || ''}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;