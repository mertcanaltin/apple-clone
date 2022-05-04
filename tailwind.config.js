module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-nav-bg': '#000000cc',
        'bg-color-apple': '#fbfbfd',
        'bg-footer-bg': '#f5f5f7',
      },
    },
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
}