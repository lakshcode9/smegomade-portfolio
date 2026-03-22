import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BrandingProjects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: '"Cold Minds"',
    bg: '/images/common/coldminds-card.webp',
    path: '/work/cold-minds',
  },
  {
    title: '"Two Dragons"',
    bg: '/images/common/twodragons-card.webp',
    path: '/work/2-dragons',
  },
  {
    title: '"Retrogradni"',
    bg: '/images/common/retrogradni-card.webp',
    path: '/work/retrogradni',
  },
];

export default function BrandingProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.branding__heading', {
        scrollTrigger: {
          trigger: '.branding',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.branding__card').forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.15,
          ease: 'power3.out',
        });
      });

      gsap.set('.branding__heading', { y: 30 });
      gsap.set('.branding__card', { y: 50 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="branding" ref={sectionRef}>
      <h3 className="branding__heading">Branding Projects</h3>
      <div className="branding__grid">
        {projects.map((project, i) => (
          <Link to={project.path} className="branding__card" key={i}>
            <div className="branding__card-bg">
              <img loading="lazy" src={project.bg} alt="" />
            </div>
            <span className="branding__card-title">{project.title}</span>
            <span className="branding__card-link">View</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
