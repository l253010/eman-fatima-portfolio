import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        lavender: "rgb(var(--lavender) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
        "deep-purple": "rgb(var(--deep-purple) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: { glow: "0 0 32px rgb(var(--primary) / .22)" }
    }
  },
  plugins: []
};
export default config;
