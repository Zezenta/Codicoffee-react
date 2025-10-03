import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary palette: Modern purple-coffee theme
        purpleCC: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#830abb",
          600: "#7c0aa8",
          700: "#6e0a95",
          900: "#4a0767",
        },
        coffeeCC: {
          50: "#fdf8f3",
          100: "#f9f0e3",
          500: "#8B4513", // Saddle brown for coffee theme
          600: "#7D3A0F",
          700: "#6F3212",
          900: "#4A2610",
        },
        blackCC: "#222324",
        brownCC: "#6F3624",
        blueCC: "#00509C",
        whiteCC: "#E9E9E9",
        // Neutral grays for modern feel
        grayModern: {
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
          400: "#cbd5e1",
          500: "#94a3b8",
          600: "#64748b",
          700: "#475569",
          800: "#334155",
          900: "#1e293b",
        },
      },
      fontFamily: {
        // Extend with modern fonts
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "var(--font-heading)"],
      },
      animation: {
        draw: "draw 0.5s ease-in-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        draw: {
          from: {
            "stroke-dasharray": "300",
            "stroke-dashoffset": "300",
          },
          to: {
            "stroke-dasharray": "300",
            "stroke-dashoffset": "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(131, 10, 187, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(131, 10, 187, 0.6)" },
        },
      },
      // Custom shadows for depth
      boxShadow: {
        "glow-purple": "0 0 20px rgba(131, 10, 187, 0.3)",
        "card-modern": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      // Border radius for modern cards
      borderRadius: {
        "modern": "12px",
        "xl-modern": "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
