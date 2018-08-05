import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'SHE Choir',
  baseFontSize: '16px',
  baseLineHeight: 1.5625,
  googleFonts: [
    {
      name: 'Raleway Dots',
      styles: ['400']
    },
    {
      name: 'Rubik',
      styles: ['400']
    },
    {
      name: 'Raleway',
      styles: ['400, 600']
    }
  ],
  headerFontFamily: ['Raleway', 'serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  headerColor: '#3f3f3f',

  bodyColor: '#3f3f3f',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#fb251b',
      textDecoration: 'underline'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2)
    },
    blockquote: {
      ...scale(1 / 5),
      color: '#3f3f3f',
      paddingLeft: rhythm(18 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(6 / 16)} solid`,
      borderColor: '#fcea0e'
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: '#fcea0e',
        paddingLeft: rhythm(9 / 16)
      }
    }
  })
}
const typography = new Typography(theme)

export default typography
