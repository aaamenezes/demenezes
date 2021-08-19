import { getGutter } from '../utils/getGutter'

const color = {
  red: '#D10015',
  red2: '#C40014',
  red3: '#AB0011',
  red4: '#91000F',
  red5: '#85000D',
  redAlt1: '#fc1f0f',
  redAlt2: '#d11a0d',
  redAlt3: '#c4170b',
  redAlt4: '#bd170b',
  redAlt5: '#b0140a',
  redAlt6: '#ab150a',
  redAlt7: '#961209',
  redAlt8: '#911209',
  redAlt9: '#7d0f07',
  white: '#FFFFFF',
  gray1: '#FAFAFA',
  gray: '#EEEEEE',
  gray3: '#DDDDDD',
  gray4: '#D4D4D4',
  gray5: '#D0D0D0',
  gray6: '#CCCCCC',
  gray7: '#BBBBBB',
  gray8: '#AAAAAA',
  black: '#121212',
  blackAlt: '#333333'
}

const borderRadius = getGutter(1)

const boxShadow = {
  low: '0 0 40px -30px black',
  medium: '0 0 40px -20px black',
  high: '0 0 40px -10px black'
}

const breakpoints = {
  xs: '0',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
  xxl: '1400'
}

const fontFamily = {
  title: 'Ubuntu, sans-serif',
  text: '"Montserrat", sans-serif',
  code: 'Ubuntu Mono, sans-serif'
  // Fontes reservas caso dê ruim
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
  pageTitle: '3.375em', // h1
  sectionTitle: '2.25em', // h2
  articleText: '1.5em', // h3, button
  text: '1em', // p, a, span
  subText: '.667em',
  subSubText: '.444em',
  base: {
    desktop: '20px',
    mobile: '16px'
  }
}

const fontWeight = {
  regular: '400', // text
  semiBold: '600', // h2, h3, button
  bold: '700' // h1
}

const letterSpacing = {
  // ainda não sei quais são os valores
  // title: ,
  // text:
}

const lineHeight = {
  title: 1.7,
  text: 1.2
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
  transition,
  zIndex
}
