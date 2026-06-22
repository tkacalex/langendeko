import { useState } from 'react'
import { hawoDownloads, serviceLinks } from '../data/downloads'
import { services } from '../data/services'
import ImageLightbox from './ImageLightbox'
import { IconArrow } from './icons'
import styles from './Services.module.css'

export default function Services() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  )

  return (
    <section className={`section ${styles.services}`} id="leistungen">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Leistungen</span>
          <h2 className="section-title">Alles für Wand, Fassade und Raum.</h2>
          <p className="section-lead">
            Vom klassischen Anstrich bis zur Sanierung im Schadensfall – wir
            bündeln das gesamte Maler- und Bautenschutz-Handwerk unter einem
            Dach. Ein Ansprechpartner, ein Team, ein Ergebnis.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon className={styles.icon} />
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </article>
            )
          })}
        </div>

        <div className={`${styles.spotlights} reveal`}>
          <button
            type="button"
            className={styles.spotlight}
            onClick={() =>
              setLightbox({
                src: '/images/wdv_kl.gif',
                alt: 'Wärmedämmverbundsysteme (WDVS)',
              })
            }
          >
            <img src="/images/wdv_kl.gif" alt="" loading="lazy" />
            <div>
              <h3>WDV-Systeme</h3>
              <p>Energieeffiziente Fassadendämmung – zum Vergrößern klicken.</p>
            </div>
          </button>
          <button
            type="button"
            className={styles.spotlight}
            onClick={() =>
              setLightbox({
                src: '/images/erste_hilfe.gif',
                alt: 'Erste Hilfe bei Schimmel im Haus',
              })
            }
          >
            <img src="/images/erste_hilfe.gif" alt="" loading="lazy" />
            <div>
              <h3>Erste Hilfe bei Schimmel im Haus</h3>
              <p>Informationen zur Schimmelprävention – zum Vergrößern klicken.</p>
            </div>
          </button>
        </div>

        <div className={`${styles.links} reveal`}>
          {serviceLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <img src={link.image} alt={link.name} loading="lazy" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className={`${styles.downloads} reveal`}>
          <h3>Informationen unserer Partnerfirma hawo</h3>
          <p>PDF-Dateien zum Download:</p>
          <ul>
            {hawoDownloads.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.cta} reveal`}>
          <p>Ihr Vorhaben ist nicht dabei? Fragen Sie uns einfach – wir finden eine Lösung.</p>
          <a href="#kontakt" className="btn btn-primary">
            Unverbindlich anfragen
            <IconArrow style={{ width: 18, height: 18 }} />
          </a>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
