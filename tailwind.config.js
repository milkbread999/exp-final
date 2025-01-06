module.exports = {
  content: [
    "./*.html", // Matches all HTML files in the root
    "./**/*.html", // Matches HTML files in subdirectories
  ],
  theme: {
    extend: {
      colors: {
        EXlightPink: '#FFEDEB',
        EXsalmon: '#FF8070',
        EXpink: '#FF708D',
        EXdarkPurple: '#541C33',
        EXdarkerPurple: '#210b14',
        EXcoral: '#FF8A5E',
        EXlightOrange: '#ffd5bd'
      },
      fontFamily: {
        heading: ['Funnel Display', 'sans-serif'], // Custom heading font
        body: ['Figtree', 'sans-serif'],           // Custom body font
      },
    },
  },
  plugins: [],
};
