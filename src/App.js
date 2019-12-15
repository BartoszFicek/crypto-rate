import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Eos, Ethereum, Bitcoin } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to="/bitcoin" />
          </Route>
          <Route path={"/bitcoin"} component={Bitcoin}></Route>
          <Route path="/eos" component={Eos}></Route>
          <Route path="/ethereum" component={Ethereum}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
