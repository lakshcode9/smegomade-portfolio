import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: '/images/cold-minds/hero.png',
  cmLogo: '/images/cold-minds/cm-logo.png',
  image83: '/images/cold-minds/image83.png',
  gothic: '/images/cold-minds/gothic.svg',
  gothicAlt: '/images/cold-minds/gothic-alt.svg',
  rect2027: '/images/cold-minds/rect2027.png',
  rect2028: '/images/cold-minds/rect2028.png',
  rect2029: '/images/cold-minds/rect2029.png',
  coldminds1: '/images/cold-minds/coldminds1.png',
  rect2042: '/images/cold-minds/rect2042.png',
  rect2043: '/images/cold-minds/rect2043.png',
  rect2044: '/images/cold-minds/rect2044.png',
  image85: '/images/cold-minds/image85.png',
};

export default function ColdMindsPage() {
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
        <h1 className="project-page__title">COLD MINDS</h1>
        <p className="project-page__subtitle">Brand Identity & Apparel Design</p>
      </div>

      <div className="case-study__hero-image">
        <img src={images.hero} alt="Cold Minds hero" />
      </div>

      <div className="case-study__description">
        <p>Cold Minds explores the tension between emotional distance and raw street expression. The identity uses gothic letterforms and a monochrome palette to create a bold and timeless visual language.</p>
      </div>

      <div className="case-study__image-grid">
        <img src={images.image83} alt="Cold Minds product" />
        <img src={images.cmLogo} alt="Cold Minds logo" />
      </div>

      <div className="case-study__full-width">
        <img src={images.gothicAlt} alt="Gothic typography" />
      </div>

      <p className="case-study__description" style={{ fontWeight: 700, marginTop: '40px' }}>
        Primary gothic monogram designed for versatility across garments, labels and digital media.
      </p>

      <div className="case-study__image-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <img src={images.rect2027} alt="Apparel 1" />
        <img src={images.rect2028} alt="Apparel 2" />
        <img src={images.rect2029} alt="Apparel 3" />
      </div>

      <p className="case-study__description" style={{ fontWeight: 700, marginTop: '40px' }}>
        GRAPHIC T-SHIRT DESIGN
      </p>

      <div className="case-study__image-grid">
        <img src={images.coldminds1} alt="T-shirt design" />
        <img src={images.rect2042} alt="T-shirt mockup" />
      </div>

      <div className="case-study__full-width">
        <img src={images.rect2043} alt="Lookbook banner" />
      </div>

      <div className="case-study__image-grid">
        <img src={images.rect2044} alt="Lookbook 1" />
        <img src={images.image85} alt="Lookbook 2" />
      </div>

      <div className="case-study__logo-center">
        <img src={images.cmLogo} alt="Cold Minds logo" />
      </div>
    </div>
  );
}
