import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";
import { ROUTE } from "../util/route";

const Basket = React.lazy(() => import('../components/Basket'));
const Order = React.lazy(() => import('../components/Order'));

const RootPage = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} component={Basket} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF} component={Order} />
                <Redirect exact from={ROUTE.MAIN.HREF} to={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} />
            </Switch>
        </Layout>
    )
}

export default RootPage