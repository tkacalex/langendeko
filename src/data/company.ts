/** Zentrale Firmendaten — an einer Stelle pflegbar. */
export const company = {
  name: 'Baudekoration H. Stroh GmbH',
  shortName: 'Stroh',
  owner: 'Thorsten Stroh',
  founder: 'Johann Wilhelm Stroh',
  foundedYear: 1930,
  employees: 7,
  street: 'Verbindungsstr. 6',
  zip: '63303',
  city: 'Dreieich',
  phone: '06103 - 34278',
  phoneHref: '+49610334278',
  email: 'baudekoration-stroh@t-online.de',
  /** Empfänger für Angebotsanfragen über das Kontaktformular */
  inquiryEmail: 'baudekoration-stroh@t-online.de',
  website: 'www.baudekoration-stroh.de',
} as const

export const navLinks = [
  { id: 'ueber-uns', label: 'Über uns' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'partnerfirmen', label: 'Partnerfirmen' },
  { id: 'referenzen', label: 'Referenzen' },
  { id: 'warum-stroh', label: 'Warum Stroh?' },
  { id: 'kontakt', label: 'Kontakt' },
] as const

export const logoSrc = '/logo.png'
