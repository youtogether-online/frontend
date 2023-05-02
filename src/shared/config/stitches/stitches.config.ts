import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      normal:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontSizes: {
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
      h4: '1rem',
      h5: '0.875rem',
      h6: '0.75rem',
      body1: '1rem',
      body2: '0.875rem',
      subtitle1: '1rem',
      subtitle2: '0.875rem',
      caption: '0.75rem',
      button: '1rem',
      keyboard: '0.75rem',
      error: '0.75rem',
      link: '1rem',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 600,
    },
    borderWidths: {
      1: '1px',
    },
    radii: {
      1: '3px',
      2: '6px',
      3: '100px',
    },
    sizes: {
      small: '544px',
      medium: '768px',
      large: '1012px',
      xlarge: '1280px',
    },
    lineHeights: {
      condensedUltra: '1',
      condensed: '1.25',
      default: '1.5',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '64px',
      9: '80px',
      10: '96px',
      11: '112px',
      12: '128px',
    },
    zIndices: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 544px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1012px)',
    bp5: '(min-width: 1280px)',
    bp6: '(min-width: 1400px)',
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: {},
  shadows: {
    container: '0px 0px 4px rgba(0, 0, 0, 0.08)',
    button: '0 1px 0 rgba(27,31,36,0.04)',
    avatar: '-2px -2px 0 rgba(255,255,255,0.8)',
    small: '0 1px 0 rgba(27,31,36,0.04)',
    medium: '0 3px 6px rgba(140,149,159,0.15)',
    large: '0 8px 24px rgba(140,149,159,0.2)',
    xlarge: '0 12px 28px rgba(140,149,159,0.3)',
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    footerLogo: '#0d1117',
    inputDisabledBg: 'rgba(110,118,129,0)',
    pageHeaderBg: '#0d1117',
    controlBorderEmphasis: '#606771',
    avatarBg: 'rgba(255,255,255,0.1)',
    avatarBorder: 'rgba(240,246,252,0.1)',
    stackFade: '#30363d',
    stackFadeMore: '#21262d',
    headerText: 'rgba(255,255,255,0.7)',
    headerBg: '#161b22',
    headerDivider: '#8b949e',
    headerLogo: '#fff',
    headerSearchBg: '#0d1117',
    headerSearchBorder: '#30363d',
    fgDefault: '#c9d1d9',
    fgMuted: '#8d949e',
    fgSubtle: '#6e7581',
    fgOnEmphasis: '#fff',
    borderDefault: '#30363d',
    borderMuted: '#21262d',
    borderSubtle: 'rgba(240, 246, 252, 0.1)',
    buttonText: '#c9d1d9',
    buttonBg: '#21262d',
    buttonBorder: 'rgba(240, 246, 252, 0.1)',
    buttonHoverBg: '#30363d',
    buttonHoverBorder: '#8b949e',
    buttonActiveBg: 'hsla(212, 12%, 18%, 1)',
    buttonActiveBorder: '#6e7681',
    buttonSelectedBg: '#161b22',
    buttonCounterBg: '#30363d',
    buttonPrimaryText: '#fff',
    buttonPrimaryBg: '#238636',
    buttonPrimaryBorder: 'rgba(240, 246, 252, 0.1)',
    buttonPrimaryHoverBg: '#2ea043',
    buttonPrimaryHoverBorder: 'rgba(240, 246, 252, 0.1)',
    buttonPrimarySelectedBg: '#238636',
    buttonPrimaryDisabledText: 'rgba(255, 255, 255, 0.5)',
    buttonPrimaryDisabledBg: 'rgba(35, 134, 54, 0.6)',
    buttonPrimaryDisabledBorder: 'rgba(240, 246, 252, 0.1)',
    buttonPrimaryIcon: '#fff',
    buttonPrimaryCounterBg: 'rgba(255, 255, 255, 0.2)',
    buttonOutlineText: '#58a6ff',
    buttonOutlineHoverText: '#58a6ff',
    buttonOutlineHoverBg: '#30363d',
    buttonOutlineHoverBorder: 'rgba(240, 246, 252, 0.1)',
    buttonOutlineHoverCounterBg: 'rgba(255, 255, 255, 0.2)',
    buttonOutlineSelectedText: '#fff',
    buttonOutlineSelectedBg: '#0d419d',
    buttonOutlineSelectedBorder: 'rgba(240, 246, 252, 0.1)',
    buttonOutlineDisabledText: 'rgba(88, 166, 255, 0.5)',
    buttonOutlineDisabledBg: '#0d1117',
    buttonOutlineDisabledCounterBg: 'rgba(31, 111, 235, 0.05)',
    buttonOutlineCounterBg: 'rgba(31, 111, 235, 0.1)',
    buttonDangerText: '#f85149',
    buttonDangerHoverText: '#fff',
    buttonDangerHoverBg: '#da3633',
    buttonDangerHoverBorder: '#f85149',
    buttonDangerHoverIcon: '#fff',
    buttonDangerHoverCounterBg: 'rgba(255, 255, 255, 0.2)',
    buttonDangerSelectedText: '#fff',
    buttonDangerSelectedBg: '#b62324',
    buttonDangerSelectedBorder: '#ff7b72',
    buttonDangerDisabledText: 'rgba(248, 81, 73, 0.5)',
    buttonDangerDisabledBg: '#0d1117',
    buttonDangerDisabledCounterBg: 'rgba(218, 54, 51, 0.05)',
    buttonDangerCounterBg: 'rgba(218, 54, 51, 0.1)',
    buttonDangerIcon: '#f85149',
    neutralEmphasisPlus: '#6e7681',
    neutralEmphasis: '#6e7681',
    neutralMuted: 'rgba(110, 118, 129, 0.4)',
    neutralSubtle: 'rgba(110, 118, 129, 0.1)',
    accentFg: '#58a6ff',
    accentEmphasis: '#1f6feb',
    accentMuted: 'rgba(56, 139, 253, 0.4)',
    accentSubtle: 'rgba(56, 139, 253, 0.15)',
    successFg: '#3fb950',
    successEmphasis: '#238636',
    successMuted: '#238636',
    successSubtle: 'rgba(46, 160, 67, 0.4)',
    attentionFg: '#d29922',
    attentionEmphasis: '#9e6a03',
    attentionMuted: 'rgba(187, 128, 9, 0.4)',
    attentionSubtle: 'rgba(187, 128, 9, 0.15)',
    dangerFg: '#f85149',
    dangerEmphasis: '#da3633',
    dangerMuted: 'rgba(248, 81, 73, 0.4)',
    dangerSubtle: 'rgba(248, 81, 73, 0.15)',
    canvasDefault: '#0E1116',
    canvasOverlay: '#161b22',
    canvasInset: '#010409',
    canvasSubtle: '#161b22',
  },
  shadows: {
    container: '0px 0px 4px rgba(0, 0, 0, 0.08)',
    button: '0 0 transparent',
    avatar: '-2px -2px 0 #0d1117',
    small: '0 0 transparent',
    medium: '0 3px 6px #010409',
    large: '0 8px 24px #010409',
    xlarge: '0 12px 48px #010409',
  },
})
