/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.emerald.400'),
            },
            h2: {
              color: theme('colors.emerald.400'),
            },
            h3: {
              color: theme('colors.emerald.400'),
            },
            h4: {
              color: theme('colors.emerald.400'),
            },
            a: {
              color: theme('colors.emerald.800'),
            },
            
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
