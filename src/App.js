import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {Topic} from './components/Topic'


function App() {
  return (
    <Router>
    <Switch>
          <Route  path="/product">
            <Topic/>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Redirect from="/" to="/product" />
        </Switch>
    </Router>
  );
}

export default App;
