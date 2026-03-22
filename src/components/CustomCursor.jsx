import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Do not run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    
    // Quick setter for high-performance following
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleInteraction = (e) => {
      // Find closest interactive element
      const isHovering = e.target.closest(
        'a, button, .work-feed__item, .branding__card, .gallery-grid__item, .poster-grid__item, .see-also__card'
      );
      
      if (isHovering) {
        cursor.classList.add('cursor--hover');
      } else {
        cursor.classList.remove('cursor--hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleInteraction);

    // Initial position sync to avoid starting at top-left
    window.addEventListener('mousemove', () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    }, { once: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleInteraction);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
}
