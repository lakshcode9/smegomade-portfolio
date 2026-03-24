import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkFeed.css';

gsap.registerPlugin(ScrollTrigger);

// Background images for each category
const categories = [
  {
    title: '"Cover Arts"',
    bg: '/images/common/covers-bg.webp',
    path: '/work/covers',
  },
  {
    title: '"Clothing"',
    bg: '/images/common/clothing-bg.webp',
    path: '/work/clothing',
  },
  {
    title: '"Posters"',
    bg: '/images/common/posters-bg.webp',
    path: '/work/posters',
  },
  {
    title: '"Typography"',
    bg: '/images/common/typography-bg.webp',
    path: '/work/typography',
  },
];

export default function WorkFeed() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.to('.work-feed__heading', {
        scrollTrigger: {
          trigger: '.work-feed',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Staggered item animations
      gsap.utils.toArray('.work-feed__item').forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: 'power3.out',
        });
      });

      // Set initial states
      gsap.set('.work-feed__heading', { y: 40 });
      gsap.set('.work-feed__item', { y: 50 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work-feed" ref={sectionRef} id="work">
      <h2 className="work-feed__heading">My Work</h2>
      <div className="work-feed__list">
        {categories.map((cat, i) => (
          <Link to={cat.path} className="work-feed__item" key={i}>
            <div className="work-feed__item-bg">
              <img loading="lazy" src={cat.bg} alt="" />
            </div>
            <span className="work-feed__item-title">{cat.title}</span>
            <span className="work-feed__item-link">View</span>
          </Link>
        ))}
      </div>
      <div className="work-feed__divider" />
    </section>
  );
}
