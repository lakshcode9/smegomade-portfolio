import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const signatureSrc = '/images/hero/about-signature.svg';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.about__heading', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.to('.about__text', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.to('.about__signature', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 60%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Set initial states
      gsap.set('.about__heading', { y: 40 });
      gsap.set('.about__text', { y: 30 });
      gsap.set('.about__signature', { y: 20 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={sectionRef} id="about">
      <h2 className="about__heading">WHO AM I?</h2>
      <p className="about__text">
        {`Hey, my name is Aleksa. I am a graphic designer based in Serbia.\nI work across all types of design. I am also a verified graphic contributor on the Genius music platform. I have worked with major Balkan artists and labels. I've built clothing brands and personal brands.`}
      </p>
      <div className="about__signature">
        <img loading="lazy" src={signatureSrc} alt="Signature" />
      </div>
    </section>
  );
}
