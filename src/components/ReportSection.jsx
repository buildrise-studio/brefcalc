import './ReportSection.css';

export default function ReportSection() {
  return (
    <section className="report" id="rapport">
      <div className="container report__inner">
        <div className="report__text">
          <p className="eyebrow">Le livrable final</p>
          <h2>Un rapport que votre client peut signer</h2>
          <p className="report__lede">
            Chaque calcul se termine par un document PDF clair : coordonnées de
            l'entreprise, détail des onze postes de charge, puissance frigorifique
            totale et recommandation d'équipement. Prêt à imprimer ou à envoyer par
            message depuis le chantier.
          </p>

          <ul className="report__checks">
            <li>Sur demande : En-tête personnalisé avec votre logo et vos coordonnées</li>
            <li>Détail ligne par ligne de chaque poste de charge</li>
            <li>Partage direct </li>
          </ul>
        </div>

        <div className="report__doc" aria-hidden="true">
          <div className="doc">
            <div className="doc__bar" />
            <div className="doc__row doc__row--title" />
            <div className="doc__row doc__row--sub" />
            <div className="doc__divider" />
            {[1, 2, 3, 4].map((i) => (
              <div className="doc__line" key={i}>
                <span />
                <span className="mono" />
              </div>
            ))}
            <div className="doc__total">
              <span>Total</span>
              <span className="mono">6 239 W</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
