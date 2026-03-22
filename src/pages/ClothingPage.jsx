import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const clothingImages = [
  '/images/common/clothing-bg.png',
  '/images/clothing/cloth2.png',
  '/images/clothing/cloth3.png',
  '/images/clothing/cloth4.png',
  '/images/clothing/cloth5.png',
  '/images/clothing/cloth6.png',
  '/images/clothing/cloth7.png',
  '/images/clothing/cloth8.png',
  '/images/clothing/cloth9.png',
];

export default function ClothingPage() {
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

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">Clothing Designs</h1>
        <p className="project-page__subtitle">Clothing designs done for clients.</p>
      </div>

      <div className="clothing-grid">
        {clothingImages.map((src, i) => (
          <div className="clothing-grid__item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['clothing']} />
    </div>
  );
}
