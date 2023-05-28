/** @type {import('tailwindcss').Config} */
const { typewindTransforms } = require("typewind/transform");

module.exports = {
  content: { files: ["./src/**/*.{ts,tsx}"], transform: typewindTransforms },
  theme: {
    screens: {
      sm: "320px",
      md: "544px",
      lg: "768px",
      xl: "1012px",
      "2xl": "1280px",
      "3xl": "1400px",
    },
    fontFamily: {
      normal: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Noto Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"],
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "48px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semiBold: "500",
      bold: "600",
    },
    borderRadius: {
      sm: "3px",
      md: "6px",
      lg: "100px",
    },
    container: {
      sm: "544px",
      md: "768px",
      lg: "1012px",
      xl: "1280px",
    },
    boxShadow: {
      container: "var(--shadow-container)",
      button: "var(--shadow-button)",
      avatar: `var(--shadow-avatar)`,
      sm: `var(--shadow-sm)`,
      md: `var(--shadow-md)`,
      lg: `var(--shadow-lg)`,
      xl: `var(--shadow-xl)`,
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      inherit: "inherit",
      footerLogo: "var(--color-footer-logo)",
      pageHeaderBg: "var(--color-page-header-bg)",
      avatarBg: "var(--color-avatar-bg)",
      avatarBorder: "var(--color-avatar-border)",
      stackFade: "var(--color-stack-fade)",
      stackFadeMore: "var(--color-stack-fade-more)",
      headerText: "var(--color-header-text)",
      headerBg: "var(--color-header-bg)",
      headerDivider: "var(--color-header-divider)",
      headerLogo: "var(--color-header-logo)",
      headerSearchBg: "var(--color-header-search-bg)",
      headerSearchBorder: "var(--color-header-search-border)",
      fgDefault: "var(--color-fg-default)",
      fgMuted: "var(--color-fg-muted)",
      fgSubtle: "var(--color-fg-subtle)",
      fgOnEmphasis: "var(--color-fg-on-emphasis)",
      borderDefault: "var(--color-border-default)",
      borderMuted: "var(--color-border-muted)",
      borderSubtle: "var(--color-border-subtle)",
      buttonText: "var(--color-button-text)",
      buttonBg: "var(--color-button-bg)",
      buttonBorder: "var(--color-button-border)",
      buttonHoverBg: "var(--color-button-hover-bg)",
      buttonHoverBorder: "var(--color-button-hover-border)",
      buttonActiveBg: "var(--color-button-active-bg)",
      buttonActiveBorder: "var(--color-button-active-border)",
      buttonCounterBg: "var(--color-button-counter-bg)",
      buttonPrimaryText: "var(--color-button-primary-text)",
      buttonPrimaryBg: "var(--color-button-primary-bg)",
      buttonPrimaryBorder: "var(--color-button-primary-border)",
      buttonPrimaryHoverBg: "var(--color-button-primary-hover-bg)",
      buttonPrimaryHoverBorder: "var(--color-button-primary-hover-border)",
      buttonPrimaryDisabledText: "var(--color-button-primary-disabled-text)",
      buttonPrimaryDisabledBg: "var(--color-button-primary-disabled-bg)",
      buttonPrimaryDisabledBorder: "var(--color-button-primary-disabled-border)",
      buttonPrimaryIcon: "var(--color-button-primary-icon)",
      buttonPrimaryCounterBg: "var(--color-button-primary-counter-bg)",
      buttonOutlineText: "var(--color-button-outline-text)",
      buttonOutlineHoverText: "var(--color-button-outline-hover-text)",
      buttonOutlineHoverBg: "var(--color-button-outline-hover-bg)",
      buttonOutlineHoverBorder: "var(--color-button-outline-hover-border)",
      buttonOutlineHoverCounterBg: "var(--color-button-outline-hover-counter-bg)",
      buttonOutlineSelectedText: "var(--color-button-outline-selected-text)",
      buttonOutlineSelectedBg: "var(--color-button-outline-selected-bg)",
      buttonOutlineSelectedBorder: "var(--color-button-outline-selected-border)",
      buttonOutlineDisabledText: "var(--color-button-outline-disabled-text)",
      buttonOutlineDisabledBg: "var(--color-button-outline-disabled-bg)",
      buttonOutlineDisabledCounterBg: "var(--color-button-outline-disabled-counter-bg)",
      buttonOutlineCounterBg: "var(--color-button-outline-counter-bg)",
      buttonDangerText: "var(--color-button-danger-text)",
      buttonDangerHoverText: "var(--color-button-danger-hover-text)",
      buttonDangerHoverBg: "var(--color-button-danger-hover-bg)",
      buttonDangerHoverBorder: "var(--color-button-danger-hover-border)",
      buttonDangerHoverIcon: "var(--color-button-danger-hover-icon)",
      buttonDangerHoverCounterBg: "var(--color-button-danger-hover-counter-bg)",
      buttonDangerSelectedText: "var(--color-button-danger-selected-text)",
      buttonDangerSelectedBg: "var(--color-button-danger-selected-bg)",
      buttonDangerSelectedBorder: "var(--color-button-danger-selected-border)",
      buttonDangerDisabledText: "var(--color-button-danger-disabled-text)",
      buttonDangerDisabledBg: "var(--color-button-danger-disabled-bg)",
      buttonDangerDisabledCounterBg: "var(--color-button-danger-disabled-counter-bg)",
      buttonDangerCounterBg: "var(--color-button-danger-counter-bg)",
      buttonDangerIcon: "var(--color-button-danger-icon)",
      buttonInvisibleHoverBg: "var(--color-button-invisible-hover-bg)",
      buttonInvisibleSelectedBg: "var(--color-button-invisible-selected-bg)",
      neutralEmphasisPlus: "var(--color-neutral-emphasis-plus)",
      neutralEmphasis: "var(--color-neutral-emphasis)",
      neutralMuted: "var(--color-neutral-muted)",
      neutralSubtle: "var(--color-neutral-subtle)",
      accentFg: "var(--color-accent-fg)",
      accentEmphasis: "var(--color-accent-emphasis)",
      accentMuted: "var(--color-accent-muted)",
      accentSubtle: "var(--color-accent-subtle)",
      successFg: "var(--color-success-fg)",
      successEmphasis: "var(--color-success-emphasis)",
      successMuted: "var(--color-success-muted)",
      successSubtle: "var(--color-success-subtle)",
      attentionFg: "var(--color-attention-fg)",
      attentionEmphasis: "var(--color-attention-emphasis)",
      attentionMuted: "var(--color-attention-muted)",
      attentionSubtle: "var(--color-attention-subtle)",
      dangerFg: "var(--color-danger-fg)",
      dangerEmphasis: "var(--color-danger-emphasis)",
      dangerMuted: "var(--color-danger-muted)",
      dangerSubtle: "var(--color-danger-subtle)",
      canvasDefault: "var(--color-canvas-default)",
      canvasOverlay: "var(--color-canvas-overlay)",
      canvasInset: "var(--color-canvas-inset)",
      canvasSubtle: "var(--color-canvas-subtle)",
      inputDisabledBg: "var(--color-input-disabled-bg)",
      controlBorderEmphasis: "var(--color-control-border-emphasis)",
      canvasBackdrop: "var(--color-canvas-backdrop)",
    },
  },
  plugins: [],
};
