import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

// Social icon assets
const socialIcons = [
  { src: '/images/icons/instagram.png', alt: 'Instagram', href: '#' },
  { src: '/images/icons/behance.png', alt: 'Behance', href: '#' },
  { src: '/images/icons/genius.png', alt: 'Genius', href: '#' },
  { src: '/images/icons/email.png', alt: 'Email', href: '#' },
];

const signatureSrc = '/images/hero/signature.svg';
const watermarkSrc = '/images/hero/watermark.png';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the title into individual chars wrapped in clip containers
      const titleEl = heroRef.current.querySelector('.hero__title');
      const titleText = titleEl.textContent;
      titleEl.innerHTML = titleText
        .split('')
        .map(
          (ch) =>
            `<span class="hero__char-wrap"><span class="hero__char">${ch}</span></span>`
        )
        .join('');

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

      // 2. Subtitle: clip-path wipe from left to right
      tl.fromTo(
        '.hero__subtitle',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power3.inOut' },
        0.4
      );

      // 3. Title chars: slide up from below their clip masks
      tl.fromTo(
        '.hero__char',
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.0,
          stagger: { each: 0.035, from: 'start' },
          ease: 'power3.out',
        },
        0.6
      );

      // 4. Signature: scale from center + soft fade
      tl.fromTo(
        '.hero__signature',
        { opacity: 0, scale: 0.85, yPercent: 15 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 1.2, ease: smoothOut },
        1.1
      );

      // 5. Buttons: staggered elastic entrance
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

      // 6. Social icons: staggered fade + slide from right
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

      // 7. Subtle continuous watermark float
      gsap.to('.hero__watermark', {
        yPercent: -2,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      <div className="hero__watermark">
        <img src={watermarkSrc} alt="" />
      </div>

      <div className="hero__content">
        <p className="hero__subtitle">graphic designer</p>
        <h1 className="hero__title">smegomade</h1>
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
