import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

/*
 * Each clothing set has:
 *   main  – the flat-lay garment shot (shown large, left)
 *   mockups – 2 lifestyle / model photos (stacked right)
 *
 * Structure matches the Figma wireframe exactly.
 */
const clothingSets = [
  {
    main: '/images/clothing/cloth2.png', // Fallback for main-1
    mockups: ['/images/clothing/mockups/mockup-1a.png', '/images/clothing/mockups/mockup-1b.png'],
  },
  {
    main: '/images/clothing/cloth3.png', // Fallback for main-2
    mockups: ['/images/clothing/mockups/mockup-2a.png', '/images/clothing/mockups/mockup-2b.png'],
  },
  {
    main: '/images/clothing/cloth4.png', // Fallback for main-3
    mockups: ['/images/clothing/mockups/mockup-3a.png', '/images/clothing/mockups/mockup-3b.png'],
  },
  {
    main: '/images/clothing/main-4.png',
    mockups: ['/images/clothing/mockups/mockup-4a.png', '/images/clothing/mockups/mockup-4b.png'],
  },
  {
    main: '/images/clothing/main-5.png',
    mockups: ['/images/clothing/mockups/mockup-5a.png', '/images/clothing/mockups/mockup-5b.png'],
  },
  {
    main: '/images/clothing/main-6.png',
    mockups: ['/images/clothing/mockups/mockup-6a.png', '/images/clothing/mockups/mockup-6b.png'],
  },
  {
    main: '/images/clothing/main-7.png', 
    mockups: ['/images/clothing/mockups/mockup-1a.png', '/images/clothing/mockups/mockup-1b.png'],
  },
  {
    main: '/images/clothing/main-8.png', 
    mockups: ['/images/clothing/mockups/mockup-1a.png', '/images/clothing/mockups/mockup-1b.png'],
  },
  {
    main: '/images/clothing/main-9.png', 
    mockups: ['/images/clothing/mockups/mockup-1a.png', '/images/clothing/mockups/mockup-1b.png'],
  },
];

// The grid only displays the main flat-lay garment for each set
const gridImages = clothingSets.map(s => s.main);

export default function ClothingPage() {
  const [activeSet, setActiveSet] = useState(null);
  const isOpen = activeSet !== null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.utils.toArray('.clothing-grid__item').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Keyboard nav
  const handleKey = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') setActiveSet(null);
    if (e.key === 'ArrowRight') setActiveSet(prev => (prev + 1) % clothingSets.length);
    if (e.key === 'ArrowLeft') setActiveSet(prev => (prev - 1 + clothingSets.length) % clothingSets.length);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const openSet = (index) => {
    setActiveSet(index);
  };

  const goNext = (e) => { e.stopPropagation(); setActiveSet(prev => (prev + 1) % clothingSets.length); };
  const goPrev = (e) => { e.stopPropagation(); setActiveSet(prev => (prev - 1 + clothingSets.length) % clothingSets.length); };

  const currentSet = isOpen ? clothingSets[activeSet] : null;

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">Clothing Designs</h1>
        <p className="project-page__subtitle">Clothing designs done for clients.</p>
      </div>

      <div className="clothing-grid">
        {gridImages.map((src, i) => (
          <div className="clothing-grid__item" key={i} onClick={() => openSet(i)} style={{ cursor: 'pointer' }}>
            <img loading="lazy" src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['clothing']} />

      {/* ── Clothing Lightbox (Figma layout: main left + 2 mockups right) ── */}
      {isOpen && currentSet && (
        <div className="clothing-lightbox" onClick={() => setActiveSet(null)}>
          <button className="cover-lightbox__close" onClick={() => setActiveSet(null)} aria-label="Close">×</button>

          <button className="cover-lightbox__arrow cover-lightbox__arrow--left" onClick={goPrev} aria-label="Previous">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="clothing-lightbox__layout" onClick={(e) => e.stopPropagation()}>
            <div className="clothing-lightbox__main">
              <img src={currentSet.main} alt="" />
            </div>
            <div className="clothing-lightbox__mockups">
              <div className="clothing-lightbox__mockup">
                <img src={currentSet.mockups[0]} alt="" />
              </div>
              <div className="clothing-lightbox__mockup">
                <img src={currentSet.mockups[1]} alt="" />
              </div>
            </div>
          </div>

          <button className="cover-lightbox__arrow cover-lightbox__arrow--right" onClick={goNext} aria-label="Next">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
