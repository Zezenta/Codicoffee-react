// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleCC: "#830abb",
        blackCC: "#222324",
        brownCC: "#6F3624",
        blueCC: "#00509C",
        whiteCC: "#E9E9E9",
      },
      animation: {
        draw: "draw 0.5s ease-in-out forwards",
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
      },
    },
  },
  plugins: [],
} satisfies Config;
