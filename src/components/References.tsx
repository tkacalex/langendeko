import { useState } from 'react'
import {
  moreReferences,
  referenceProjects,
  techniqueReferences,
  type ReferenceImage,
} from '../data/references'
import ImageLightbox from './ImageLightbox'
import styles from './References.module.css'

export default function References() {
  const [lightbox, setLightbox] = useState<ReferenceImage | null>(null)

  const openImage = (image: ReferenceImage) => {
    if (image.href) return
    setLightbox(image)
  }

  return (
    <section className={`section ${styles.references}`} id="referenzen">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Referenzen</span>
          <h2 className="section-title">Vorher, nachher – und das Ergebnis.</h2>
          <p className="section-lead">
            Ein Auszug unserer Arbeiten: von der Farbplanung über den
            Ausgangszustand bis zur fertigen Gestaltung.
          </p>
        </div>

        <div className={styles.projects}>
          {referenceProjects.map((project, pi) => (
            <article
              key={project.id}
              className={`${styles.project} reveal`}
              style={{ transitionDelay: `${pi * 80}ms` }}
            >
              <div className={styles.projectGrid}>
                {project.images.map((image) => (
                  <ReferenceTile
                    key={image.src}
                    image={image}
                    onOpen={() => openImage(image)}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.subhead} reveal`}>
          <h3>Weitere Referenzen</h3>
        </div>
        <div className={styles.moreGrid}>
          {moreReferences.map((ref, i) => (
            <button
              key={ref.id}
              type="button"
              className={`${styles.moreCard} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setLightbox(ref.images[0])}
            >
              <img src={ref.images[0].src} alt={ref.title ?? ref.images[0].label} loading="lazy" />
              <span>{ref.title}</span>
            </button>
          ))}
        </div>

        <div className={`${styles.subhead} reveal`}>
          <h3>Dekorative Techniken</h3>
        </div>
        <div className={styles.techGrid}>
          {techniqueReferences.map((ref, i) => (
            <button
              key={ref.id}
              type="button"
              className={`${styles.techCard} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setLightbox(ref.images[0])}
            >
              <img src={ref.images[0].src} alt={ref.title ?? ''} loading="lazy" />
              <span>{ref.title}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

function ReferenceTile({
  image,
  onOpen,
}: {
  image: ReferenceImage
  onOpen: () => void
}) {
  if (image.href) {
    return (
      <a
        href={image.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.tile}
      >
        <img src={image.src} alt={image.label} loading="lazy" />
        <span>{image.label}</span>
      </a>
    )
  }

  return (
    <button type="button" className={styles.tile} onClick={onOpen}>
      <img src={image.src} alt={image.label} loading="lazy" />
      <span>{image.label}</span>
    </button>
  )
}
