
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: 'translate-y-12 opacity-0 transition-all duration-1000 ease-out',
    fadeInLeft: '-translate-x-12 opacity-0 transition-all duration-1000 ease-out',
    fadeInRight: 'translate-x-12 opacity-0 transition-all duration-1000 ease-out',
    scaleIn: 'scale-90 opacity-0 transition-all duration-1000 ease-out'
  };

  return (
    <>
      <div
        ref={ref}
        className={`${animationClasses[animation]} ${className}`}
      >
        {children}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-in {
            transform: translate(0) scale(1) !important;
            opacity: 1 !important;
          }
        `
      }} />
    </>
  );
};

export default ScrollReveal;
