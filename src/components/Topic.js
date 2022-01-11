import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom"

const Basket = React.lazy(() => import('./Basket'));
const Order = React.lazy(() => import('./Order'));


export const Topic = () => {

    return (
        <div className="App">
        <header className="App-header">
        <ul>
            <li>
              <Link to="/product/basket">basket</Link>
            </li>
            <li>
              <Link to="/product/order">order</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </header>
        <div>
            <h2>Product</h2>
            <nav>
        </nav>
            <Switch>
                <Route exact path="/product/basket">
                    <Basket/>
                </Route>
                <Route exact path="/product/order">
                    <Order/>
                </Route>
                <Redirect from="*" to="/product/basket" />
            </Switch>
        </div>
        </div>
    )
}