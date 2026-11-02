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
          bg: "#FAF9F6",
          darkBg: "#111418",
          surface: "#FFFFFF",
          surfaceDark: "#181D24",
          cardDark: "#1F242C",
        },
        ink: {
          DEFAULT: "#171717",
          dark: "#E8E8E8",
          secondary: "#666666",
          secondaryDark: "#A0AEC0",
          muted: "#888888",
          mutedDark: "#718096",
        },
        academic: {
          blue: "#243B64",
          blueLight: "#35548A",
          blueDark: "#162540",
          border: "#DDDDDD",
          borderDark: "#2D3748",
          tint: "#F2F5FA",
          tintDark: "#1A2332",
          highlight: "#8B1E1E",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Charter",
          "Bitstream Charter",
          "Sitka Text",
          "Cambria",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
