import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: "#fbfaf6",
          darkBg: "#15161a",
          surface: "#ffffff",
          surfaceDark: "#1a1c22",
          border: "#e2dfd7",
          borderDark: "#2c2e35",
        },
        ink: {
          DEFAULT: "#1b1b1f",
          dark: "#e6e6e8",
          secondary: "#55555c",
          secondaryDark: "#9a9aab",
          muted: "#7a7a85",
          mutedDark: "#6c6c78",
        },
        accent: {
          DEFAULT: "#a11d1d",
          hover: "#871515",
          dark: "#ff7b72",
          darkHover: "#ff9b94",
          tint: "#f7eded",
          tintDark: "#2a1818",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "STIX Two Text",
          "Georgia",
          "Cambria",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "IBM Plex Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
