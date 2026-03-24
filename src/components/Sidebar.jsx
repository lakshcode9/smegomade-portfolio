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
  const [open, setOpen] = useState(false);

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

  const handleToggle = () => setOpen(prev => !prev);

  const handleLinkClick = () => setOpen(false);

  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div
        className={`sidebar__burger ${open ? 'sidebar__burger--active' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Menu"
        onClick={handleToggle}
        onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
      >
        <span className="sidebar__burger-line" />
        <span className="sidebar__burger-line" />
        <span className="sidebar__burger-line" />
      </div>

      {/* Fullscreen overlay menu */}
      <div className={`sidebar__overlay ${open ? 'sidebar__overlay--visible' : ''}`}>
        <nav className="sidebar__overlay-nav">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`sidebar__overlay-link${active === link.label ? ' sidebar__overlay-link--active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Vertical inline links (visible when menu is closed) */}
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
