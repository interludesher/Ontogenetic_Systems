/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#08090e",
        surface: {
          DEFAULT: "#11131f",
          card: "rgba(17, 19, 31, 0.75)",
          hover: "#181b2e",
          border: "rgba(255, 255, 255, 0.08)",
        },
        cyber: {
          emerald: "#00f5a0",
          violet: "#7b2cbf",
          cyan: "#00d2ff",
        },
        brand: {
          text: "#f8fafc",
          muted: "#94a3b8",
          dark: "#050609",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(0, 245, 160, 0.15) 0%, rgba(123, 44, 191, 0.1) 45%, transparent 70%)',
        'emerald-cyan-gradient': 'linear-gradient(135deg, #00f5a0 0%, #00d2ff 100%)',
        'violet-emerald-gradient': 'linear-gradient(135deg, #7b2cbf 0%, #00f5a0 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #00f5a0 0%, #00d2ff 50%, #7b2cbf 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
