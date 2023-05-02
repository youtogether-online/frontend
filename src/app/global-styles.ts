import { opinionated } from 'stitches-normalize-css'
import { globalCss } from '@/shared/config/stitches/stitches.config'

export const globalStyles = globalCss(...opinionated, {
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    fontFamily: '$normal',
  },
  'html': {
    boxSizing: 'border-box',
  },
  'input::placeholder': {
    fontSize: '$caption',
  },
  'body': {
    fontWeight: '$normal',
    fontFamily: '$normal',
  },
  'ul': {
    listStyle: 'none',
  },
})
