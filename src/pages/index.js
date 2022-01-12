import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";
import { ROUTE } from "../util/route";

// const Layout = React.lazy(() => import('../components/Layout'));
const DashboardPage = React.lazy(() => import('../pages/dashboard'));
const ProductsPage = React.lazy(() => import('../pages/products'));
const RestaurantsPage = React.lazy(() => import('../pages/restaurants'));
const CategoryPage = React.lazy(() => import('../pages/category'));
const OrdersPage = React.lazy(() => import('../pages/orders'));
const OffersPage = React.lazy(() => import('../pages/offer'));

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
            </Switch>
        </Layout>
    )
}

export default RootPage