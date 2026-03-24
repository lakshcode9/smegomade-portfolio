import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLightbox } from '../components/Lightbox';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: '/images/cold-minds/hero.webp',
  cmLogo: '/images/cold-minds/cm-logo.webp',
  image83: '/images/cold-minds/image83.webp',
  gothic: '/images/cold-minds/gothic.svg',
  gothicAlt: '/images/cold-minds/gothic-alt.svg',
  rect2027: '/images/cold-minds/rect2027.webp',
  rect2028: '/images/cold-minds/rect2028.webp',
  rect2029: '/images/cold-minds/rect2029.webp',
  coldminds1: '/images/cold-minds/coldminds1.webp',
  rect2042: '/images/cold-minds/rect2042.webp',
  rect2043: '/images/cold-minds/rect2043.webp',
  rect2044: '/images/cold-minds/rect2044.webp',
  image85: '/images/cold-minds/image85.webp',
};

const allImages = Object.values(images);

export default function ColdMindsPage() {
  const { lightbox, openLightbox } = useLightbox(allImages);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.from('.case-study__hero-image', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.utils.toArray('.grid-3-col img, .case-study__full-width img, .grid-split-narrow img, .case-study__image-grid img').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 92%' },
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const clickable = (src) => ({ onClick: () => openLightbox(src), style: { cursor: 'pointer' } });

  return (
    <div className="project-page">
      <Link to="/" className="project-page__back">←Back</Link>
      <div className="project-page__header">
        <h1 className="project-page__title">COLD MINDS</h1>
        <p className="project-page__subtitle">Brand Identity & Apparel Design</p>
      </div>

      <div className="case-study__hero-image" {...clickable(images.hero)}>
        <img loading="lazy" src={images.hero} alt="Cold Minds hero" />
      </div>

      <div className="case-study__description">
        <p>Cold Minds explores the tension between emotional distance and raw street expression. The identity uses gothic letterforms and a monochrome palette to create a bold and timeless visual language.</p>
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.image83} alt="Cold Minds product" {...clickable(images.image83)} />
        <img loading="lazy" src={images.cmLogo} alt="Cold Minds logo" {...clickable(images.cmLogo)} />
      </div>

      <div className="case-study__full-width" {...clickable(images.gothicAlt)}>
        <img loading="lazy" src={images.gothicAlt} alt="Gothic typography" />
      </div>

      {/* 3-Column Apparel Grid */}
      <div className="grid-3-col">
        <img loading="lazy" src={images.rect2027} alt="Apparel 1" {...clickable(images.rect2027)} />
        <img loading="lazy" src={images.rect2028} alt="Apparel 2" {...clickable(images.rect2028)} />
        <img loading="lazy" src={images.rect2029} alt="Apparel 3" {...clickable(images.rect2029)} />
      </div>

      <p className="case-study__description" style={{ fontWeight: 700, marginTop: '80px', textAlign: 'center' }}>
        GRAPHIC T-SHIRT DESIGN
      </p>

      {/* Split layout: Large square left, column of 2 right */}
      <div className="grid-split-narrow" style={{ marginTop: '40px' }}>
        <img loading="lazy" src={images.coldminds1} alt="T-shirt design" {...clickable(images.coldminds1)} />
        <img loading="lazy" src={images.rect2042} alt="T-shirt mockup" {...clickable(images.rect2042)} />
      </div>

      <div className="case-study__full-width" style={{ marginTop: '20px' }} {...clickable(images.rect2043)}>
        <img loading="lazy" src={images.rect2043} alt="Lookbook banner" />
      </div>

      <div className="case-study__image-grid">
        <img loading="lazy" src={images.rect2044} alt="Lookbook 1" {...clickable(images.rect2044)} />
        <img loading="lazy" src={images.image85} alt="Lookbook 2" {...clickable(images.image85)} />
      </div>

      <div className="case-study__footer-logo" {...clickable(images.cmLogo)}>
        <img loading="lazy" src={images.cmLogo} alt="Cold Minds logo" />
      </div>

      {lightbox}
    </div>
  );
}
