/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`, 
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/content/**/*.{md,mdx}`,
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--background))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--background))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--foreground))",
        },
        saffron: "hsl(var(--saffron))",
        terracotta: "hsl(var(--terracotta))",
        forest: "hsl(var(--forest))",
        cream: "hsl(var(--cream))",
        surface: {
          warm: "hsl(var(--surface-warm))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        destructive: "hsl(var(--destructive))",

        // Keeping old color names as aliases for compatibility
        ink: {
          950: "hsl(var(--foreground))",
          900: "hsl(var(--foreground) / 0.9)",
          800: "hsl(var(--foreground) / 0.8)",
          100: "hsl(var(--muted))",
        },
        sand: {
          50: "hsl(var(--background))",
          100: "hsl(var(--surface-warm))",
          200: "hsl(var(--muted))",
        },
        marigold: {
          50: "hsl(var(--surface-warm))",
          500: "hsl(var(--saffron))",
          600: "hsl(var(--saffron) / 0.9)",
        },
        terracotta: {
          500: "hsl(var(--terracotta))",
          600: "hsl(var(--terracotta) / 0.9)",
        },
        indigo: {
          500: "hsl(var(--secondary))",
          600: "hsl(var(--secondary) / 0.9)",
        },
      },
      fontFamily: {
        display: [`var(--font-display)`, `serif`],
        ui: [`var(--font-ui)`, `sans-serif`],
        body: [`var(--font-body)`, `sans-serif`],
        heading: [`var(--font-heading)`, `serif`],
        caption: [`var(--font-caption)`, `sans-serif`],
        sans: [`var(--font-body)`, `ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Inter`, `Helvetica`, `Arial`, `sans-serif`],
        serif: [`var(--font-display)`, `ui-serif`, `Georgia`, `Cambria`, `Times New Roman`, `Times`, `serif`],
      },
      boxShadow: {
        soft: `0 12px 28px rgba(45, 39, 36, 0.10)`,
        lift: `0 18px 50px rgba(45, 39, 36, 0.14)`,
      },
      borderRadius: {
        xl: `1rem`,
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: `floaty 6s ease-in-out infinite`,
      },
    },
  },
  plugins: [],
}
