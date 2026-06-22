import { useEffect, useRef } from 'react'
import { company } from '../data/company'
import { IconClose } from './icons'
import styles from './LegalModal.module.css'

export type LegalDoc = 'impressum' | 'datenschutz'

interface Props {
  doc: LegalDoc | null
  onClose: () => void
}

export default function LegalModal({ doc, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!doc) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [doc, onClose])

  if (!doc) return null

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 id="legal-title">
            {doc === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Schließen"
            onClick={onClose}
          >
            <IconClose />
          </button>
        </header>

        <div className={styles.body}>
          {doc === 'impressum' ? <Impressum /> : <Datenschutz />}
        </div>
      </div>
    </div>
  )
}

function Impressum() {
  return (
    <>
      <p className={styles.muted}>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>

      <h3>{company.name}</h3>
      <p>
        {company.street}
        <br />
        {company.zip} {company.city}
      </p>

      <h3>Vertreten durch</h3>
      <p>{company.owner} (Geschäftsführer)</p>

      <h3>Kontakt</h3>
      <p>
        Telefon: {company.phone}
        <br />
        E-Mail:{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h3>Berufsbezeichnung &amp; berufsrechtliche Regelungen</h3>
      <p>
        Berufsbezeichnung: Maler- und Lackiermeister (verliehen in der
        Bundesrepublik Deutschland). Es gelten die Regelungen der
        Handwerksordnung (HwO). Zuständige Handwerkskammer: Handwerkskammer
        Rhein-Main, Frankfurt am Main.
      </p>

      <h3>Umsatzsteuer-ID</h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        <span className={styles.placeholder}>[USt-IdNr. ergänzen]</span>
      </p>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        {company.owner}
        <br />
        {company.street}, {company.zip} {company.city}
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      </p>

      <p className={styles.placeholder}>
        Hinweis: Dieses Impressum ist eine Vorlage. Bitte ergänzen Sie fehlende
        Pflichtangaben (z.&nbsp;B. USt-IdNr., Handelsregister) und lassen Sie es
        vor Veröffentlichung rechtlich prüfen.
      </p>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <p className={styles.muted}>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
        informieren wir Sie über die Verarbeitung Ihrer Daten gemäß DSGVO.
      </p>

      <h3>1. Verantwortlicher</h3>
      <p>
        {company.name}, {company.street}, {company.zip} {company.city}
        <br />
        Telefon: {company.phone} · E-Mail:{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h3>2. Erhebung von Daten beim Besuch der Website</h3>
      <p>
        Bei jedem Aufruf dieser Website werden durch den Hosting-Anbieter
        automatisch Informationen in Server-Logfiles gespeichert (z.&nbsp;B.
        IP-Adresse, Datum und Uhrzeit, abgerufene Seite). Rechtsgrundlage ist
        unser berechtigtes Interesse am sicheren Betrieb der Website
        (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
      </p>

      <h3>3. Kontaktformular &amp; Kontaktaufnahme</h3>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
        verarbeiten wir die von Ihnen angegebenen Daten (Name, Telefon,
        Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage und zur
        Angebotserstellung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO).
      </p>

      <h3>4. Google Maps</h3>
      <p>
        Zur Darstellung unseres Standorts binden wir Kartenmaterial von Google
        Maps ein (Anbieter: Google Ireland Limited). Dabei kann Ihre IP-Adresse
        an Google übertragen werden. Weitere Informationen finden Sie in der
        Datenschutzerklärung von Google.
      </p>

      <h3>5. Ihre Rechte</h3>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
        Zudem können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.
      </p>

      <p className={styles.placeholder}>
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage und sollte vor
        Veröffentlichung an den tatsächlichen Hosting- und Tool-Einsatz
        angepasst und rechtlich geprüft werden.
      </p>
    </>
  )
}
