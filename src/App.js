import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Bitcoin, Eos, Ethereum } from "./pages";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
