import { type PaletteOptions, type PaletteMode } from "@mui/material";

const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#1a7e25",
          },
          secondary: {
            main: "#ec7609",
          },
          error: {
            main: "#f44336",
          },
          background: {
            default: "#000000",
            paper: "#161616",
          },
        }
      : {}),
  } as PaletteOptions,
});

export default theme;
