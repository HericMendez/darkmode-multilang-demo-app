module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  darkMode: 'class',

  theme: {

    extend: {
      colors: {
        //light_mode:
        bg_light: '#ccd6f6',
        box_light: '#e0e0e0',
        title_light: '#222222',
        text_light: '#455a64',
        detail_light: '#6200ee',

        //dark mode:
        bg_dark: '121212',
        box_dark: '#222222',
        title_dark: '#fff',
        text_dark: '#ccd6f6',
        detail_dark: '#bb86fc',

      },
  
    },
  },
  plugins: [],
}
