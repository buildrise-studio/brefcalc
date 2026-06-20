import './HowItWorks.css';

const STEPS = [
  {
    n: '01',
    title: 'Renseignez la chambre froide',
    text: 'Dimensions, isolation, températures intérieure et extérieure. BrefCalc adapte les étapes suivantes selon votre configuration.',
  },
  {
    n: '02',
    title: 'Détaillez les charges',
    text: 'Produits stockés, infiltration à l\'ouverture des portes, éclairage, occupation, ventilation et cycles de dégivrage.',
  },
  {
    n: '03',
    title: 'Obtenez le bilan exact',
    text: 'BrefCalc additionne chaque poste de charge et affiche la puissance frigorifique totale requise, avec la répartition par poste.',
  },
  {
    n: '04',
    title: 'Exportez le rapport client',
    text: 'Générez un PDF professionnel avec vos coordonnées d\'entreprise et partagez-le directement depuis votre téléphone.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="fonctionnement">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Le déroulé du calcul</p>
          <h2>Quatre étapes, dans l'ordre où un frigoriste les pense</h2>
        </div>

        <ol className="how__list">
          {STEPS.map((s) => (
            <li key={s.n} className="how__item">
              <span className="mono how__num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
