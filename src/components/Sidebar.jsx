import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sidebar.css';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About me', href: '#about' },
  { label: 'My work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Sidebar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    // Update active link based on scroll position
    const sections = ['home', 'about', 'work', 'testimonials'];
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(links.find(l => l.href === `#${id}`)?.label || ''),
        onEnterBack: () => setActive(links.find(l => l.href === `#${id}`)?.label || ''),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar__burger" role="button" tabIndex={0} aria-label="Menu">
        <span className="sidebar__burger-line" />
        <span className="sidebar__burger-line" />
        <span className="sidebar__burger-line" />
      </div>
      <nav className="sidebar__links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`sidebar__link${active === link.label ? ' sidebar__link--active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
