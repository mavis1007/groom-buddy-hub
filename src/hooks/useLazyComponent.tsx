import { lazy, Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

// Generic lazy component loader with loading fallback
export function createLazyComponent<T extends React.ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunction);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback || <ComponentSkeleton />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Skeleton loader for components
const ComponentSkeleton = () => (
  <div className="w-full space-y-4 p-4">
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
    </div>
  </div>
);

// Image lazy loading hook
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(element);
    
    return () => observer.unobserve(element);
  }, [ref, options]);
  
  return isIntersecting;
}

import React from 'react';