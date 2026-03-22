import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

// Social icon assets
const socialIcons = [
  { src: '/images/icons/instagram.webp', alt: 'Instagram', href: '#' },
  { src: '/images/icons/behance.webp', alt: 'Behance', href: '#' },
  { src: '/images/icons/genius.webp', alt: 'Genius', href: '#' },
  { src: '/images/icons/email.webp', alt: 'Email', href: '#' },
];

const signatureSrc = '/images/hero/signature.svg';
const watermarkSrc = '/images/hero/watermark.webp';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Custom ease for luxury feel
      const smoothOut = 'expo.out';

      // ── Master timeline ──
      const tl = gsap.timeline({ delay: 0.3 });

      // 1. Watermark: deep scale + blur dissolve
      tl.fromTo(
        '.hero__watermark',
        { scale: 1.4, opacity: 0, filter: 'blur(30px)' },
        { scale: 1, opacity: 0.04, filter: 'blur(0px)', duration: 2.4, ease: smoothOut }
      );

      // 2. Subtitle: fade in
      tl.fromTo(
        '.hero__subtitle',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        0.4
      );

      // 3. Signature: scale from center + soft fade
      tl.fromTo(
        '.hero__signature',
        { opacity: 0, scale: 0.85, yPercent: 15 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 1.2, ease: smoothOut },
        1.1
      );

      // 4. Buttons: staggered elastic entrance
      tl.fromTo(
        '.hero__btn',
        { opacity: 0, yPercent: 60, scale: 0.9 },
        {
          opacity: 1,
          yPercent: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: 'back.out(1.4)',
        },
        1.4
      );

      // 5. Social icons: staggered fade + slide from right
      tl.fromTo(
        '.hero__social-icon',
        { opacity: 0, xPercent: 80, scale: 0.7 },
        {
          opacity: 0.6,
          xPercent: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: smoothOut,
        },
        1.2
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      <div className="hero__watermark">
        <img src={watermarkSrc} alt="" />
      </div>

      <div className="hero__content">
        <p className="hero__subtitle">Graphic Designer</p>
        <h1 className="hero__title">smegomade<sup className="hero__g-mark">g</sup></h1>
        <div className="hero__signature">
          <img src={signatureSrc} alt="Signature" />
        </div>
        <div className="hero__buttons">
          <a href="#work" className="hero__btn hero__btn--primary">Explore</a>
          <a href="#about" className="hero__btn hero__btn--secondary">Contact</a>
        </div>
      </div>

      <div className="hero__socials">
        {socialIcons.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            className="hero__social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    </section>
  );
}
