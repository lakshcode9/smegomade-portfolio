import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const heroImage = '/images/retrogradni/hero.webp';
const images = {
  konjBlack: '/images/retrogradni/konj-black.webp',
  typography: '/images/retrogradni/typography.webp',
  konjLogo: '/images/retrogradni/konj-logo.webp',
  obaBlack: '/images/retrogradni/oba-black.webp',
  crveno: '/images/retrogradni/crveno.webp',
  tvrdjava: '/images/retrogradni/tvrdjava.webp',
  rect2034: '/images/retrogradni/rect2034.webp',
  rect2033: '/images/retrogradni/rect2033.webp',
  konjLogoPng: '/images/retrogradni/konj-logo-final.webp',
  image88: '/images/retrogradni/image88.webp',
  rect2035: '/images/retrogradni/rect2035.webp',
  png2: '/images/retrogradni/spread.webp',
};

export default function RetrogradniPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.from('.case-study__hero-image', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.utils.toArray('.case-study__image-grid img, .case-study__full-width').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">Retrogradni</h1>
        <p className="project-page__subtitle">Brand visual identity.</p>
      </div>

      <div className="case-study__hero-image">
        <img loading="lazy" src={heroImage} alt="Retrogradni hero" />
      </div>

      <div className="case-study__description">
        <p>Retrogradni identity merges retro-futuristic chrome aesthetics with local symbolism from the city of Niš. The horse emblem references a well-known sculpture located in the city center, while the chrome typography draws inspiration from 80s and 90s visual culture.</p>
      </div>

      <p className="case-study__description" style={{ marginTop: '20px' }}>
        Chrome-inspired identity combining 80s/90s aesthetics with cultural symbolism of Niš.
      </p>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.image88} alt="Retrogradni emblem" />
        <img loading="lazy" src={images.konjBlack} alt="Horse on black" />
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.rect2035} alt="Retrogradni layout" />
        <img loading="lazy" src={images.typography} alt="Typography" />
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.konjLogo} alt="Konj logo" />
        <img loading="lazy" src={images.obaBlack} alt="Both on black" />
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.crveno} alt="Red variant" />
        <img loading="lazy" src={images.tvrdjava} alt="Fortress" />
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.rect2034} alt="Application 1" />
        <img loading="lazy" src={images.rect2033} alt="Application 2" />
      </div>

      <div className="case-study__full-width">
        <img loading="lazy" src={images.png2} alt="Retrogradni full spread" />
      </div>

      <div className="case-study__logo-center">
        <img loading="lazy" src={images.konjLogoPng} alt="Retrogradni logo" />
      </div>
    </div>
  );
}
