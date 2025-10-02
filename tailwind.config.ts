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
        whiteCC: "#E9E9E9"
      }
    }
  },
  plugins: []
} satisfies Config;