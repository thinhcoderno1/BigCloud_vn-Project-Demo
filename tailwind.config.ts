import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#EFF6FF",
        },
        electric: {
          DEFAULT: "#38BDF8",
          dark: "#0284C7",
        },
        navy: {
          deep: "#07111F",
          surface: "#0D1726",
          card: "#121E33",
          border: "#1E293B",
        },
        surface: {
          DEFAULT: "#F6F8FB",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#E2E8F0",
          dark: "#1E293B",
          subtle: "#F1F5F9",
        },
        status: {
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#EF4444",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        container: "1280px",
        content: "1200px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
        'elevated': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.08)',
        'dark-card': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'glow-primary': '0 0 20px -3px rgba(37, 99, 235, 0.35)',
        'glow-electric': '0 0 20px -3px rgba(56, 189, 248, 0.35)',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
        'grid-pattern': 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)',
        'dark-grid-pattern': 'radial-gradient(circle, #1E293B 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;
