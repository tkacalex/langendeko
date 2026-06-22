import type { SVGProps } from 'react'
import type { ComponentType } from 'react'
import {
  IconRoller,
  IconBrush,
  IconPalette,
  IconWallpaper,
  IconLacquer,
  IconInsulation,
  IconDrywall,
  IconFloor,
  IconMold,
  IconWater,
  IconHumidity,
} from '../components/icons'

export interface Service {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const services: Service[] = [
  {
    title: 'Anstrich & Verputzarbeiten',
    description:
      'Saubere Innen- und Außenanstriche sowie Putzarbeiten – fachgerecht ausgeführt und langlebig.',
    icon: IconRoller,
  },
  {
    title: 'Dekorative Maltechniken',
    description:
      'Kreative Wandgestaltung, Spachteltechniken und Effekte, die Ihren Räumen Charakter verleihen.',
    icon: IconBrush,
  },
  {
    title: 'Farbberatung & Gestaltung',
    description:
      'Individuelle Farbvorschläge und Gestaltungskonzepte – abgestimmt auf Raum, Licht und Ihren Stil.',
    icon: IconPalette,
  },
  {
    title: 'Tapezierarbeiten',
    description:
      'Vom klassischen Raufaser bis zur hochwertigen Designtapete – präzise verarbeitet bis ins Detail.',
    icon: IconWallpaper,
  },
  {
    title: 'Lackier- & Lasurarbeiten',
    description:
      'Türen, Fenster, Holz und Metall in perfektem Finish – schützend lackiert oder natürlich lasiert.',
    icon: IconLacquer,
  },
  {
    title: 'Wärmedämmverbundsysteme',
    description:
      'WDVS für eine energieeffiziente Fassade – mehr Wohnkomfort und spürbar niedrigere Heizkosten.',
    icon: IconInsulation,
  },
  {
    title: 'Trockenbau',
    description:
      'Wände, Decken und Vorsatzschalen – flexible Raumlösungen sauber und maßgenau umgesetzt.',
    icon: IconDrywall,
  },
  {
    title: 'Bodenbeschichtungen',
    description:
      'Belastbare Boden- und Ölwannenbeschichtungen für Keller, Garage, Werkstatt und Gewerbe.',
    icon: IconFloor,
  },
  {
    title: 'Schimmelpilzsanierung',
    description:
      'Fachgerechte Beseitigung von Schimmel an der Ursache – für ein gesundes Raumklima.',
    icon: IconMold,
  },
  {
    title: 'Wasserschaden & Trocknung',
    description:
      'Schnelle Hilfe nach Wasserschäden: professionelle Trocknung und zuverlässige Sanierung.',
    icon: IconWater,
  },
  {
    title: 'Raumfeuchtigkeitsanalyse',
    description:
      'Messung und Analyse der Raumfeuchte – damit wir Probleme erkennen, bevor sie entstehen.',
    icon: IconHumidity,
  },
]
