import { company } from '../data/company'
import { IconArrow, IconCheck } from './icons'
import styles from './Hero.module.css'

const trustPoints = ['Meisterbetrieb', '90+ Jahre Erfahrung', '7 Fachkräfte']

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Malermeisterbetrieb aus Dreieich · 3. Generation
          </span>

          <h1 className={styles.title}>
            Seit 1930 machen wir aus&nbsp;Häusern <em>Zuhause</em>.
          </h1>

          <p className={styles.lead}>
            Ihr familiengeführter Maler- und Lackiermeisterbetrieb im
            Rhein-Main-Gebiet. Vom ersten Pinselstrich bis zum fertigen Raum –
            mit Handwerk, das man sieht, und Verlässlichkeit, auf die man baut.
          </p>

          <div className={styles.actions}>
            <a href="#kontakt" className="btn btn-primary">
              Jetzt Angebot anfragen
              <IconArrow style={{ width: 18, height: 18 }} />
            </a>
            <a href="#leistungen" className="btn btn-outline">
              Unsere Leistungen
            </a>
          </div>

          <ul className={styles.trust}>
            {trustPoints.map((point) => (
              <li key={point}>
                <IconCheck className={styles.trustIcon} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <HeroIllustration />
          <div className={styles.floatYears}>
            <strong>{new Date().getFullYear() - company.foundedYear}+</strong>
            <span>Jahre Handwerk</span>
          </div>
          <div className={styles.floatTeam}>
            <strong>{company.employees}</strong>
            <span>Fachkräfte vor Ort</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Stilisierte Hausfassade mit Farbpalette – ganz ohne Stockfotos. */
function HeroIllustration() {
  return (
    <svg
      className={styles.illu}
      viewBox="0 0 460 420"
      role="img"
      aria-label="Illustration einer frisch gestrichenen Hausfassade"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34383e" />
          <stop offset="1" stopColor="#23262a" />
        </linearGradient>
        <linearGradient id="wallPaint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4d5bc" />
          <stop offset="1" stopColor="#c9a876" />
        </linearGradient>
      </defs>

      {/* Hintergrund */}
      <rect x="0" y="0" width="460" height="420" rx="24" fill="url(#sky)" />

      {/* Boden */}
      <rect x="0" y="350" width="460" height="70" fill="#1b1d20" />

      {/* Haus */}
      <g>
        {/* Dach */}
        <path d="M95 175 L230 95 L365 175 Z" fill="#a9854f" />
        <path d="M230 95 L365 175 L355 175 L230 108 Z" fill="#8f6f3f" />

        {/* unverputzter Teil (rechts) */}
        <rect x="120" y="170" width="220" height="180" fill="#6f6a62" />
        <g stroke="#5d584f" strokeWidth="3">
          <path d="M120 200 H340 M120 230 H340 M120 260 H340 M120 290 H340 M120 320 H340" />
          <path d="M160 170 V350 M200 170 V350 M240 170 V350 M280 170 V350 M310 170 V350" />
        </g>

        {/* frisch gestrichener Teil (links) – wächst über die Wand */}
        <rect x="120" y="170" width="120" height="180" fill="url(#wallPaint)" />

        {/* Fenster */}
        <g>
          <rect x="142" y="200" width="56" height="64" rx="4" fill="#faf6ef" />
          <rect
            x="142"
            y="200"
            width="56"
            height="64"
            rx="4"
            fill="none"
            stroke="#a9854f"
            strokeWidth="4"
          />
          <path d="M170 200 V264 M142 232 H198" stroke="#a9854f" strokeWidth="3" />
        </g>
        {/* Tür */}
        <rect x="150" y="288" width="44" height="62" rx="3" fill="#b26836" />
        <circle cx="186" cy="320" r="2.6" fill="#faf6ef" />
      </g>

      {/* Farbroller */}
      <g>
        <rect
          x="250"
          y="150"
          width="118"
          height="30"
          rx="15"
          fill="#e4d5bc"
          stroke="#23262a"
          strokeWidth="3"
        />
        <rect x="288" y="180" width="10" height="34" rx="5" fill="#23262a" />
        <path
          d="M293 214 q4 26 -10 40 q-14 14 -10 40"
          fill="none"
          stroke="#23262a"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* frische Farbtropfen */}
        <circle cx="240" cy="200" r="4" fill="#c9a876" />
        <circle cx="246" cy="226" r="3" fill="#c9a876" />
      </g>

      {/* Farbpalette unten */}
      <g>
        <rect x="40" y="372" width="34" height="26" rx="5" fill="#b26836" />
        <rect x="80" y="372" width="34" height="26" rx="5" fill="#c9a876" />
        <rect x="120" y="372" width="34" height="26" rx="5" fill="#7e8b6d" />
        <rect x="160" y="372" width="34" height="26" rx="5" fill="#6f6a62" />
        <rect x="200" y="372" width="34" height="26" rx="5" fill="#faf6ef" />
      </g>
    </svg>
  )
}
