import './Features.css';

const FEATURES = [
  {
    title: 'Assistant pas à pas',
    text: "Onze étapes guidées — dimensions, isolation, températures, infiltration, produits, occupation, éclairage, ventilation, dégivrage — sans rien oublier.",
  },
  {
    title: 'Calcul conforme aux normes métier',
    text: 'Les formules de transmission, infiltration et charge de produits suivent les méthodes de calcul standard du froid commercial.',
  },
  {
    title: 'Fonctionne hors connexion',
    text: 'Aucune donnée mobile requise sur le terrain. Les projets sont stockés sur l\'appareil et synchronisables plus tard.',
  },
  {
    title: 'Historique de projets',
    text: 'Retrouvez, dupliquez ou modifiez n\'importe quel projet déjà chiffré, classé par client et par date.',
  },
  {
    title: 'Rapport PDF professionnel',
    text: 'Génération automatique d\'un rapport détaillé avec logo et coordonnées de votre entreprise, prêt à transmettre au client.',
  },
  {
    title: 'Multilingue',
    text: 'Interface disponible en français, anglais et arabe pour s\'adapter aux équipes et aux clients.',
  },
];

export default function Features() {
  return (
    <section className="features" id="fonctionnalites">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Ce que fait l'application</p>
          <h2>Tout le bilan frigorifique, dans la poche</h2>
        </div>

        <div className="features__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
