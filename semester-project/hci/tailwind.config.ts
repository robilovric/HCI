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
        "yellow-custom": "#FCF800",
        "gray-custom": "#34393C",
        "gray-text-custom": "#8C9093",
        "night-black": "#000F08",
        "french-gray": "#B8B8D1",
        "lapis-blue": "#3C6997",
        "light-green": "#8FE388",
        "emrald-green": "#58BC82",
      },
    },
  },
  plugins: [],
};

export default config;
