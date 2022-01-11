import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";

const Basket = React.lazy(() => import('../components/Basket'));
const Order = React.lazy(() => import('../components/Order'));

const RootPage = () => {

    return (
        <Layout>
            <Switch>
                <Route exact path="/panel/dashboard" component={Basket} />
                <Route exact path="/panel/products" component={Order} />
                <Redirect from="*" to="/panel/dashboard" />
            </Switch>
        </Layout>
    )
}

export default RootPage