import { useState, useEffect, useCallback } from 'react';

/**
 * Reusable Lightbox component for all project pages.
 * Pass `images` (flat array of src strings) and render children with `onImageClick`.
 *
 * Usage:
 *   const { lightbox, openLightbox } = useLightbox(allImagesArray);
 *   // attach onClick={() => openLightbox(src)} to every <img>
 *   // render {lightbox} at the bottom of your JSX
 */
export function useLightbox(images) {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;

  const openLightbox = useCallback((src) => {
    const idx = images.indexOf(src);
    setIndex(idx >= 0 ? idx : 0);
  }, [images]);

  const close = () => setIndex(null);
  const goNext = (e) => { e?.stopPropagation(); setIndex(prev => (prev + 1) % images.length); };
  const goPrev = (e) => { e?.stopPropagation(); setIndex(prev => (prev - 1 + images.length) % images.length); };

  // Keyboard nav
  const handleKey = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
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

  const lightbox = isOpen ? (
    <div className="cover-lightbox" onClick={close}>
      <button className="cover-lightbox__close" onClick={close} aria-label="Close">×</button>
      <button className="cover-lightbox__arrow cover-lightbox__arrow--left" onClick={goPrev} aria-label="Previous">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="cover-lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt="" />
      </div>
      <button className="cover-lightbox__arrow cover-lightbox__arrow--right" onClick={goNext} aria-label="Next">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    </div>
  ) : null;

  return { lightbox, openLightbox };
}
