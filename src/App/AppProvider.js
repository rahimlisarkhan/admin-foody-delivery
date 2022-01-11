import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";


  export const AppProvider = ({children}) => {
      return(
      <Router>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
      </Router>
      )
  }