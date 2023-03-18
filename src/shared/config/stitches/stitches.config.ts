import '@fontsource/roboto'
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
    colors: {
      textPrimary: 'rgba(0, 0, 0, 0.8)',
      textSecondary: 'rgba(0, 0, 0, 0.65)',
      textTertiary: 'rgba(0, 0, 0, 0.45)',
      textWhite: '#fff',
      borderPrimary: 'rgba(0, 0, 0, 8%)',
      textQuaternary: '#ffffff',
      backgroundLayout: '#f7f7f7',
      backgroundInput: '#F6f6f6',
      backgroundContainer: '#ffffff',
      backgroundContainerDark: 'rgba(0, 0, 0, 8%)',
      backgroundMask: 'rgba(0, 0, 0, 0.45)',
      backgroundFooter: '#1c1c1c',
      backgroundDisabled: '#f0f0f0',
      backgroundTextHover: '#e0e0e0',
      fill: 'rgba(0, 0, 0, 0.15)',
      fillSecondary: 'rgba(0, 0, 0, 0.06)',
      border: '#000000',
      borderSecondary: '#e7e7e7',
      borderTertiary: '#f0f0f0',
      primaryBackground: '#b7d9f8',
      primaryBackgroundHover: '#97c7f2',
      primaryBorder: '#5eb0ef',
      primaryBorderHover: '#0090ff',
      primary: '#007DFF',
      primaryHover: '#1B8BFF',
      primaryActive: '#0081f1',
      primaryText: '#5eb0ef',
      primaryTextHover: '#349FF1',
      primaryTextActive: '#0081f1',
      errorBackground: '#fff2f0',
      errorBackgroundHover: '#fff1f0',
      errorBorder: '#ffccc7',
      errorBorderHover: '#ffa39e',
      errorHover: '#ff7875',
      error: '#ff4d4f',
      errorActive: '#d9363e',
      errorTextHover: '#ff7875',
      errorText: '#ff4d4f',
      errorTextActive: '#d9363e',
      successBackground: '#b7dfba',
      successBackgroundHover: '#97d09d',
      successBorder: '#8eec97',
      successBorderHover: '#65ba74',
      successHover: '#46a758',
      success: '#3d9a50',
      successActive: '#297d3c',
      successText: '#3d9a50',
      successTextHover: '#46a758',
      successTextActive: '#297d3c',
      warningBackground: '#f3ba63',
      warningBackgroundHover: '#f3af50',
      warningBorder: '#ee9c2c',
      warningBorderHover: '#ea982a',
      warningHover: '#ffb323',
      warning: '#ffa11b',
      warningActive: '#ad5600',
      warningText: '#ffa11b',
      warningTextHover: '#ee9c2c',
      warningTextActive: '#ad5600',
    },
    fonts: { openSans: 'Roboto, apple-system, sans-serif' },
    fontSizes: {
      h1: '2.5rem',
      h2: '2.375rem',
      h3: '1.875rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
      body1: '16px',
      body2: '14px',
      subtitle1: '16px',
      subtitle2: '14px',
      caption: '12px',
      button: '16px',
      keyboard: '14px',
      error: '12px',
      link: '16px',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      strong: 900,
    },
    shadows: {},
    radii: {
      tertiary: '8px',
      secondary: '10px',
      primary: '15px',
      full: '9999px',
    },
    sizes: {
      containerXxl: '1536px',
      containerXl: '1280px',
      containerLg: '1144px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
})
