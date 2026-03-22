import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: '/images/two-dragons/hero.png',
  image81: '/images/two-dragons/image81.png',
  rect2030: '/images/two-dragons/rect2030.png',
  logoPanel: '/images/two-dragons/logo-panel.png',
  group750: '/images/two-dragons/group750.svg',
  group752: '/images/two-dragons/group752.svg',
  group751: '/images/two-dragons/group751.svg',
  vector6: '/images/two-dragons/vector6.png',
  vector7: '/images/two-dragons/vector7.png',
  vector8: '/images/two-dragons/vector8.png',
  dragonLogo: '/images/two-dragons/dragon-logo.svg',
};

export default function TwoDragonsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.project-page__title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-page__subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.from('.case-study__hero-image', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.utils.toArray('.case-study__image-grid img, .case-study__full-width, .two-dragons__logo-row img').forEach((el) => {
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
        <h1 className="project-page__title">2 DRAGONS</h1>
        <p className="project-page__subtitle">Branding and logo design</p>
      </div>

      <div className="case-study__hero-image">
        <img src={images.hero} alt="2 Dragons hero" />
      </div>

      <div className="case-study__description">
        <p>The Ouroboros is an ancient symbol of a creature eating its own tail, representing eternity, cycles, and infinite continuity. In traditional mythology, it embodies the idea of creation from destruction, constant renewal, and the endless loop of life. In the 2 Dragons logo, this concept is reimagined: instead of a single tail, the circular form ends in a second dragon head, symbolizing not just continuity, but limitless possibilities and endless choices in gaming.</p>
        <br />
        <p>The Ouroboros-inspired shape communicates that the world of gaming is ever-expanding, cyclical, and infinite, where every end is a new beginning, every strategy leads to new paths, and creativity never runs out. By combining the timeless Ouroboros with the dual-headed dragon, the logo conveys eternity, versatility, and the boundless potential of the gaming universe.</p>
      </div>

      <div className="case-study__image-grid">
        <img src={images.image81} alt="Dragon render" />
        <img src={images.rect2030} alt="Logo application" />
      </div>

      <div className="case-study__image-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '960px' }}>
        <img src={images.group750} alt="Logo row 1" />
        <img src={images.group752} alt="Logo row 2" />
        <img src={images.group751} alt="Logo row 3" />
      </div>

      <div className="case-study__image-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <img src={images.vector6} alt="Logo variant 1" />
        <img src={images.vector7} alt="Logo variant 2" />
        <img src={images.vector8} alt="Logo variant 3" />
      </div>

      <div className="case-study__logo-center">
        <img src={images.dragonLogo} alt="2 Dragons final logo" style={{ maxWidth: '200px' }} />
      </div>
    </div>
  );
}
