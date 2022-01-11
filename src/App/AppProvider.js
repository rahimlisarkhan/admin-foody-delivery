import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import ModalsContextProvider from "../providers/modalsProvider"

import GlobalStyle from "../style/global";



export const AppProvider = ({ children }) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <ModalsContextProvider>
                {children}
                </ModalsContextProvider>

            </ThemeProvider >
        </Router>
    )
}