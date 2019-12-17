import React from "react";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Eos, Ethereum, Bitcoin } from "./pages";
import { store } from "./redux/store";
import { Menu, Footer } from "./components";
import "./styles/index.scss";

import { Loader } from "./components";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu />
          <div id="whiteBackground" />
          <Switch>
            <Route exact path={"/"}>
              <Redirect to="/bitcoin" />
            </Route>
            <Route path={"/bitcoin"} component={Bitcoin}></Route>
            <Route path="/eos" component={Eos}></Route>
            <Route path="/ethereum" component={Ethereum}></Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
