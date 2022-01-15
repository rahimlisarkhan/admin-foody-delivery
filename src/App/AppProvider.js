import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import ModalsContextProvider from "../providers/modalsProvider"
import GlobalStyle from "../style/global";
import { store } from '../store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppProvider = ({ children }) => {
    return (
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ModalsContextProvider>
                        {children}
                        <ToastContainer />
                    </ModalsContextProvider>
                </ThemeProvider >
            </Provider>
        </Router>
    )
}