import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/product">product</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
          <Route path="/product">
            <h1>Product</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
