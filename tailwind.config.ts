import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
// @ts-ignore
import pluginClipPath from "tailwind-clip-path";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-our-client': 'linear-gradient(90deg, #435CFF 0%, #834EFF 100%)',
      },
      clipPath: {
        largeCircle: "circle(75% at center)",
      },
      screens: {
        'custom-lg': '900px', // Add custom breakpoint
      },
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        primary: ["var(--font-primary)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--font-secondary)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBackground: "var(--dark-background)", // Dark mode support
        darkForeground: "var(--dark-foreground)",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
        scrollUp: "scrollUp 5s linear infinite",
        scrollDown: "scrollDown 3s linear infinite",
        scrollLeft: "scrollLeft 5s linear infinite",
        scrollRight: "scrollRight 5s linear infinite",
        "slide-in": "slideIn 1.2s ease-in-out",
        bounce: "bounce 2s infinite",
        "spin-slow": "spin 6s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        wobble: "wobble 1s ease-in-out infinite",
        move: "moveUp 6s linear infinite",
        "marquee-horizontal": "marquee-horizontal 10s linear infinite",
        "marquee-vertical": "marquee-vertical 10s linear infinite",
      },
      keyframes: {
        "marquee-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wobble: {
          "26%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      transitionProperty: {
        default: "all",
      },
      transitionTimingFunction: {
        default: "ease-in-out",
      },
      transitionDuration: {
        default: "300ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    pluginClipPath,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".delay-0s": { animationDelay: "0s" },
        ".delay-1s": { animationDelay: "1s" },
        ".delay-2s": { animationDelay: "2s" },
        ".delay-3s": { animationDelay: "3s" },
        ".delay-4s": { animationDelay: "4s" },
        ".delay-5s": { animationDelay: "5s" },
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".gradient-text": {
          background: "linear-gradient(180deg, #FF8E24 9.09%, #FF7729 49.62%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".gradient-text-our-client": {
          background: "background: linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
          WebkitBackgroundClip: "text",
        },
        ".hero-background-gradient": {
          background: "linear-gradient(112.68deg, #5282FF 0%, #834FF1 100%)",
        },
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 4px 4px rgba(0, 0, 0, 0.5)",
        },
      });
    }),
  ],
};

export default tailwindConfig;
