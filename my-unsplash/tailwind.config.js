module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: 'none' }
        }
      },
      animation: {
        'fade-out': 'fade-out 500ms ease-out'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
