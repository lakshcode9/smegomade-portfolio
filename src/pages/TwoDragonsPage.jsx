import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLightbox } from '../components/Lightbox';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: '/images/two-dragons/hero.webp',
  image81: '/images/two-dragons/image81.webp',
  rect2030: '/images/two-dragons/rect2030.webp',
  logoPanel: '/images/two-dragons/logo-panel.webp',
  group750: '/images/two-dragons/group750.svg',
  group752: '/images/two-dragons/group752.svg',
  group751: '/images/two-dragons/group751.svg',
  vector6: '/images/two-dragons/vector6.webp',
  vector7: '/images/two-dragons/vector7.webp',
  vector8: '/images/two-dragons/vector8.webp',
  dragonLogo: '/images/two-dragons/dragon-logo.svg',
};

const allImages = Object.values(images);

export default function TwoDragonsPage() {
  const { lightbox, openLightbox } = useLightbox(allImages);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.td-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.td-subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.from('.td-hero', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.utils.toArray('.td-desc-section, .td-logo-grid img, .td-mockup-split img, .td-footer-logo').forEach((el) => {
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
    <div className="td-wrapper">
      <div className="td-container">
        
        <div className="td-header">
          <Link to="/" className="td-back">←Back</Link>
          <h1 className="td-title">2 DRAGONS</h1>
          <p className="td-subtitle">Branding and logo design</p>
        </div>

        <div className="td-hero" {...clickable(images.hero)}>
          <img loading="lazy" src={images.hero} alt="2 Dragons hero" />
        </div>

        <div className="td-desc-section">
          <div className="td-desc-text">
            <p>The Ouroboros is an ancient symbol of a creature eating its own tail, representing eternity, cycles, and infinite continuity. In traditional mythology, it embodies the idea of creation from destruction, constant renewal, and the endless loop of life. In the 2 Dragons logo, this concept is reimagined: instead of a single tail, the circular form ends in a second dragon head, symbolizing not just continuity, but limitless possibilities and endless choices in gaming.</p>
            <br />
            <p>The Ouroboros-inspired shape communicates that the world of gaming is ever-expanding, cyclical, and infinite, where every end is a new beginning, every strategy leads to new paths, and creativity never runs out. By combining the timeless Ouroboros with the dual-headed dragon, the logo conveys eternity, versatility, and the boundless potential of the gaming universe.</p>
          </div>
          <div className="td-desc-sketch" {...clickable(images.image81)}>
            <img loading="lazy" src={images.image81} alt="Dragon render sketch" />
          </div>
        </div>

        <div className="td-logo-grid">
          <div className="td-logo-col">
            <img loading="lazy" src={images.group750} alt="Logo row 1" {...clickable(images.group750)} />
            <img loading="lazy" src={images.group752} alt="Logo row 2" {...clickable(images.group752)} />
            <img loading="lazy" src={images.group751} alt="Logo row 3" {...clickable(images.group751)} />
          </div>
          <div className="td-logo-col">
            <img loading="lazy" src={images.logoPanel} alt="Logo presentation variants" {...clickable(images.logoPanel)} />
          </div>
        </div>

        <div className="td-mockup-split">
          <div className="td-mockup-left" {...clickable(images.rect2030)}>
            <img loading="lazy" src={images.rect2030} alt="Packaging mockup" />
          </div>
          <div className="td-mockup-right">
            <img loading="lazy" src={images.vector6} alt="Mockup variant 1" {...clickable(images.vector6)} />
            <img loading="lazy" src={images.vector8} alt="Mockup variant 2" {...clickable(images.vector8)} />
            <img loading="lazy" src={images.vector7} alt="Mockup variant 3" {...clickable(images.vector7)} />
          </div>
        </div>

        <div className="td-footer">
          <div className="td-footer-logo" {...clickable(images.dragonLogo)}>
            <img loading="lazy" src={images.dragonLogo} alt="2 Dragons final logo" />
          </div>
        </div>

      </div>
      {lightbox}
    </div>
  );
}
