
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import SignIn from './../modules/auth/views/signIn'
import SignOut from './../modules/auth/views/signOut'
import Products from './../modules/products/views/product';
import { useEffect } from 'react';
import { authCheckState } from './../utils/common';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(store => store.auth)

  useEffect(() => {
    dispatch(authCheckState());
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {
              store.token ?
                <li>
                  <Link to="/products">Products</Link>
                </li> :
                null
            }
            {
              store.token ?
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
                :
                <li>
                  <Link to="/login">Login</Link>
                </li>
            }
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/logout">
              <SignOut />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
