import React from "react";
import {Redirect,Route, Switch } from "react-router-dom"
// import { NavStyled } from "./Nav.styled";
// import Image from './Image';
// import logo from '../image/icon/ea-logo.svg'
import Layout from "./Layout";
import Content from "./Content"
const Basket = React.lazy(() => import('./Basket'));
const Order = React.lazy(() => import('./Order'));


export const Topic = () => {

    return (
        <Layout>
            {/* <header className="App-header"> */}
            {/* <Image radius="100" width="100" height="100" src={logo}/> */}
                {/* <NavStyled>
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
                </NavStyled> */}

            {/* </header> */}
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