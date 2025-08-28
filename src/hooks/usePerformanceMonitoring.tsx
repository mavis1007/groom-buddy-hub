import { useEffect } from 'react';

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          // Log performance metrics (in production, send to analytics)
          console.log(`${entry.name}: ${entry.value || entry.duration}ms`);
          
          // You can send these to your analytics service
          // analytics.track('web_vital', {
          //   name: entry.name,
          //   value: entry.value,
          //   rating: entry.rating
          // });
        });
      });

      // Observe different performance metrics
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        observer.observe({ entryTypes: ['first-input-delay'] });
        observer.observe({ entryTypes: ['cumulative-layout-shift'] });
        observer.observe({ entryTypes: ['navigation'] });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        // Fallback for unsupported browsers
        console.warn('Performance monitoring not supported');
      }

      // Monitor resource loading
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          ttfb: perfData.responseStart - perfData.requestStart,
          download: perfData.responseEnd - perfData.responseStart,
          dom: perfData.domContentLoadedEventEnd - perfData.responseEnd,
          total: perfData.loadEventEnd - perfData.fetchStart
        };

        console.log('Performance Metrics:', metrics);
        
        // Track slow page loads
        if (metrics.total > 3000) {
          console.warn('Slow page load detected:', metrics.total + 'ms');
        }
      });

      return () => observer.disconnect();
    }
  }, []);
};

// Error tracking hook
export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
      // In production, send to error tracking service
      // errorTracker.captureException(event.error);
    };

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      // In production, send to error tracking service
      // errorTracker.captureException(event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handlePromiseRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handlePromiseRejection);
    };
  }, []);
};