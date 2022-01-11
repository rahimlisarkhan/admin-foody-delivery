import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom"
import { NavStyled } from "./Nav.styled";
import Image from './Image';
import logo from '../image/icon/ea-logo.svg'

const Basket = React.lazy(() => import('./Basket'));
const Order = React.lazy(() => import('./Order'));


export const Topic = () => {

    return (
        <div className="App">
            <header className="App-header">
            <Image radius="100" width="100" height="100" src={logo}/>
                <NavStyled>
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
                </NavStyled>

            </header>
            <div>
                <h2>Product</h2>
                <nav>
                </nav>
                <Switch>
                    <Route exact path="/product/basket">
                        <Basket />
                    </Route>
                    <Route exact path="/product/order">
                        <Order />
                    </Route>
                    <Redirect from="*" to="/product/basket" />
                </Switch>
            </div>
        </div>
    )
}