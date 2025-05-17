import { useEffect, useState, useRef, useCallback } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  const observerCallback = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsIntersecting(true);
      // Optionally, unobserve after the first intersection if animation should only run once
      // if (elementRef.current) { // Check if current exists
      //   observer.unobserve(elementRef.current);
      // }
    }
    // Could add logic for when it leaves viewport if needed: else { setIsIntersecting(false); }
  }, []); // No dependencies, observer instance will be stable within its own useEffect

  useEffect(() => {
    // Ensure IntersectionObserver is available (for older browsers or SSR, though not an issue here)
    if (!('IntersectionObserver' in window)) {
      // console.warn('IntersectionObserver not supported, animations will not run.');
      setIsIntersecting(true); // Default to visible if not supported to prevent hidden content
      return;
    }

    const observer = new IntersectionObserver(observerCallback, options);
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      // No need to call observer.disconnect() here unless the hook is truly done permanently.
      // Unobserving the specific element is usually sufficient for component unmounts.
    };
  }, [observerCallback, options]); // Re-run if options or the callback itself changes (though callback is stable here)

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver; 