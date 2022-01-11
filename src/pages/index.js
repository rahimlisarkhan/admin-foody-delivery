import React from 'react';
import { Switch } from "react-router-dom";
import Layout from '../components/Layout';
// import { ROUTE } from '../util/route';
// import DashboardPage from './dashboard'
// import ProductsPage from './products'
// import OrdersPage from './orders'
// import OfferPage from './offer'
// import RestaurantsPage from './restaurants'
// import CategoryPage from './category'
// const DashboardPage = React.lazy(() => import('./dashboard'));
// const ProductsPage = React.lazy(() => import('./products'));
// const OrdersPage = React.lazy(() => import('./orders'));
// const OfferPage = React.lazy(() => import('./offer'));
// const RestaurantsPage = React.lazy(() => import('./restaurants'));
// const CategoryPage = React.lazy(() => import('./category'));

const RootPage = () => {

    return (
        <Layout>
            <Switch>
           
            </Switch>
         </Layout>
    )
}

export default RootPage
