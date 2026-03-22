import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const posterImages = [
  '/images/posters/poster1.png',
  '/images/common/posters-bg.png',
  '/images/posters/poster3.png',
  '/images/posters/poster4.png',
  '/images/posters/poster5.png',
  '/images/posters/poster6.png',
  '/images/common/posters-bg2.png',
  '/images/posters/poster8.png',
  '/images/posters/poster9.png',
  '/images/posters/poster10.png',
  '/images/posters/poster11.png',
  '/images/posters/poster12.png',
  '/images/posters/poster13.png',
  '/images/posters/poster14.png',
  '/images/posters/poster15.png',
  '/images/posters/poster16.png',
];

export default function PostersPage() {
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
        {posterImages.map((src, i) => (
          <div className="poster-grid__item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['posters']} />
    </div>
  );
}
