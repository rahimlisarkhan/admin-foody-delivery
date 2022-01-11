import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from 'react';
import { Topic } from './components/Topic';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
        <Switch>
          <Route path="/product" component={Topic} />
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Redirect from="/" to="/product" />
        </Switch>
        </Router>
      </Suspense>
  );
}

export default App;
