/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors')

const rem = 16

const pxToRem = px => Math.round((px / rem) * 100) / 100 + 'rem'
const times = n => Array.from({ length: n }, (_, i) => i + 1)

const spacing = times(300).reduce((acc, spacing) => {
  acc[spacing] = pxToRem(spacing)
  return acc
}, {})

const borderRadius = times(30).reduce((acc, borderRadius) => {
  acc[borderRadius] = pxToRem(borderRadius)
  return acc
}, {})

const fontSize = times(35).reduce((acc, fontSize) => {
  acc[fontSize] = pxToRem(fontSize)
  return acc
}, {})

const lineHeight = times(40).reduce((acc, lineHeight) => {
  acc[lineHeight] = pxToRem(lineHeight)
  return acc
}, {})

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'image-right': 'imageRight 14s ease-in-out infinite',
        'image-left': 'imageLeft 14s ease-in-out infinite',
        'separator': 'separator 14s ease-in-out infinite',
        'geometry-1': 'geometry 14s ease-in-out infinite',
        'geometry-2': 'geometry1 14s ease-in-out infinite',
      },
      boxShadow: {
        'interactive-1': '0px 4px 4px rgba(0, 0, 0, 0.08)',
        'interactive-2': '0px 20px 12px 0px rgba(0, 0, 0, 0.12)'
      },
      flex: {
        0.25: 0.25,
        0.3: 0.3,
        0.7: 0.7,
        0.75: 0.75,
        1: '1 1 0%',
        1.2: '1 2 1',
        2: '2 2 0%',
        2.1: '2 1 0%',
        3: '3 2 0%',
        auto: '1 1 auto',
        none: 'none'
      },
      colors,
      fontFamily: {
        abc: ['Inter', 'sans-serif']
      },
      fontSize: {
        ...fontSize,
        24: pxToRem(24),
        28: pxToRem(28),
        30: pxToRem(30),
        36: pxToRem(36),
        38: pxToRem(38),
        40: pxToRem(40),
        46: pxToRem(46),
        48: pxToRem(48),
        58: pxToRem(58),
        64: pxToRem(64),
        80: pxToRem(80),
        100: pxToRem(100),
      },
      lineHeight: {
        ...lineHeight,
        none: '1',
        normal: '1.5',
        medium: '3',
      },
      backgroundPosition: theme => theme('positions'),
      objectPosition: theme => theme('positions'),
      positions: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      screens: {
        /* If you change this, check Breakpoint types and useWindowSize */
        'large-desktop': { max: '1800px' },
        desktop: { max: '1200px' },
        tablet: { max: '900px' },
        mobile: { max: '600px' }
      },
      spacing: {
        ...spacing,
        '1/2': '50%',
        'full-30': `calc(100% - ${pxToRem(30)})`,
        200: pxToRem(200),
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        '100%': '100%'
      },
      borderRadius: {
        ...borderRadius,
        15: pxToRem(15),
        50: pxToRem(50)
      },
      ringWidth: {
        0: 0,
        DEFAULT: pxToRem(1),
        2: pxToRem(2)
      },
      ringOffsetWidth: {
        0: 0,
        DEFAULT: pxToRem(1),
        2: pxToRem(2)
      },
      divideWidth: {
        DEFAULT: pxToRem(1),
        0: pxToRem(0),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        6: pxToRem(6),
        8: pxToRem(8)
      },
      backgroundImage: {
        'blog': 'url("/blog.webp")',
        'platforms': 'url("/platforms.png")',
      },
      maxWidth: {
        ...spacing,
        600: pxToRem(600),
        660: pxToRem(660),
        800: pxToRem(800),
        880: pxToRem(880),
        900: pxToRem(900),
        1200: pxToRem(1200),
        1400: pxToRem(1400),
        '25%': '25%',
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '80%': '80%',
        '100%': '100%',
        screen: '100vw',
        fit: 'fit-content'
      },
      minWidth: {
        ...spacing,
        262: pxToRem(262),
        320: pxToRem(320),
        screen: '100vw'
      },
      maxHeight: {
        ...spacing,
        234: pxToRem(234),
        300: pxToRem(300),
        350: pxToRem(350),
        400: pxToRem(400),
        474: pxToRem(474),
        800: pxToRem(800),
        1200: pxToRem(1200),
        auto: 'auto',
        screen: '100vh',
        fit: 'fit-content'
      },
      minHeight: {
        ...spacing,
        500: pxToRem(500),
        screen: '100vh'
      },
      width: {
        40: pxToRem(40),      
        400: pxToRem(400),      
        450: pxToRem(450),
        inherit: 'inherit',
        auto: 'auto',
        fit: 'fit-content',
        screen: '100vw'
      },
      height: {
        100: pxToRem(100),
        500: pxToRem(500),        
        750: pxToRem(750),
        800: pxToRem(800),
        1000: pxToRem(1000),
        '25%': '25%',
        '30%': '30%',
        '33%': '33.333%',
        '50%': '50%',
        '66%': '66.666%',
        '75%': '75%',
        full: '100%',
        inherit: 'inherit',
        auto: 'auto',
        fit: 'fit-content',
        screen: '100vh'
      },
      rotate: {
        360: '360deg'
      },
      fontFamily: {
        regarn: "Regarn",
        manrope: "Manrope"
      }
    }
  }
}
