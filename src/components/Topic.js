import { Link, Redirect, Route, Switch } from "react-router-dom"


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
                    <h3>Please select a basket.</h3>
                </Route>
                <Route path="/product/order">
                    <h3>Please select a order.</h3>
                </Route>
                <Redirect from="*" to="/product/basket" />
            </Switch>
        </div>
        </div>
    )
}