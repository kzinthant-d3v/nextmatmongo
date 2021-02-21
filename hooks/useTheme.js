import { createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import Cookies from "js-cookie";

const MODE = {
  light: "light",
  dark: "dark",
};
const useTheme = () => {
  const [mode, setMode] = useState(() => {
    return Cookies.get("mode") || MODE.light;
  });
  const isDark = (set) => {
    if (set) {
      return () => {
        const newMode = mode === MODE.light ? MODE.dark : MODE.light;
        setMode(newMode);
        Cookies.set("mode", newMode);
      };
    }
    return mode === MODE.dark;
  };
  const colorPalette =
    mode === MODE.light
      ? {
          primary: {
            main: "#00bcd4",
          },
          secondary: {
            light: "#4aedc4",
            main: "#1de9b6",
          },
        }
      : {
          primary: {
            main: "#4aedc4",
          },
          secondary: {
            main: "#00e676",
          },
        };
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Oxygen"].join(","),
    },
    palette: {
      type: mode,
      ...colorPalette,
    },
  });

  return {
    theme,
    isDark,
  };
};

export default useTheme;
