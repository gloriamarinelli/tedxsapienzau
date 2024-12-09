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
}) {
  return (
    <ThemeProvider theme={theme}>
      <Chip
        label={teamName ? teamName : "20" + year}
        variant={active ? "default" : "outlined"} // Only when active is true the Chip will have the default variant
        color={active ? "selected_year" : "white"} // Only when active is true the Chip will have the selected_year color
        component={teamName ? "a" : null} // Only when used for the team name the Chip will be a link
        href={teamName ? "#" + teamId : null} // Only when used for the team name the Chip will be a link
        clickable={active ? false : true} // Only when active is true the Chip will not be clickable
        onClick={onClick} // Only for the year Chips the onClick function will be called
      />
    </ThemeProvider>
  );
}

// Documentations:
// https://mui.com/material-ui/customization/palette/#custom-colors  (Custom Colors)
// https://mui.com/material-ui/react-chip/#basic-chip (Basic Chip)
// https://mui.com/material-ui/api/chip/ (Chip API)
