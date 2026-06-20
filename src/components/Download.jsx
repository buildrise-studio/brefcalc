import './Download.css';

export default function Download() {
  return (
    <section className="dl" id="telecharger">
      <div className="container dl__inner">
        <img src="/logo-brefcalc.png" alt="BrefCalc" className="dl__logo" />
        <p className="eyebrow dl__eyebrow">Disponible sur Android</p>
        <h2>Installez BrefCalc sur votre téléphone</h2>
        <p className="dl__lede">
          Téléchargez le fichier d'installation Android (.apk) et commencez votre
          premier bilan frigorifique en moins de cinq minutes.
        </p>

        <a href="/apk/app-release.apk" download className="btn btn--download">
          <DownloadIcon />
          Télécharger le fichier .apk
        </a>

        <p className="dl__note">
          Version Android · L'installation depuis une source externe peut demander
          d'autoriser temporairement « Sources inconnues » dans les réglages du téléphone.
        </p>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
