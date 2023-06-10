import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
// Function to convert hex to RGBA with transparency
const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
//color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? //gray
      {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          transparent: (alpha) => ({
            100: hexToRGBA("#e0e0e0", alpha),
            200: hexToRGBA("#c2c2c2", alpha),
            300: hexToRGBA("#a3a3a3", alpha),
            400: hexToRGBA("#858585", alpha),
            500: hexToRGBA("#666666", alpha),
            600: hexToRGBA("#525252", alpha),
            700: hexToRGBA("#3d3d3d", alpha),
            800: hexToRGBA("#292929", alpha),
            900: hexToRGBA("#141414", alpha),
          }),
        },
        primary: {
          100: "#cccedb",
          200: "#9a9cb7",
          300: "#676b93",
          400: "#35396f",
          500: "#02084b",
          600: "#02063c",
          700: "#01052d",
          800: "#01031e",
          900: "#00020f",
          transparent: (alpha) => ({
            100: hexToRGBA("#cccedb", alpha),
            200: hexToRGBA("#9a9cb7", alpha),
            300: hexToRGBA("#676b93", alpha),
            400: hexToRGBA("#35396f", alpha),
            500: hexToRGBA("#02084b", alpha),
            600: hexToRGBA("#02063c", alpha),
            700: hexToRGBA("#01052d", alpha),
            800: hexToRGBA("#01031e", alpha),
            900: hexToRGBA("#00020f", alpha),
          }),
        },
        //green accent
        greenAccent: {
          100: "#e8f8f1",
          200: "#d1f0e4",
          300: "#b9e9d6",
          400: "#a2e1c9",
          500: "#8bdabb",
          600: "#6fae96",
          700: "#538370",
          800: "#38574b",
          900: "#1c2c25",
          transparent: (alpha) => ({
            100: hexToRGBA("#e8f8f1", alpha),
            200: hexToRGBA("#d1f0e4", alpha),
            300: hexToRGBA("#b9e9d6", alpha),
            400: hexToRGBA("#a2e1c9", alpha),
            500: hexToRGBA("#8bdabb", alpha),
            600: hexToRGBA("#6fae96", alpha),
            700: hexToRGBA("#538370", alpha),
            800: hexToRGBA("#38574b", alpha),
            900: hexToRGBA("#1c2c25", alpha),
          }),
        },
        //red accent
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
          transparent: (alpha) => ({
            100: hexToRGBA("#f8dcdb", alpha),
            200: hexToRGBA("#f1b9b7", alpha),
            300: hexToRGBA("#e99592", alpha),
            400: hexToRGBA("#e2726e", alpha),
            500: hexToRGBA("#db4f4a", alpha),
            600: hexToRGBA("#af3f3b", alpha),
            700: hexToRGBA("#832f2c", alpha),
            800: hexToRGBA("#58201e", alpha),
            900: hexToRGBA("#2c100f", alpha),
          }),
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
          transparent: (alpha) => ({
            100: hexToRGBA("#e1e2fe", alpha),
            200: hexToRGBA("#c3c6fd", alpha),
            300: hexToRGBA("#a4a9fc", alpha),
            400: hexToRGBA("#868dfb", alpha),
            500: hexToRGBA("#6870fa", alpha),
            600: hexToRGBA("#535ac8", alpha),
            700: hexToRGBA("#3e4396", alpha),
            800: hexToRGBA("#2a2d64", alpha),
            900: hexToRGBA("#151632", alpha),
          }),
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        //primary dark blue
        primary: {
          100: "#00020f",
          200: "#01031e",
          300: "#01052d",
          400: "#02063c",
          500: "#02084b",
          600: "#35396f",
          700: "#676b93",
          800: "#9a9cb7",
          900: "#cccedb",
        },
        //green accent
        greenAccent: {
          100: "#1c2c25",
          200: "#38574b",
          300: "#538370",
          400: "#6fae96",
          500: "#8bdabb",
          600: "#a2e1c9",
          700: "#b9e9d6",
          800: "#d1f0e4",
          900: "#e8f8f1",
        },
        //red accent
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        //blue accent
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

//mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },

    typography: {
      fontFamily: ["Mona Sans", "League Spartan", "sans-serif"].join(","),
      title: {
        fontSize: "clamp(3rem, 5vw, 7rem)",
        fontWeight: 700,
        fontStretch: "120%",
      },
      h1: {
        fontSize: "clamp(4rem, 6vw, 7rem)",
        fontWeight: 700,
        fontStretch: "100%",
      },
      h2: {
        fontSize: "clamp(2rem, 3vw, 3rem)",
        fontStretch: "100%",
      },
      h3: {
        fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
        fontStretch: "100%",
      },
      h4: {
        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
        fontStretch: "100%",
      },
      h5: {
        fontSize: "clamp(1rem, 2vw, 1.2rem)",
        fontStretch: "100%",
      },
      h6: {
        fontSize: "clamp(0.8rem, 2vw, 1rem)",
        fontStretch: "100%",
      },
      body1: {
        fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
        fontStretch: "100%",
      },
      body2: {
        fontSize: "clamp(10px, 0.8vw, 13px)",
        fontStretch: "100%",
      },
      tableText: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "clamp(0.75rem, 2vw, 0.75rem)",
        fontStretch: "100%",
      },
      cardText: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "clamp(6px, 1.3vw, 12px)",
        fontStretch: "100%",
      },
      sectionTitle: {
        fontSize: "clamp(3rem, 4vw, 4rem)",
        fontStretch: "100%",
        fontWeight: 700,
      },
      sectionSubtitle: {
        fontSize: "clamp(0.8rem, 2vw, 1rem)",
        fontStretch: "100%",
        fontWeight: 600,
      },
    },
    myGradient: `linear-gradient(135deg,
      ${colors.blueAccent.transparent(0.5)[700]},
      ${colors.redAccent.transparent(0.7)[900]},
      ${colors.blueAccent.transparent(0.5)[600]}
      ,
    )`,

    gradient:
      "radial-gradient(circle, #02084b, #000946, #000940, #00083b, #000735, #010631, #01062d, #010529, #010526, #010423, #010421, #01031e)",

    gradient2: `linear-gradient(315deg, hsl(236, 52%, 55%) 0%, hsl(236, 46%, 52%) 21%, hsl(236, 41%, 49%) 30%, hsl(237, 41%, 46%) 39%, hsl(237, 41%, 43%) 46%, hsl(237, 41%, 40%) 54%, hsl(237, 41%, 37%) 61%, hsl(237, 41%, 34%) 69%, hsl(237, 41%, 31%) 79%, hsl(237, 41%, 28%) 100%)`,

    components: {
      MuiTypography: {
        defaultProps: {
          fontStretch: "100%", // Default font stretch
        },
      },

      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor: colors.primary[600],
            fontFamily: ["Inter", "sans-serif"].join(","),
            "& .MuiTableCell-root": {
              color: "#ffffff",
              fontFamily: ["Inter", "sans-serif"].join(","),
            },
            "& .MuiTableHead-root": {
              backgroundColor: colors.blueAccent[600],
            },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: `
      .slick-dots li button:before {
        color: ${colors.primary[100]}; /* non-active dots color */
        font-size: 8px;;
      }
      .slick-dots li.slick-active button:before {
        color: ${colors.greenAccent[600]}; /* active dot color */
        font-size: 15px;
      }
    `,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
