import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const featuredSets = [
  {
    main: '/images/common/covers-bg.webp',
    sides: [
      '/images/covers/side1-1.webp',
      '/images/covers/side1-2.webp',
      '/images/covers/side1-3.webp',
    ],
  },
  {
    main: '/images/covers/main2.webp',
    sides: [
      '/images/covers/side2-1.webp',
      '/images/covers/side2-2.webp',
      '/images/covers/side2-3.webp',
    ],
  },
  {
    main: '/images/covers/main3.webp',
    sides: [
      '/images/covers/side3-1.webp',
      '/images/covers/side3-2.webp',
      '/images/covers/side3-3.webp',
    ],
  },
  {
    main: '/images/covers/main4.webp',
    sides: [
      '/images/covers/side4-1.webp',
      '/images/covers/side4-2.webp',
      '/images/covers/side4-3.webp',
    ],
  },
];

const otherCovers = [
  '/images/covers/other1.webp',
  '/images/covers/other2.webp',
  '/images/covers/other3.webp',
  '/images/covers/other4.webp',
  '/images/covers/other5.webp',
  '/images/covers/other6.webp',
  '/images/covers/other7.webp',
  '/images/covers/other8.webp',
  '/images/covers/other9.webp',
  '/images/covers/other10.webp',
  '/images/covers/other11.webp',
  '/images/covers/main4.webp',
];

// Build a flat array of all images for the lightbox
function getAllImages() {
  const images = [];
  featuredSets.forEach(set => {
    images.push(set.main);
    set.sides.forEach(s => images.push(s));
  });
  otherCovers.forEach(src => images.push(src));
  return images;
}

const allImages = getAllImages();

export default function CoversPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.utils.toArray('.gallery-grid__item, .cover-featured__row').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % allImages.length);
    if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const openLightbox = (src) => {
    const idx = allImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev + 1) % allImages.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">Cover Art Designs</h1>
        <p className="project-page__subtitle">Cover Art designs done for clients.</p>
      </div>

      <div className="cover-featured">
        {featuredSets.map((set, i) => (
          <div className="cover-featured__row" key={i}>
            <div className="cover-featured__main" onClick={() => openLightbox(set.main)} style={{ cursor: 'pointer' }}>
              <img loading="lazy" src={set.main} alt="" />
            </div>
            <div className="cover-featured__side">
              {set.sides.map((src, j) => (
                <div className="cover-featured__side-img" key={j} onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
                  <img loading="lazy" src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="project-page__divider" />
      <h3 className="project-page__section-title">Other Covers</h3>
      <div className="gallery-grid">
        {otherCovers.map((src, i) => (
          <div className="gallery-grid__item" key={i} onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
            <img loading="lazy" src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['covers']} />

      {/* ── Lightbox Overlay ── */}
      {isOpen && (
        <div className="cover-lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="cover-lightbox__close" onClick={() => setLightboxIndex(null)} aria-label="Close">×</button>
          <button className="cover-lightbox__arrow cover-lightbox__arrow--left" onClick={goPrev} aria-label="Previous">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="cover-lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={allImages[lightboxIndex]} alt="" />
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
