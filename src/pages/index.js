import React from "react";
import {Redirect,Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";
import Content from "../components/Content"

const Basket = React.lazy(() => import('../components/Basket'));
const Order = React.lazy(() => import('../components/Order'));

 const RootPage = () => {

    return (
        <Layout>
         
            <Content>
                <h2>Product</h2>
                <nav>
                </nav>
                <Switch>
                    <Route exact path="/panel/dashboard">
                        <Basket />
                    </Route>
                    <Route exact path="/panel/products">
                        <Order />
                    </Route>
                    <Redirect from="*" to="/panel/dashboard" />
                </Switch>
            </Content>
        </Layout>
    )
}

export default RootPage