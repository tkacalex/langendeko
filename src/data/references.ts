export interface ReferenceImage {
  src: string
  label: string
  href?: string
}

export interface ReferenceProject {
  id: string
  title?: string
  images: ReferenceImage[]
}

export const referenceProjects: ReferenceProject[] = [
  {
    id: 'projekt-1',
    images: [
      {
        src: '/images/referenzen/ref0101.jpg',
        label: 'Vorab-Entwurf',
        href: '/images/referenzen/Farbvorschlag 1.pdf',
      },
      { src: '/images/referenzen/ref0102.jpg', label: 'Vorher' },
      { src: '/images/referenzen/ref0103.jpg', label: 'Nachher' },
    ],
  },
  {
    id: 'projekt-2',
    images: [
      { src: '/images/referenzen/ref0201.jpg', label: 'Vorab-Entwurf' },
      { src: '/images/referenzen/ref0202.jpg', label: 'Vorher' },
      { src: '/images/referenzen/ref0203.jpg', label: 'Nachher' },
    ],
  },
  {
    id: 'projekt-3',
    images: [
      { src: '/images/referenzen/ref0401.jpg', label: 'Vorab-Entwurf' },
      { src: '/images/referenzen/ref0402.jpg', label: 'Vorher' },
      { src: '/images/referenzen/ref0403.jpg', label: 'Nachher' },
    ],
  },
  {
    id: 'projekt-4',
    images: [
      { src: '/images/referenzen/ref0301.jpg', label: 'Vorher' },
      { src: '/images/referenzen/ref0302.jpg', label: 'Nachher' },
    ],
  },
]

export const moreReferences: ReferenceProject[] = [
  {
    id: 'ref-1',
    title: 'Referenz 1',
    images: [{ src: '/images/referenzen/ref05.jpg', label: 'Referenz' }],
  },
  {
    id: 'ref-2',
    title: 'Referenz 2',
    images: [{ src: '/images/referenzen/ref06.jpg', label: 'Referenz' }],
  },
  {
    id: 'ref-3',
    title: 'Referenz 3',
    images: [{ src: '/images/referenzen/ref07.jpg', label: 'Referenz' }],
  },
]

export const techniqueReferences: ReferenceProject[] = [
  {
    id: 'venezianisch',
    title: 'Venezianische Spachteltechnik – Rustika',
    images: [
      { src: '/images/referenzen/ref08.jpg', label: 'Venezianische Spachteltechnik' },
    ],
  },
  {
    id: 'schiefer',
    title: 'Schiefertechnik',
    images: [{ src: '/images/referenzen/ref09.jpg', label: 'Schiefertechnik' }],
  },
  {
    id: 'particolare',
    title: 'Particolaretechnik',
    images: [{ src: '/images/referenzen/ref10.jpg', label: 'Particolaretechnik' }],
  },
]
