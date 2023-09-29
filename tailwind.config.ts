/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

function customColors(cssVar: string) {
  return ({
    opacityVariable,
    opacityValue,
  }: {
    opacityVariable?: string;
    opacityValue?: number;
  }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(--${cssVar}), var(--${opacityVariable}, 1))`;
    }
    return `rgb(var(--${cssVar}))`;
  };
}

export const darkMode = ["class"];
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  "./stories/**/*.{js,ts,jsx,tsx}", // Here!
];

export const theme = {
  container: {
    center: true,
    padding: "1rem",
    screens: {
      "2xl": "1890px",
    },
  },
  fontFamily: {
    sans: ["var(--font-manrope)"],
    body: ["var(--font-montserrat)"],
    mono: ["var(--font-raleway)"],
    display: ["var(--font-sharp)"],
  },
  extend: {
    screens: {
      xs: "480px",
      xxs: "380px",
    },
    flex: {
      full: "0 0 100%",
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",

      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      warning: "hsl(var(--warning))",
      "warning-foreground": "hsl(var(--warning-foreground))",

      primary: {
        50: customColors("--c-primary-50"),
        100: customColors("--c-primary-100"),
        200: customColors("--c-primary-200"),
        300: customColors("--c-primary-300"),
        400: customColors("--c-primary-400"),
        500: customColors("--c-primary-500"),
        6000: customColors("--c-primary-600"),
        700: customColors("--c-primary-700"),
        800: customColors("--c-primary-800"),
        900: customColors("--c-primary-900"),
      },
      secondary_: {
        50: customColors("--c-secondary-50"),
        100: customColors("--c-secondary-100"),
        200: customColors("--c-secondary-200"),
        300: customColors("--c-secondary-300"),
        400: customColors("--c-secondary-400"),
        500: customColors("--c-secondary-500"),
        6000: customColors("--c-secondary-600"),
        700: customColors("--c-secondary-700"),
        800: customColors("--c-secondary-800"),
        900: customColors("--c-secondary-900"),
      },
      neutral: {
        50: customColors("--c-neutral-50"),
        100: customColors("--c-neutral-100"),
        200: customColors("--c-neutral-200"),
        300: customColors("--c-neutral-300"),
        400: customColors("--c-neutral-400"),
        500: customColors("--c-neutral-500"),
        6000: customColors("--c-neutral-600"),
        700: customColors("--c-neutral-700"),
        800: customColors("--c-neutral-800"),
        900: customColors("--c-neutral-900"),
      },
      lightBlue: {
        500: customColors("--c-lightBlue-500"),
      },
      darkBlue: {
        500: customColors("--c-darkBlue-500"),
      },
      Newblue: {
        500: customColors("--c-Newblue-500"),
      },
      gold: {
        500: customColors("--c-gold-500"),
      },
      darkGray: {
        500: customColors("--c-darkGray-500"),
      },
      yellow: {
        500: customColors("--c-yellow-500"),
      },
      darkgreen: {
        500: customColors("--c-darkgreen-500"),
      },
      lightGreen: {
        500: customColors("--c-lightGreen-500"),
      },
    },
    backgroundImage: {
      "lines-pattern": "url('/images/linesBg.svg')",
      "dark-lines": "url('/images/whiteLinesBg.svg')",
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      heading: ["var(--font-heading)", ...fontFamily.sans],
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};

export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
];
