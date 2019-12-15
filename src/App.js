import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Eos, Ethereum, Bitcoin } from "./pages";
import { store } from "./redux/store";
import { Menu } from "./components";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu />
          <Grid>
            <Row>
              <Col xs={12}>
                <Switch>
                  <Route exact path={"/"}>
                    <Redirect to="/bitcoin" />
                  </Route>
                  <Route path={"/bitcoin"} component={Bitcoin}></Route>
                  <Route path="/eos" component={Eos}></Route>
                  <Route path="/ethereum" component={Ethereum}></Route>
                </Switch>
              </Col>
            </Row>
          </Grid>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
