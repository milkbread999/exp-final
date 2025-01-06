module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        EXlightPink: '#FFEDEB',
        EXsalmon: '#FF8070',
        EXpink: '#FF708D',
        EXdarkPurple: '#541C33',
        EXdarkerPurple: '#210b14',
        EXcoral: '#FF8A5E',
        EXlightOrange:'#ffd5bd'
      },
      
      fontFamily: {
        heading: ['Funnel Display', 'sans-serif'], // Replace 'sans' with any custom name if preferred
        body: ['Figtree', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js