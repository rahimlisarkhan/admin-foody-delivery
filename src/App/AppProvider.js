import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../style/global";

import { theme } from "../style/theme";


export const AppProvider = ({ children }) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider >
        </Router>
    )
}