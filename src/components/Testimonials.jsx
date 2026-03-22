import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: '"Working with smegomade was an incredible experience. The attention to detail and creative vision exceeded all my expectations. Highly recommend for any branding work."',
    client: '— Client',
  },
  {
    quote: '"The designs delivered were exactly what I envisioned and more. Professional, creative, and always on time. Smegomade truly understands the art of visual storytelling."',
    client: '— Client',
  },
  {
    quote: '"From concept to final delivery, the entire process was smooth and inspiring. The brand identity created for us stands out in our industry. Exceptional work."',
    client: '— Client',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.testimonials__heading', {
        scrollTrigger: {
          trigger: '.testimonials',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.testimonials__card').forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('.testimonials__arrow').forEach((arrow, i) => {
        gsap.to(arrow, {
          scrollTrigger: {
            trigger: '.testimonials__nav',
            start: 'top 90%',
          },
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });

      gsap.set('.testimonials__heading', { y: 40 });
      gsap.set('.testimonials__card', { y: 40 });
      gsap.set('.testimonials__arrow', { scale: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef} id="testimonials">
      <h2 className="testimonials__heading">Clients' Voice</h2>
      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <div className="testimonials__card" key={i}>
            <p className="testimonials__quote">{t.quote}</p>
            <p className="testimonials__client">{t.client}</p>
          </div>
        ))}
      </div>
      <div className="testimonials__nav">
        <button className="testimonials__arrow testimonials__arrow--prev" aria-label="Previous">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <button className="testimonials__arrow testimonials__arrow--next" aria-label="Next">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
