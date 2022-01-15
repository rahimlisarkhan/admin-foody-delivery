import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import RootPage from '../pages';
import { AppProvider } from "./AppProvider";
import Loading from '../components/Loading/Loading';

const LoginPage = lazy(()=>import('../pages/login'));

// const NotFound = <h1>Not found 404</h1>

function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <AppProvider>
        <Switch>
          <Route path="/panel" component={RootPage} />
          <Route path="/login" component={LoginPage}  />
          {/* <Route component={NotFound} /> */}
          <Redirect from="/" to="/panel" />
        </Switch>
      </AppProvider>
    </Suspense>
  );
}

export default App;
