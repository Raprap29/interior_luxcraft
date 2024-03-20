const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BF8924",

          secondary: "#F2C572",

          accent: "#8C4E03",

          neutral: "#030407",

          "base-100": "#111111",

          info: "#6DB4F2",

          success: "#B5F2AC",

          warning: "#F2E85C",

          error: "#F2636F",
        },
      },
    ],
  },
};

export default tailwindConfig;
