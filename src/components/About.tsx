import { company } from '../data/company'
import styles from './About.module.css'

const timeline = [
  {
    year: '1930',
    title: 'Die Gründung',
    text: `Johann Wilhelm Stroh gründet den Malerbetrieb in Dreieich – mit Pinsel, Handschlag und dem Anspruch, saubere Arbeit abzuliefern.`,
  },
  {
    year: '1987',
    title: 'Die zweite Generation',
    text: 'Der Betrieb geht in die Hände der zweiten Generation über. Tradition trifft auf neue Techniken und ein wachsendes Leistungsspektrum.',
  },
  {
    year: '2003',
    title: 'Thorsten Stroh übernimmt',
    text: 'In dritter Generation führt Malermeister Thorsten Stroh das Familienunternehmen – bodenständig, modern und der Qualität verpflichtet.',
  },
]

const values = [
  {
    title: 'Qualität',
    text: 'Sauber, sorgfältig, dauerhaft. Wir arbeiten so, wie wir es im eigenen Zuhause haben wollen.',
  },
  {
    title: 'Zuverlässigkeit',
    text: 'Termine, Absprachen, Preise – worauf wir uns einigen, darauf können Sie sich verlassen.',
  },
  {
    title: 'Erfahrung',
    text: 'Über 90 Jahre Handwerk in der Familie. Dieses Wissen fließt in jedes einzelne Projekt ein.',
  },
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="ueber-uns">
      <div className="container">
        <div className={styles.head}>
          <div className="reveal">
            <span className="eyebrow">Über uns</span>
            <h2 className="section-title">
              Ein Familienbetrieb mit Geschichte – und Zukunft.
            </h2>
          </div>
          <p className={`section-lead ${styles.headLead} reveal`}>
            Was {company.founder} 1930 begründet hat, führen wir bis heute
            weiter: ehrliches Maler­handwerk für die Menschen in Dreieich und
            dem gesamten Rhein-Main-Gebiet. Drei Generationen, eine Haltung.
          </p>
        </div>

        <figure className={`${styles.teamPhoto} reveal`}>
          <img
            src="/images/mitarbeiter_stroh.jpg"
            alt="Das Team der Baudekoration H. Stroh GmbH"
            loading="lazy"
          />
          <figcaption>Unser Team – Handwerk mit Herz seit 1930.</figcaption>
        </figure>

        <ol className={styles.timeline}>
          {timeline.map((item, i) => (
            <li
              key={item.year}
              className={`${styles.step} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.year}>{item.year}</div>
              <div className={styles.dot} aria-hidden="true" />
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepText}>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.values}>
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`${styles.value} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
