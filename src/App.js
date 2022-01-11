import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from 'react';
import { Topic } from './components/Topic';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/product" component={Topic} />
            <Route path="/login">
              <h1>login</h1>
            </Route>
            <Redirect from="/" to="/product" />
          </Switch>
        </ThemeProvider>
      </Router>
    </Suspense>
  );
}

export default App;
