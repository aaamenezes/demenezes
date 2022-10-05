const borderRadius = '0.3rem'

const boxShadow = {
  low: '0 0 40px -30px black',
  medium: '0 0 40px -20px black',
  high: '0 0 40px -10px black'
}

const breakpoints = {
  xs: 0,
  sm: 425, // No Bootstrap era 576 mas achei mto próximo do MD
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xxxl: 2000
}

const color = {
  red_50: '#fdeaed',
  red_100: '#fbcacf',
  red_200: '#e89695',
  red_300: '#db6d6c',
  red_400: '#e34d48',
  red_500: '#e63c2e',
  red_600: '#d8322d',
  red_700: '#c62827',
  red_800: '#b92121',
  red_900: '#aa1515',
  neutral_50: '#ffffff', // white
  neutral_100: '#fafafa', // white
  neutral_200: '#f5f5f5', // gray
  neutral_300: '#f0f0f0', // gray
  neutral_400: '#dedede', // gray
  neutral_500: '#c2c2c2', // gray
  neutral_600: '#979797', // gray
  neutral_700: '#555555', // gray
  neutral_800: '#323232', // black
  neutral_900: '#121212', // black
  transparent: 'rgba(0,0,0,0)' // Obrigado Safari
}

const fontFamily = {
  // title: 'Ubuntu, sans-serif',
  title: '"Montserrat", sans-serif',
  text: '"Montserrat", sans-serif'

  /**
   * Fonte para código no post
   * Mas foi substituído pelo estilo do PrismJS
   */

  // code: 'Ubuntu Mono, sans-serif'

  /**
   * Fontes reservas caso dê ruim
   */

  // fontFamily: 'Raleway, sans-serif',
  // fontFamily: 'Open Sans, sans-serif',
}

/**
 * Fator de escala: 1500
 * Link do type-scale com a configuração atual
*/

// eslint-disable-next-line max-len
// https://type-scale.com/?size=20&scale=1.500&text=A%20Visual%20Type%20Scale&font=Montserrat&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false

const fontSize = {
  // O tamanho maior sobrou '4.209rem'
  h1: '3.157rem', // pageTitle
  h2: '2.369rem', // sectionTitle
  h3: '1.777rem', // articleTitle
  h4: '1.333rem', // articleSubtitle
  text: '1rem', // p, a, span
  small: '0.75rem',
  html: {
    xs: '16px',
    sm: '17px',
    md: '18px',
    lg: '19px',
    xl: '20px'
  }
}

const fontWeight = {
  // black: '900'
  // extraBold: '800',
  h1: '700', // bold
  h2: '600', // semiBold
  h3: '600', // semiBold
  h4: '500', // medium
  button: '600', // semiBold
  text: '400' // regular
  // light: '300',
  // extraLight: '200',
  // thin: '100',
}

const letterSpacing = {
  h1: '-1px', // pageTitle
  h2: '-0.5px', // sectionTitle
  h3: '-0.5px', // articleTitle
  h4: '0', // articleSubtitle
  button: '1.5px', // articleTitle
  text: '0' // p, a, span
}

const lineHeight = {
  h1: 1.3, // pageTitle
  h2: 1.3, // sectionTitle
  h3: 1.3, // articleTitle
  h4: 1.7, // articleSubtitle
  button: 1,
  text: 1.7 // p, a, span
}

const spacing = {
  h1: 3,
  h2: 2.5,
  h3: 2,
  h4: 1.5,
  text: 1.5,
  small: 0.5
}

const opacity = {
  light: {
    rgb: '.3',
    hex: '4D'
  },
  medium: {
    rgb: '.6',
    hex: '99'
  },
  hard: {
    rgb: '.9',
    hex: 'E6'
  }
}

const transition = {
  slow: '1.3s',
  medium: '.8s',
  fast: '.3s'
}

const zIndex = {
  under: -1,
  relative: 900,
  dropdown: 1000,
  absolute: 1010,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
}

export const theme = {
  color,
  borderRadius,
  boxShadow,
  breakpoints,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  opacity,
  spacing,
  transition,
  zIndex
}
