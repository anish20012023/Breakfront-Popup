import React from "react";
import { mainTheme } from "./mainTheme";
import Main from "./Main/Main";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
