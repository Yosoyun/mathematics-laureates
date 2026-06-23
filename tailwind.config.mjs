import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        obsidian: "#111315",
        navy: "#111827",
        charcoal: "#25282C",
        ivory: "#F6F0E5",
        parchment: "#EEE4D2",
        gold: "#B6924A",
        champagne: "#D4BC83",
        bronze: "#8F6E3B",
        ink: "#202226",
        muted: "#666A70",
        sage: "#64766A",
        burgundy: "#6F2D3A",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        math: ["STIX Two Math", "Cambria Math", "serif"],
      },
      boxShadow: {
        editorial: "0 18px 60px rgba(17, 19, 21, 0.12)",
      },
    },
  },
  plugins: [typography],
};
