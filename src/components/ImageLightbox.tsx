import { useEffect } from 'react'
import { IconClose } from './icons'
import styles from './ImageLightbox.module.css'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Schließen"
        onClick={onClose}
      >
        <IconClose />
      </button>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
