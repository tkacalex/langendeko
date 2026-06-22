import { company } from '../data/company'
import {
  IconYears,
  IconAward,
  IconTeam,
  IconLocal,
  IconChat,
  IconArrow,
} from './icons'
import styles from './WhyUs.module.css'

const reasons = [
  {
    icon: IconYears,
    title: '90+ Jahre Erfahrung',
    text: 'Seit 1930 im Handwerk – ein Erfahrungsschatz, der bei jedem Projekt mitarbeitet.',
  },
  {
    icon: IconAward,
    title: 'Eingetragener Meisterbetrieb',
    text: 'Geführt von Malermeister Thorsten Stroh. Qualität nach Meisterstandard, garantiert.',
  },
  {
    icon: IconTeam,
    title: '7 feste Fachkräfte',
    text: 'Ein eingespieltes Team statt wechselnder Subunternehmer – Sie kennen Ihre Handwerker.',
  },
  {
    icon: IconLocal,
    title: 'Lokal aus Dreieich',
    text: 'Kurze Wege im Rhein-Main-Gebiet, schnell vor Ort und fest in der Region verwurzelt.',
  },
  {
    icon: IconChat,
    title: 'Kostenlose Beratung',
    text: 'Wir schauen vorbei, hören zu und erstellen ein unverbindliches, transparentes Angebot.',
  },
]

export default function WhyUs() {
  return (
    <section className={`section ${styles.why}`} id="warum-stroh">
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.intro} reveal`}>
            <span className="eyebrow">Warum Stroh?</span>
            <h2 className={styles.title}>
              Gute Gründe, uns den Pinsel zu&nbsp;überlassen.
            </h2>
            <p className={styles.lead}>
              Bei uns bekommen Sie kein anonymes Großunternehmen, sondern einen
              Handwerksbetrieb, der seinen Namen seit drei Generationen mit
              Stolz trägt. Persönlich, fair und verbindlich.
            </p>
            <a href="#kontakt" className="btn btn-ghost-light">
              Beratung vereinbaren
              <IconArrow style={{ width: 18, height: 18 }} />
            </a>
          </div>

          <ul className={styles.list}>
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <li
                  key={reason.title}
                  className={`${styles.item} reveal`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </span>
                  <div>
                    <h3 className={styles.itemTitle}>{reason.title}</h3>
                    <p className={styles.itemText}>{reason.text}</p>
                  </div>
                </li>
              )
            })}

            <li className={`${styles.statCard} reveal`}>
              <div>
                <strong>{new Date().getFullYear() - company.foundedYear}+</strong>
                <span>Jahre Erfahrung</span>
              </div>
              <div>
                <strong>3.</strong>
                <span>Generation im Betrieb</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>aus einer Hand</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
