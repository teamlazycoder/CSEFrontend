import { type SVGProps } from 'react'

// lucide-react no longer ships brand icons; minimal inline glyphs kept consistent with the icon grid.
export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.03 3.26 9.29 7.79 10.8.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.68L23.3 22h-6.94l-5.44-6.72L4.7 22H1.6l8.13-9.29L1 2h7.11l4.92 6.14L18.9 2Zm-1.22 18.17h1.72L7.4 3.73H5.55l12.13 16.44Z" />
    </svg>
  )
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.9 3 12 3 12 3h-.01s-4.89 0-8.19.14c-.46.05-1.46.06-2.36 1C.73 4.86.5 6.5.5 6.5S.26 8.42.26 10.34v1.32c0 1.92.24 3.84.24 3.84s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1.01C5.9 19.02 12 19 12 19s4.9-.01 8.2-.15c.46-.06 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.24-1.92.24-3.84v-1.32c0-1.92-.24-3.84-.24-3.83ZM9.75 14.5v-6l6 3-6 3Z" />
    </svg>
  )
}
