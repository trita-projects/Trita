import * as React from "react"

type LogoProps = {
  className?: string
  title?: string
}

export default function Logo({ className, title = "Tritā" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="trita-g" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f4b000" />
          <stop offset="0.5" stopColor="#cf4a2c" />
          <stop offset="1" stopColor="#2f3db2" />
        </linearGradient>
      </defs>

      <path
        d="M32 6c4.8 5.8 10.7 9.6 18 11.6-7.3 2-13.2 5.8-18 11.6-4.8-5.8-10.7-9.6-18-11.6C21.3 15.6 27.2 11.8 32 6Z"
        fill="url(#trita-g)"
      />

      <path
        d="M16.5 27.5c4.4 1.6 8.2 4.3 11.4 8.2 1.2 1.5 2.3 3 4.1 3 1.8 0 2.9-1.5 4.1-3 3.2-3.9 7-6.6 11.4-8.2 1.2-.5 1.9.9 1 1.8-3.6 3.6-6.2 7.4-7.9 11.6-1.1 2.8-3.9 6.6-8.6 6.6s-7.5-3.8-8.6-6.6c-1.7-4.2-4.3-8-7.9-11.6-.9-.9-.2-2.3 1-1.8Z"
        fill="#07060a"
        opacity="0.08"
      />

      <path
        d="M32 27c0 0 7 8.6 7 17.5S35.9 58 32 58s-7-4.6-7-13.5S32 27 32 27Z"
        fill="url(#trita-g)"
      />

      <path
        d="M32 29.3c0 0 4.9 6.8 4.9 14.1S34.9 54.6 32 54.6s-4.9-3.9-4.9-11.2S32 29.3 32 29.3Z"
        fill="#ffffff"
        opacity="0.7"
      />

      <circle cx="32" cy="44" r="1.6" fill="#07060a" opacity="0.25" />
    </svg>
  )
}
