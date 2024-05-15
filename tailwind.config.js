/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // forum: ['Forum', 'serif'],
        // roboto: ['Roboto Mono', 'monospace'],
        suisseintl: ['SuisseIntl', 'serif'],
        retrosailing: ['RetroSailing', 'serif'],
        neuehaasdisplay: ['NeueHaasDisplay', 'serif'],
        helveticanowdisplay: ['HelveticaNowDisplay', 'serif'],
        bbcondensed: ['BBCondensed', 'serif'],
      },
    },
  },
  plugins: [],
}
