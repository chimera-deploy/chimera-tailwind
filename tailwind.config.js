module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { color: theme('colors.transparent') },
          '100%': { color: theme('colors.tyrianpurple.500') },
        },
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      greensheen: '#66AC9A',
      tyrianpurple: '#69163E',
      sinopia: '#CB4A25',
      flame: '#D16535',
      goldenrod: '#DEA630'
    },
    fontFamily: {
      'koulen': ['Koulen', 'cursive'],
      'sans ': ['Source Sans Pro', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
  },
  plugins: [],
}
