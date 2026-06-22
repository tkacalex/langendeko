export interface DownloadLink {
  label: string
  href: string
}

export const hawoDownloads: DownloadLink[] = [
  {
    label: 'Micro Silicon Fassadenfarbe',
    href: '/images/pdf/Microsilicon flyer_Stroh.pdf',
  },
  {
    label: 'Wohnklimaplatte – Das beste Mittel gegen Schimmel und Feuchtigkeit',
    href: '/images/pdf/Schimmel_Flyer_Internet.pdf',
  },
  { label: 'Dachdämmung', href: '/images/pdf/dachdaemmung.pdf' },
  { label: 'Fassaden Dämmplatten', href: '/images/pdf/daemmplatten.pdf' },
  {
    label: 'M-Therm Wandheizung',
    href: '/images/pdf/M-Therm Wandheizung Flyer.pdf',
  },
  { label: 'Wärmedämmung', href: '/images/pdf/hawo_eps_032.pdf' },
]

export const serviceLinks = [
  {
    name: 'farbdesigner.de',
    url: 'http://www.farbdesigner.de/',
    image: '/images/farbdesigner.jpg',
  },
  {
    name: 'daemm-info.de',
    url: 'http://www.daemm-info.de/',
    image: '/images/daemm-info.jpg',
  },
  {
    name: 'farbimpulse.de',
    url: 'http://www.farbimpulse.de',
    image: '/images/farbimpulse.jpg',
  },
] as const
