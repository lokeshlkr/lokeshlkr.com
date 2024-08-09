/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: "'Fira Sans',Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif",
      mono: "'Fira Mono',ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
      serif: "Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif"
    },
    extend: {
      fontSize: {
        "tiny": "0.625rem"
      },
      colors: {
        "bg": {
          "lighter": "oklch(from var(--bg) calc(l + 0.1) c h / <alpha-value>)",
          DEFAULT: "rgb(from var(--bg) r g b / <alpha-value>)",
          "darker": "oklch(from var(--bg) calc(l - 0.1) c h / <alpha-value>)",
        },
        "fg": {
          "lighter": "oklch(from var(--fg) calc(l + 0.1) c h / <alpha-value>)",
          DEFAULT: "rgb(from var(--fg) r g b / <alpha-value>)",
          "darker": "oklch(from var(--fg) calc(l - 0.1) c h / <alpha-value>)",
        },
        "error": "rgb(from var(--error) r g b / <alpha-value>)",
        "success": "rgb(from var(--success) r g b / <alpha-value>)",
        "warn": "rgb(from var(--warn) r g b / <alpha-value>)",
        "info": "rgb(from var(--info) r g b / <alpha-value>)",
        "glass": "rgb(from var(--glass) r g b / <alpha-value>)",
        "accent": "rgb(from var(--accent) r g b / <alpha-value>)",
        "main": "rgb(from var(--main) r g b / <alpha-value>)",
        "transparent": "#0000",
        "btn-shadow": "oklch(from var(--btn-bg,var(--bg)) calc(l - 0.3) calc(c - 0.1) h / <alpha-value>)",
      },
    },
  },
  plugins: [],
}

