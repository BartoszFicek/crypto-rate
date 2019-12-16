import React from "react";
import { Provider } from "react-redux";
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

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu />
          <div id="greyBackground" />
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
