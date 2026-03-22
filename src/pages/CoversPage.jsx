import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SeeAlso from './SeeAlso';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const featuredSets = [
  {
    main: '/images/common/covers-bg.png',
    sides: [
      '/images/covers/side1-1.png',
      '/images/covers/side1-2.png',
      '/images/covers/side1-3.png',
    ],
  },
  {
    main: '/images/covers/main2.png',
    sides: [
      '/images/covers/side2-1.png',
      '/images/covers/side2-2.png',
      '/images/covers/side2-3.png',
    ],
  },
  {
    main: '/images/covers/main3.png',
    sides: [
      '/images/covers/side3-1.png',
      '/images/covers/side3-2.png',
      '/images/covers/side3-3.png',
    ],
  },
  {
    main: '/images/covers/main4.png',
    sides: [
      '/images/covers/side4-1.png',
      '/images/covers/side4-2.png',
      '/images/covers/side4-3.png',
    ],
  },
];

const otherCovers = [
  '/images/covers/other1.png',
  '/images/covers/other2.png',
  '/images/covers/other3.png',
  '/images/covers/other4.png',
  '/images/covers/other5.png',
  '/images/covers/other6.png',
  '/images/covers/other7.png',
  '/images/covers/other8.png',
  '/images/covers/other9.png',
  '/images/covers/other10.png',
  '/images/covers/other11.png',
  '/images/covers/main4.png',
];

export default function CoversPage() {
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
            <div className="cover-featured__main">
              <img src={set.main} alt="" />
            </div>
            <div className="cover-featured__side">
              {set.sides.map((src, j) => (
                <div className="cover-featured__side-img" key={j}>
                  <img src={src} alt="" />
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
          <div className="gallery-grid__item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <SeeAlso exclude={['covers']} />
    </div>
  );
}
