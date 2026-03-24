import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLightbox } from '../components/Lightbox';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const typoImages = [
  '/images/typography/typo1.webp',
  '/images/typography/typo2.webp',
  '/images/typography/typo3.webp',
  '/images/typography/typo4.webp',
  '/images/typography/typo5.webp',
  '/images/typography/typo6.webp',
  '/images/typography/typo7.webp',
  '/images/typography/typo8.webp',
  '/images/typography/typo9.webp',
  '/images/typography/typo10.webp',
  '/images/typography/typo11.webp',
  '/images/typography/typo12.webp',
  '/images/typography/typo13.webp',
  '/images/typography/typo14.webp',
  '/images/typography/typo15.webp',
  '/images/typography/typo16.webp',
  '/images/typography/typo17.webp',
  '/images/typography/typo18.webp',
  '/images/typography/typo19.webp',
  '/images/typography/typo20.webp',
  '/images/typography/typo21.webp',
  '/images/typography/typo22.webp',
  '/images/common/typography-bg.webp',
  '/images/typography/typo24.webp',
];

export default function TypographyPage() {
  const { lightbox, openLightbox } = useLightbox(typoImages);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.utils.toArray('.typo-grid__item').forEach((el, i) => {
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
        <h1 className="project-page__title">Typography Designs</h1>
        <p className="project-page__subtitle">Typography designs done for clients.</p>
      </div>

      <div className="typo-grid">
        {typoImages.map((src, i) => (
          <div className="typo-grid__item" key={i} onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
            <img loading="lazy" src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['typography']} />
      {lightbox}
    </div>
  );
}
