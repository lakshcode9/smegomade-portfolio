import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLightbox } from '../components/Lightbox';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const posterImages = [
  '/images/posters/poster1.webp',
  '/images/common/posters-bg.webp',
  '/images/posters/poster3.webp',
  '/images/posters/poster4.webp',
  '/images/posters/poster5.webp',
  '/images/posters/poster6.webp',
  '/images/common/posters-bg2.webp',
  '/images/posters/poster8.webp',
  '/images/posters/poster9.webp',
  '/images/posters/poster10.webp',
  '/images/posters/poster11.webp',
  '/images/posters/poster12.webp',
  '/images/posters/poster13.webp',
  '/images/posters/poster14.webp',
  '/images/posters/poster15.webp',
  '/images/posters/poster16.webp',
];

export default function PostersPage() {
  const { lightbox, openLightbox } = useLightbox(posterImages);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.utils.toArray('.poster-grid__item').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">Poster Designs</h1>
        <p className="project-page__subtitle">Selected poster works & visual storytelling</p>
      </div>

      <div className="poster-grid">
        {posterImages.map((src, i) => {
          const span3Indices = [3, 4, 11, 12];
          const span = span3Indices.includes(i) ? 3 : 2;
          return (
            <div
              className="poster-grid__item"
              key={i}
              style={{ gridColumn: `span ${span}`, cursor: 'pointer' }}
              onClick={() => openLightbox(src)}
            >
              <img loading="lazy" src={src} alt="" />
            </div>
          );
        })}
      </div>

      <SeeAlso exclude={['posters']} />
      {lightbox}
    </div>
  );
}
