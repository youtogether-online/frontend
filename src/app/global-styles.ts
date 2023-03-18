import { globalCss } from '@/shared/config/stitches/stitches.config'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
  },
  body: {
    fontWeight: 400,
    fontFamily: '$openSans',
    background: 'linear-gradient(180deg, #fff 6.1%, $backgroundLayout 68.7%);',
    color: '$textPrimary',
  },
  ul: {
    listStyle: 'none',
  },
  button: {
    outline: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
})
