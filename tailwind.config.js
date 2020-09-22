const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
  theme: {
    extend: {
      colors: {
        danger: "#ff5f40",
        info: {
          900: "#234e52",
          800: "#285e61",
        },
        blankHunt: {
          600: "#222831",
          500: "#393e46",
        },
        greenHunt: {
          500: "#29a19c",
          300: "#a3f7bf",
        },
      },
      width: {
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
    fontFamily: {
      monse: ["Grenze Gotisch"],
      montserrat: ["Montserrat"],
    },
  },
  variants: {
    borderStyle: ["responsive", "hover", "focus", "active"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
