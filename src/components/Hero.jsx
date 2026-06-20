import { useEffect, useState } from 'react';
import './Hero.css';

const ROWS = [
  { label: 'Transmission parois', value: '1 842', unit: 'W' },
  { label: 'Infiltration / ouverture porte', value: '618', unit: 'W' },
  { label: 'Charge produits', value: '3 105', unit: 'W' },
  { label: 'Éclairage + occupation', value: '264', unit: 'W' },
  { label: 'Dégivrage', value: '410', unit: 'W' },
];

export default function Hero() {
  const [visibleRows, setVisibleRows] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  useEffect(() => {
    if (visibleRows < ROWS.length) {
      const t = setTimeout(() => setVisibleRows((v) => v + 1), 320);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowTotal(true), 250);
    return () => clearTimeout(t);
  }, [visibleRows]);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Bilan frigorifique professionnel</p>
          <h1>
            Le calcul frigorifique,
            <br />
            <span className="hero__accent">sans la feuille Excel.</span>
          </h1>
          <p className="hero__lede">
            BrefCalc guide vos techniciens étape par étape — dimensions, isolation,
            températures, charges — et produit un bilan frigorifique exact et un rapport
            PDF prêt à signer, directement depuis le terrain.
          </p>

          <div className="hero__actions">
            <a href="#telecharger" className="btn btn--primary">
              Télécharger l'application
            </a>
            <a href="#fonctionnement" className="btn btn--ghost">
              Voir comment ça marche
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="mono hero__trust-num">11</span>
              <span>postes de charge calculés</span>
            </div>
            <div className="hero__trust-item">
              <span className="mono hero__trust-num">100%</span>
              <span>hors connexion</span>
            </div>
            <div className="hero__trust-item">
              <span className="mono hero__trust-num">PDF</span>
              <span>rapport client en 1 tap</span>
            </div>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="calc-card">
            <div className="calc-card__head">
              <span className="calc-card__dot" />
              <span className="calc-card__dot" />
              <span className="calc-card__dot" />
              <span className="calc-card__title">Chambre froide négative · CF-014</span>
            </div>

            <div className="calc-card__body">
              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`calc-row ${i < visibleRows ? 'calc-row--visible' : ''}`}
                >
                  <span className="calc-row__label">{row.label}</span>
                  <span className="mono calc-row__value">
                    {row.value} <span className="calc-row__unit">{row.unit}</span>
                  </span>
                </div>
              ))}

              <div className={`calc-total ${showTotal ? 'calc-total--visible' : ''}`}>
                <span>Puissance frigorifique totale</span>
                <span className="mono calc-total__value">6 239 W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
