/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";


const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  "./stories/**/*.{js,ts,jsx,tsx}", // Here!
];
const darkMode = "class";
const theme = {
  important: true,
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      "2xl": "128px",
    },
  },
  fontFamily: {
    sans: ["var(--font-manrope)"],
    body: ["var(--font-montserrat)"],
    mono: ["var(--font-raleway)"],
    display: ["var(--font-sharp)"],
  },

  extend: {
    colors: {
      primary: {
        50: "rgb(var(--c-primary-50))",
        100: "rgb(var(--c-primary-100))",
        200: "rgb(var(--c-primary-200))",
        300: "rgb(var(--c-primary-300))",
        400: "rgb(var(--c-primary-400))",
        500: "rgb(var(--c-primary-500))",
        6000: "rgb(var(--c-primary-600))",
        700: "rgb(var(--c-primary-700))",
        800: "rgb(var(--c-primary-800))",
        900: "rgb(var(--c-primary-900))",
      },
      secondary: {
        50: "rgb(var(--c-secondary-50))",
        100: "rgb(var(--c-secondary-100))",
        200: "rgb(var(--c-secondary-200))",
        300: "rgb(var(--c-secondary-300))",
        400: "rgb(var(--c-secondary-400))",
        500: "rgb(var(--c-secondary-500))",
        6000: "rgb(var(--c-secondary-600))",
        700: "rgb(var(--c-secondary-700))",
        800: "rgb(var(--c-secondary-800))",
        900: "rgb(var(--c-secondary-900))",
      },
      neutral: {
        50: "rgb(var(--c-neutral-50))",
        100: "rgb(var(--c-neutral-100))",
        200: "rgb(var(--c-neutral-200))",
        300: "rgb(var(--c-neutral-300))",
        400: "rgb(var(--c-neutral-400))",
        500: "rgb(var(--c-neutral-500))",
        600: "rgb(var(--c-neutral-600))",
        700: "rgb(var(--c-neutral-700))",
        800: "rgb(var(--c-neutral-800))",
        900: "rgb(var(--c-neutral-900))",
      },
      // Add additional theme colors here
      lightBlue: {
        500: "rgb(var(--c-lightBlue-500))",
      },
      darkBlue: {
        500: "rgb(var(--c-darkBlue-500))",
      },
      newBlue: {
        500: "rgb(var(--c-Newblue-500))",
      },
      gold: {
        500: "rgb(var(--c-gold-500))",
      },
      darkGray: {
        500: "rgb(var(--c-darkGray-500))",
      },
      yellow: {
        500: "rgb(var(--c-yellow-500))",
      },
      darkGreen: {
        500: "rgb(var(--c-darkgreen-500))",
      },
      lightGreen: {
        500: "rgb(var(--c-lightGreen-500))",
      },
      backgroundImage: {
        "lines-pattern": "url('/images/linesBg.svg')",
        "dark-lines": "url('/images/whiteLinesBg.svg')",
      },
    },
  },
};

const variants = {
  extend: {},
};
const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
];

export default {
  content,
  darkMode,
  theme,
  variants,
  plugins,
} satisfies Config;
