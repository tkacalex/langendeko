import { useEffect } from 'react'

/**
 * Versieht alle Elemente mit der Klasse `.reveal` mit einer dezenten
 * Einblend-Animation, sobald sie in den Viewport scrollen.
 * Respektiert `prefers-reduced-motion` (siehe index.css).
 */
export function useReveal(): void {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    )

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
