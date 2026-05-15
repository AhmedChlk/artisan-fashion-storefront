import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#dfc0b0",
        "on-primary": "#ffffff",
        "primary": "#554034",
        "on-secondary-fixed": "#1d1b19",
        "surface-dim": "#dfd9d5",
        "background": "#fff8f4",
        "secondary-container": "#e8e1dd",
        "on-surface": "#1d1b19",
        "surface-variant": "#e7e1de",
        "surface-container-high": "#ede7e3",
        "outline": "#81756f",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#f6efec",
        "surface-bright": "#fff8f4",
        "on-tertiary-container": "#e0d2ca",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#e8e1dd",
        "surface-container-low": "#f9f2ef",
        "primary-container": "#6e574a",
        "error": "#ba1a1a",
        "on-surface-variant": "#4f453f",
        "surface": "#fff8f4",
        "on-primary-fixed-variant": "#574236",
        "surface-tint": "#715a4c",
        "outline-variant": "#d2c4bc",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#32302e",
        "primary-fixed": "#fcdccb",
        "tertiary": "#4c433d",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#d2c4bc",
        "on-primary-container": "#edcebe",
        "tertiary-container": "#645a54",
        "on-background": "#1d1b19",
        "secondary-fixed-dim": "#cbc5c2",
        "secondary": "#615e5b",
        "on-secondary-container": "#686461",
        "on-error": "#ffffff",
        "tertiary-fixed": "#efe0d7",
        "surface-container-highest": "#e7e1de",
        "on-tertiary-fixed-variant": "#4e453f",
        "inverse-primary": "#dfc0b0",
        "on-tertiary-fixed": "#211a15",
        "on-secondary-fixed-variant": "#494643",
        "on-primary-fixed": "#28180e",
        "surface-container": "#f3ede9"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "section-mobile": "64px",
        "gutter": "32px",
        "reading-max": "640px",
        "content-max": "1280px",
        "section": "128px",
        "narrow-max": "800px"
      },
      fontFamily: {
        "body-lg": ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "headline-lg": ["var(--font-playfair)", "Playfair Display", "serif"],
        "display-lg": ["var(--font-playfair)", "Playfair Display", "serif"],
        "display-lg-mobile": ["var(--font-playfair)", "Playfair Display", "serif"],
        "label-md": ["var(--font-dm-sans)", "DM Sans", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }]
      }
    }
  },
  plugins: [require("@tailwindcss/container-queries")],
};

export default config;
