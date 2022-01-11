import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from 'react';
import { Topic } from '../components/Topic';
import { AppProvider } from "./AppProvider";
import Loading from '../components/Loading/Loading';

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <AppProvider>
        <Switch>
          <Route path="/panel" component={Topic} />
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Redirect from="/" to="/panel" />
        </Switch>
      </AppProvider>
    </Suspense>
  );
}

export default App;
