import { company, logoSrc, navLinks } from '../data/company'
import { IconPhone, IconMail, IconPin } from './icons'
import type { LegalDoc } from './LegalModal'
import styles from './Footer.module.css'

interface Props {
  onOpenLegal: (doc: LegalDoc) => void
}

export default function Footer({ onOpenLegal }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <img
              src={logoSrc}
              alt={`${company.name} Logo`}
              className={styles.logo}
            />
          </a>
          <p className={styles.tagline}>
            Seit {company.foundedYear} Ihr verlässlicher Handwerkspartner in
            Dreieich und dem Rhein-Main-Gebiet.
          </p>
        </div>

        <nav className={styles.col} aria-label="Footer-Navigation">
          <h3>Navigation</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h3>Kontakt</h3>
          <ul className={styles.contactList}>
            <li>
              <IconPin />
              <span>
                {company.street}, {company.zip} {company.city}
              </span>
            </li>
            <li>
              <IconPhone />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <IconMail />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Rechtliches</h3>
          <ul>
            <li>
              <button type="button" onClick={() => onOpenLegal('impressum')}>
                Impressum
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenLegal('datenschutz')}>
                Datenschutz
              </button>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <span>
            © {year} {company.name}. Alle Rechte vorbehalten.
          </span>
          <span className={styles.craft}>
            Maler­handwerk seit {company.foundedYear} · 3. Generation
          </span>
        </div>
      </div>
    </footer>
  )
}
