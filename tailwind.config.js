module.exports = {
  mode: 'jit',

  purge: [],

  darkMode: true, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brandOrange: {
          DEAFULT: '#FF5500',
          50: '#FFCFB8',
          100: '#FFC2A3',
          200: '#FFA77A',
          300: '#FF8B52',
          400: '#FF7029',
          500: '#FF5500',
          600: '#C74200',
          700: '#8F3000',
          800: '#571D00',
          900: '#1F0A00'
        },
        brandGreen: {
          DEFAULT: '#53FA00',
          50: '#CCFFB3',
          100: '#BEFF9E',
          200: '#A3FF75',
          300: '#88FF4D',
          400: '#6DFF24',
          500: '#53FA00',
          600: '#40C200',
          700: '#2E8A00',
          800: '#1B5200',
          900: '#081A00'
        },
        brandBlue: {
          DEFAULT: '#3DA8F5',
          50: '#ECF6FE',
          100: '#D8EEFD',
          200: '#B1DCFB',
          300: '#8BCBF9',
          400: '#64B9F7',
          500: '#3DA8F5',
          600: '#0C8FEE',
          700: '#096FB8',
          800: '#074F83',
          900: '#042F4E'
        },
        brandPurple: {
          DEFAULT: '#B300FF',
          50: '#EAB8FF',
          100: '#E4A3FF',
          200: '#D77AFF',
          300: '#CB52FF',
          400: '#BF29FF',
          500: '#B300FF',
          600: '#8C00C7',
          700: '#64008F',
          800: '#3D0057',
          900: '#15001F'
        },
        brandPink: {
          DEFAULT: '#FF0090',
          50: '#FFB8E0',
          100: '#FFA3D7',
          200: '#FF7AC5',
          300: '#FF52B4',
          400: '#FF29A2',
          500: '#FF0090',
          600: '#C70070',
          700: '#8F0051',
          800: '#570031',
          900: '#1F0011'
        },
        brandRed: {
          DEFAULT: '#FF0000',
          50: '#FFB8B8',
          100: '#FFA3A3',
          200: '#FF7A7A',
          300: '#FF5252',
          400: '#FF2929',
          500: '#FF0000',
          600: '#C70000',
          700: '#8F0000',
          800: '#570000',
          900: '#1F0000'
        },
        brandGray: {
          DEFAULT: '#262626',
          50: '#828282',
          100: '#787878',
          200: '#636363',
          300: '#4F4F4F',
          400: '#3A3A3A',
          500: '#262626',
          600: '#0A0A0A',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        }
      }
    }
  },

  plugins: [require('@tailwindcss/forms')]
}
