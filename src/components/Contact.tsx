import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { IconPhone, IconMail, IconPin, IconClock, IconCheck } from './icons'
import styles from './Contact.module.css'

const mapsQuery = encodeURIComponent(
  `${company.street}, ${company.zip} ${company.city}`,
)

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Statische Site ohne Backend: Anfrage per vorbefülltem E-Mail-Programm.
    const subject = encodeURIComponent(`Angebotsanfrage von ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nTelefon: ${form.phone}\n\nNachricht:\n${form.message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className={`section ${styles.contact}`} id="kontakt">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Kontakt</span>
          <h2 className="section-title">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
          <p className="section-lead">
            Ob Neuanstrich, Fassade oder Schadensfall – schildern Sie uns kurz
            Ihr Anliegen. Wir melden uns zeitnah und beraten Sie kostenlos und
            unverbindlich.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Kontaktdaten + Karte */}
          <div className={`${styles.info} reveal`}>
            <ul className={styles.details}>
              <li>
                <span className={styles.detailIcon}>
                  <IconPin />
                </span>
                <div>
                  <strong>Adresse</strong>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </a>
                </div>
              </li>
              <li>
                <span className={styles.detailIcon}>
                  <IconPhone />
                </span>
                <div>
                  <strong>Telefon</strong>
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                </div>
              </li>
              <li>
                <span className={styles.detailIcon}>
                  <IconMail />
                </span>
                <div>
                  <strong>E-Mail</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className={styles.detailIcon}>
                  <IconClock />
                </span>
                <div>
                  <strong>Erreichbarkeit</strong>
                  <span>Mo–Fr&nbsp;&nbsp;7:30–17:00 Uhr</span>
                </div>
              </li>
            </ul>

            <div className={styles.map}>
              <iframe
                title={`Standort ${company.name} in ${company.city}`}
                src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Formular */}
          <div className={`${styles.formWrap} reveal`}>
            {sent ? (
              <div className={styles.success} role="status">
                <span className={styles.successIcon}>
                  <IconCheck />
                </span>
                <h3>Vielen Dank!</h3>
                <p>
                  Ihre Anfrage ist auf dem Weg. Sollte sich Ihr E-Mail-Programm
                  nicht öffnen, erreichen Sie uns direkt unter{' '}
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSent(false)}
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Angebot anfragen</h3>

                <div className={styles.field}>
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Für Ihren Rückruf"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Anfrage absenden
                </button>
                <p className={styles.note}>
                  Mit dem Absenden öffnet sich Ihr E-Mail-Programm. Ihre Daten
                  werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
