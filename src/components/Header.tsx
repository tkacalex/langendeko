import { useEffect, useState } from 'react'
import { company, logoSrc, navLinks } from '../data/company'
import { IconMenu, IconClose, IconPhone } from './icons'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body-Scroll sperren, solange das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={close}>
          <img
            src={logoSrc}
            alt={`${company.name} Logo`}
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav} aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${company.phoneHref}`} className={styles.phone}>
            <IconPhone className={styles.phoneIcon} />
            <span>{company.phone}</span>
          </a>
          <a href="#kontakt" className={`btn btn-primary ${styles.cta}`}>
            Angebot anfragen
          </a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobiles Overlay-Menü */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${company.phoneHref}`}
          className={styles.mobilePhone}
          onClick={close}
        >
          <IconPhone /> {company.phone}
        </a>
        <a
          href="#kontakt"
          className="btn btn-primary"
          onClick={close}
        >
          Jetzt Angebot anfragen
        </a>
      </div>
    </header>
  )
}
