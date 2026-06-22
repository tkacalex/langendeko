import type { SVGProps } from 'react'

/** Gemeinsame Basis für alle Linien-Icons. */
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/* --------------------------- Leistungs-Icons --------------------------- */

export const IconRoller = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="4" width="13" height="6" rx="1.5" />
    <path d="M16 7h3.5A1.5 1.5 0 0 1 21 8.5V11a1 1 0 0 1-1 1h-7" />
    <path d="M12 12v3.2a1.8 1.8 0 0 1-1.8 1.8H10" />
    <rect x="8" y="17" width="2.8" height="3.5" rx="0.8" />
  </Icon>
)

export const IconBrush = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M14.5 3.5 20.5 9.5" />
    <path d="M16 2.2 21.8 8a1.4 1.4 0 0 1 0 2L15 16.8 7.2 9 14 2.2a1.4 1.4 0 0 1 2 0Z" />
    <path d="M7.2 9 4.5 13.5c-1.2 2-2 4.5-2 6.5 2 0 4.5-.8 6.5-2L13.5 15.3" />
  </Icon>
)

export const IconPalette = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3a9 9 0 0 0 0 18c1.3 0 2-1 2-2 0-1.3-1-1.6-1-2.7 0-.9.7-1.3 1.6-1.3H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="11" r="1" fill="currentColor" stroke="none" />
  </Icon>
)

export const IconWallpaper = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="4" y="3" width="7" height="18" rx="1" />
    <rect x="13" y="3" width="7" height="18" rx="1" />
    <path d="M7.5 7v.01M7.5 12v.01M16.5 9v.01M16.5 14v.01" />
  </Icon>
)

export const IconLacquer = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M9 3h6v3l1.5 2v11.5A1.5 1.5 0 0 1 15 21H9a1.5 1.5 0 0 1-1.5-1.5V8L9 6V3Z" />
    <path d="M7.5 11h9" />
    <path d="M11 15h2" />
  </Icon>
)

export const IconInsulation = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3 10 12 4l9 6" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9 20v-5.5h6V20" />
    <path d="M5 13h14M5 16.5h14" />
  </Icon>
)

export const IconDrywall = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 12h18M12 4v16" />
    <path d="m6.5 7.5 2 2M16 14.5l2 2" />
  </Icon>
)

export const IconFloor = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
    <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
    <path d="m7.5 10.5 9 4.5" />
  </Icon>
)

export const IconMold = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3c2.5 2.5 4 4.7 4 7.5a4 4 0 0 1-8 0C8 7.7 9.5 5.5 12 3Z" />
    <path d="M12 14.5V21M9 17.5h6" />
  </Icon>
)

export const IconWater = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3c3 3.6 5.5 6.4 5.5 9.5a5.5 5.5 0 0 1-11 0C6.5 9.4 9 6.6 12 3Z" />
    <path d="M9.5 13a2.5 2.5 0 0 0 2.5 2.5" />
  </Icon>
)

export const IconHumidity = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M9 4h6v9.5a3 3 0 1 1-6 0V4Z" />
    <path d="M9 9h6" />
    <circle cx="12" cy="16.5" r="1.4" fill="currentColor" stroke="none" />
  </Icon>
)

/* ----------------------------- UI-Icons ----------------------------- */

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5 3.5h3l1.5 4.2-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4.2 1.5v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3.4 5.2 1.6 1.6 0 0 1 5 3.5Z" />
  </Icon>
)

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Icon>
)

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
)

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
)

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
)

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

export const IconAward = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5 7.5 21l4.5-2.5L16.5 21 15 14.5" />
    <path d="m12 6 1.1 2.2 2.4.3-1.8 1.7.5 2.4L12 11.6 9.8 12.6l.5-2.4-1.8-1.7 2.4-.3L12 6Z" />
  </Icon>
)

export const IconYears = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 21V8l8-5 8 5v13" />
    <path d="M4 21h16" />
    <rect x="9.5" y="13" width="5" height="8" />
    <path d="M9 9.5h6" />
  </Icon>
)

export const IconTeam = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5" />
    <path d="M17 14.5a5.5 5.5 0 0 1 3.5 5.1" />
  </Icon>
)

export const IconLocal = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <path d="M9.5 11.5v-2l2.5-1.8 2.5 1.8v2" />
    <path d="M9.5 11.5h5" />
  </Icon>
)

export const IconChat = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </Icon>
)

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </Icon>
)
