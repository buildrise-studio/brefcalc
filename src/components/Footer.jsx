import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-brefcalc.png" alt="BrefCalc" className="footer__logo" />
          <p>
            Sarl Bref Calc<br />
            Logiciel de bilan frigorifique pour chambres froides.
          </p>
        </div>

        <div className="footer__contact">
          <h3>Contact</h3>
          <a href="mailto:contact@brefcalc.com">contact@brefcalc.com</a>
          <a href="tel:+213000000000">+213 0 00 00 00 00</a>
        </div>

        <div className="footer__links">
          <h3>Application</h3>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#telecharger">Télécharger</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Sarl Bref Calc. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
