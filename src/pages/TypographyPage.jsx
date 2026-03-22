import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const typoImages = [
  '/images/typography/typo1.png',
  '/images/typography/typo2.png',
  '/images/typography/typo3.png',
  '/images/typography/typo4.png',
  '/images/typography/typo5.png',
  '/images/typography/typo6.png',
  '/images/typography/typo7.png',
  '/images/typography/typo8.png',
  '/images/typography/typo9.png',
  '/images/typography/typo10.png',
  '/images/typography/typo11.png',
  '/images/typography/typo12.png',
  '/images/typography/typo13.png',
  '/images/typography/typo14.png',
  '/images/typography/typo15.png',
  '/images/typography/typo16.png',
  '/images/typography/typo17.png',
  '/images/typography/typo18.png',
  '/images/typography/typo19.png',
  '/images/typography/typo20.png',
  '/images/typography/typo21.png',
  '/images/typography/typo22.png',
  '/images/common/typography-bg.png',
  '/images/typography/typo24.png',
];

export default function TypographyPage() {
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
          <div className="typo-grid__item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['typography']} />
    </div>
  );
}
