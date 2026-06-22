import { partners } from '../data/partners'
import styles from './Partners.module.css'

export default function Partners() {
  return (
    <section className={`section ${styles.partners}`} id="partnerfirmen">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Partnerfirmen</span>
          <h2 className="section-title">Starke Partner an unserer Seite.</h2>
          <p className="section-lead">
            Für umfassende Bauprojekte arbeiten wir mit bewährten
            Partnerbetrieben zusammen – damit Sie alles aus einer Hand
            bekommen.
          </p>
        </div>

        <div className={styles.grid}>
          {partners.map((partner, i) => {
            const content = (
              <>
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={styles.logo}
                  loading="lazy"
                />
                <span className={styles.name}>{partner.name}</span>
              </>
            )

            return partner.url ? (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                {content}
              </a>
            ) : (
              <div
                key={partner.name}
                className={`${styles.card} ${styles.static} reveal`}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
