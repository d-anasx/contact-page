/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5F9EE9", // Primary blue color
        secondary: "#F7B84B", // Yellow for accents
        accent: "#F06449", // Accent color
        neutral: "#2A3142", // Neutral color
        "base-100": "#ffffff", // Base background color
        "base-content": "#2A3142", // Base text color
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "#F06449", // Red for alerts
          secondary: "#E9547B", // Secondary red
          foreground: "white",
        },
        dark: {
          DEFAULT: "#2A3142", // Dark background
          text: "#FFFFFF", // Text on dark background
        },
        light: {
          DEFAULT: "#FFFFFF", // Light background
          text: "#2A3142", // Text on light background
        },
        text: {
          dark: "#2A3142", // Dark text
          light: "#808487", // Light/secondary text
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#808487",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        regular: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        popup: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#5F9EE9",
          secondary: "#F7B84B",
          accent: "#F06449",
          neutral: "#2A3142",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#2A3142",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        dark: {
          primary: "#5F9EE9",
          secondary: "#F7B84B",
          accent: "#F06449",
          neutral: "#2A3142",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#0f172a",
          "base-content": "#e5e7eb",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    darkTheme: "dark",
  },
}
