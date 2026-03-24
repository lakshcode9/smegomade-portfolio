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
    main: '/images/common/clothing-bg.webp',
    mockups: ['/images/clothing/cloth2.webp', '/images/clothing/cloth3.webp'],
  },
  {
    main: '/images/clothing/cloth4.webp',
    mockups: ['/images/clothing/cloth5.webp', '/images/clothing/cloth6.webp'],
  },
  {
    main: '/images/clothing/cloth7.webp',
    mockups: ['/images/clothing/cloth8.webp', '/images/clothing/cloth9.webp'],
  },
];

// Also keep flat list for the grid display
const allGridImages = clothingSets.flatMap(s => [s.main, ...s.mockups]);

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

  const openSet = (imgSrc) => {
    // Find which set this image belongs to
    const idx = clothingSets.findIndex(s => s.main === imgSrc || s.mockups.includes(imgSrc));
    setActiveSet(idx >= 0 ? idx : 0);
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
        {allGridImages.map((src, i) => (
          <div className="clothing-grid__item" key={i} onClick={() => openSet(src)} style={{ cursor: 'pointer' }}>
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
