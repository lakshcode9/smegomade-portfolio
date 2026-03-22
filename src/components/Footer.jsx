import './Footer.css';

const socialIcons = [
  { src: '/images/icons/instagram.png', alt: 'Instagram', href: '#' },
  { src: '/images/icons/behance.png', alt: 'Behance', href: '#' },
  { src: '/images/icons/genius.png', alt: 'Genius', href: '#' },
  { src: '/images/icons/email.png', alt: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="footer__brand">smegomade</span>
        <nav className="footer__nav">
          <a href="#about" className="footer__nav-link">About me</a>
          <a href="#work" className="footer__nav-link">Work</a>
          <a href="#testimonials" className="footer__nav-link">Reviews</a>
          <a href="#home" className="footer__nav-link">Home</a>
        </nav>
      </div>
      <div className="footer__divider" />
      <div className="footer__bottom">
        <span className="footer__copyright">© 2026 smegomade. All rights reserved.</span>
        <div className="footer__socials">
          {socialIcons.map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              className="footer__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
