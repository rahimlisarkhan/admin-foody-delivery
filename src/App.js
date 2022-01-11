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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/product" component={Topic} />
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Redirect from="/" to="/product" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
