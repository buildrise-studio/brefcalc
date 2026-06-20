import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#fonctionnalites', label: 'Fonctionnalités' },
    { href: '#fonctionnement', label: 'Fonctionnement' },
    { href: '#rapport', label: 'Rapport PDF' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <img src="/logo-brefcalc.png" alt="BrefCalc" className="header__logo" />
          <span className="header__name">BrefCalc</span>
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#telecharger" className="header__cta">
          Télécharger l'app
        </a>

        <button
          className="header__burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#telecharger" className="header__mobile-cta" onClick={() => setOpen(false)}>
            Télécharger l'app
          </a>
        </div>
      )}
    </header>
  );
}
