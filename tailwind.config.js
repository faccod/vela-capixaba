/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Cores extraídas do logo oficial (06/09/2026) — idênticas ao logo
      colors: {
        "azul-marinho": "#01416c", // texto "VELA" do logo
        "azul": "#0a5a8f", // tom intermediário pra hover/detalhes
        "azul-claro": "#1e7bb8", // tons mais claros (links hover)
        "dourado": "#ffc000", // sol amarelo do logo (principal)
        "dourado-claro": "#ffd84d", // dourado mais claro (hover)
        "dourado-escuro": "#e6a800", // dourado mais escuro (badges)
        "areia": "#f5f1e8", // fundo de seções (off-white quente)
        "cinza-claro": "#f5f7fa", // cinza claro
        "cinza": "#94a3b8",
        "cinza-escuro": "#475569",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
