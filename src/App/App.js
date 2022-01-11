import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from 'react';
import { Topic } from '../components/Topic';
import { AppProvider } from "./AppProvider";


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider>
        <Switch>
          <Route path="/product" component={Topic} />
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Redirect from="/" to="/product" />
        </Switch>
      </AppProvider>
    </Suspense>
  );
}

export default App;
