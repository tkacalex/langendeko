import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { IconPhone, IconMail, IconPin, IconClock, IconCheck } from './icons'
import styles from './Contact.module.css'

const mapsQuery = encodeURIComponent(
  `${company.street}, ${company.zip} ${company.city}`,
)

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(company.inquiryEmail)}`

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState<FormData>(initialForm)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `Angebotsanfrage von ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Formular konnte nicht gesendet werden.')
      }

      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
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
                  <strong>E-Mail für Anfragen</strong>
                  <a href={`mailto:${company.inquiryEmail}`}>
                    {company.inquiryEmail}
                  </a>
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

          <div className={`${styles.formWrap} reveal`}>
            {status === 'success' ? (
              <div className={styles.success} role="status">
                <span className={styles.successIcon}>
                  <IconCheck />
                </span>
                <h3>Vielen Dank!</h3>
                <p>
                  Ihre Anfrage wurde per E-Mail an uns gesendet. Wir melden uns
                  schnellstmöglich bei Ihnen – in der Regel innerhalb von 1–2
                  Werktagen.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
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
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Für unsere Antwort"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
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

                {status === 'error' && (
                  <p className={styles.error} role="alert">
                    Senden fehlgeschlagen. Bitte rufen Sie uns an unter{' '}
                    <a href={`tel:${company.phoneHref}`}>{company.phone}</a>{' '}
                    oder schreiben Sie direkt an{' '}
                    <a href={`mailto:${company.inquiryEmail}`}>
                      {company.inquiryEmail}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Wird gesendet …' : 'Anfrage absenden'}
                </button>
                <p className={styles.note}>
                  Ihre Anfrage wird direkt per E-Mail an uns übermittelt. Ihre
                  Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                  verwendet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
