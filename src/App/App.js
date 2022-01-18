import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import RootPage from '../pages';
import { AppProvider } from "./AppProvider";
import Loading from '../components/Loading';
import { ROUTE } from "../util/route";
const LoginPage = lazy(() => import('../pages/login'));

function App() {

  return (
    <AppProvider>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={ROUTE.MAIN.PANEL.HREF} component={RootPage} />
            <Route path={ROUTE.MAIN.LOGOUT.HREF} component={LoginPage} />
            <Redirect from={ROUTE.MAIN.HREF} to={ROUTE.MAIN.PANEL.HREF} />
          </Switch>
        </Suspense>
    </AppProvider >
  );
}

export default App;
