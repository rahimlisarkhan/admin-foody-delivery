import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";
import { ROUTE } from "../util/route";

const DashboardPage = React.lazy(() => import('./dashboard'));
const ProductsPage = React.lazy(() => import('./products'));
const RestaurantsPage = React.lazy(() => import('./restaurants'));
const CategoryPage = React.lazy(() => import('./category'));
const OrdersPage = React.lazy(() => import('./orders'));
const OffersPage = React.lazy(() => import('./offer'));
const Error404Page = React.lazy(() => import('./404'));

const RootPage = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} component={DashboardPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF} component={ProductsPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.HREF} component={RestaurantsPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.CATEGORY.HREF} component={CategoryPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.ORDERS.HREF} component={OrdersPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.OFFER.HREF} component={OffersPage} />
                <Redirect exact from={ROUTE.MAIN.PANEL.HREF} to={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} />
                <Route component={Error404Page} />
            </Switch>
        </Layout>
    )
}

export default RootPage