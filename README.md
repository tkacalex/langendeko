# Baudekoration H. Stroh GmbH — Website

Moderne, responsive One-Page-Website für die **Baudekoration H. Stroh GmbH**,
einen Maler- und Lackiermeisterbetrieb aus Dreieich (Hessen) mit über 90 Jahren
Firmengeschichte in dritter Generation.

Gebaut mit **Vite + React + TypeScript**. Statische Site – kein Backend, kein CMS.

## Schnellstart

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver (http://localhost:5173)
npm run build    # Produktions-Build nach ./dist
npm run preview  # Build lokal testen
```

## Projektstruktur

```
index.html                  SEO-Metadaten, Open Graph, JSON-LD (LocalBusiness)
public/favicon.svg          Logo-Monogramm
src/
  main.tsx                  Einstiegspunkt
  App.tsx                   Seitenkomposition
  index.css                 Design-Tokens (Farben, Typografie) + Basis-Styles
  hooks/useReveal.ts        Dezente Einblend-Animation beim Scrollen
  data/
    company.ts              Zentrale Firmendaten (an EINER Stelle pflegbar)
    services.ts             Leistungen inkl. Icons
  components/
    Header.tsx              Sticky-Navigation mit Mobile-Menü
    Hero.tsx                Hero mit SVG-Illustration (keine Stockfotos nötig)
    About.tsx               Familiengeschichte 1930 → 1987 → 2003 + Werte
    Services.tsx            Leistungs-Grid mit Icons
    WhyUs.tsx               USPs auf dunklem Anthrazit-Hintergrund
    Contact.tsx             Kontaktdaten, Formular & Google-Maps-Einbindung
    Footer.tsx              Navigation, Kontakt, Rechtliches
    LegalModal.tsx          Impressum & Datenschutz (Modal)
    icons.tsx               Alle SVG-Icons als React-Komponenten
```

## Inhalte pflegen

- **Firmendaten** (Adresse, Telefon, E-Mail …): [`src/data/company.ts`](src/data/company.ts)
- **Leistungen**: [`src/data/services.ts`](src/data/services.ts)
- **Geschichte & Werte**: [`src/components/About.tsx`](src/components/About.tsx)
- **SEO / Meta-Tags / Strukturierte Daten**: [`index.html`](index.html)
- **Farben & Schriften**: CSS-Variablen am Anfang von [`src/index.css`](src/index.css)

## Hinweise

- **Kontaktformular**: Da es sich um eine statische Site handelt, öffnet das
  Formular beim Absenden das E-Mail-Programm des Nutzers (`mailto:`) mit
  vorausgefüllter Anfrage. Für serverseitigen Versand kann z. B. ein Dienst wie
  Formspree oder eine Serverless-Funktion ergänzt werden.
- **Impressum & Datenschutz** sind als rechtssichere Vorlagen hinterlegt und
  **müssen vor Veröffentlichung** geprüft und vervollständigt werden
  (z. B. USt-IdNr.). Siehe [`src/components/LegalModal.tsx`](src/components/LegalModal.tsx).
- **Lokales SEO**: Title, Meta-Description, Geo-Tags und JSON-LD (`Painter` /
  LocalBusiness) sind auf „Maler Dreieich", „Malermeister Langen" und das
  Rhein-Main-Gebiet ausgerichtet.

## Barrierefreiheit & Performance

- Mobile-First, vollständig responsiv (Breakpoints bei 920 px / 860 px / 560 px).
- Tastatur-Navigation, Skip-Link, `aria`-Attribute, `prefers-reduced-motion`.
- Funktioniert dank `<noscript>`-Fallback auch ohne JavaScript.
