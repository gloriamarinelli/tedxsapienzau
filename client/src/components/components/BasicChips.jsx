import * as React from "react";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#a6a6a6",
      contrastText: "#FFFFFF",
    },
    selected_year: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#a6a6a6",
      contrastText: "#000000",
    },
  },
});

export default function BasicChips({
  teamName,
  teamId,
  active = false,
  year,
  onClick = null,
  backgroundColor = "",
}) {
  return (
    <ThemeProvider theme={theme}>
      <Chip
        label={teamName ? teamName : "20" + year}
        variant={active ? "default" : "outlined"} // Solo quando active è true, la Chip avrà il variant 'default'
        color={active ? "selected_year" : "white"} // Solo quando active è true, la Chip avrà il colore 'selected_year'
        component={teamName ? "a" : null} // Solo quando usata per il nome della squadra, la Chip sarà un link
        href={teamName ? "#" + teamId : null} // Solo quando usata per il nome della squadra, la Chip sarà un link
        clickable={active ? false : true} // Solo quando active è true, la Chip non sarà cliccabile
        onClick={onClick} // Solo per le Chips dell'anno, verrà chiamata la funzione onClick
        style={{ backgroundColor }} // Imposta il colore di sfondo
      />
    </ThemeProvider>
  );
}

// Documentations:
// https://mui.com/material-ui/customization/palette/#custom-colors  (Custom Colors)
// https://mui.com/material-ui/react-chip/#basic-chip (Basic Chip)
// https://mui.com/material-ui/api/chip/ (Chip API)
