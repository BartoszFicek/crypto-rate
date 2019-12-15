import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../redux";
import logo from "../assets/logo.jpg";
import "antd/dist/antd.css";

const { Option } = Select;

export const Menu = () => {
  let history = useHistory();
  const currency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  return (
    <div id="menuWrapper">
      <Grid>
        <Row middle="xs" id="menu">
          <Col xs={12} sm={4} md>
            <Row center="xs" start="sm">
              <div id="logoWrapper" onClick={() => history.push("bitcoin")}>
                <Row>
                  <img id="logo" src={logo} alt="TryCodnet logo" />
                  <p id="itText">IT</p>
                  <p id="recruitmentText">Recruitment</p>
                </Row>
              </div>
            </Row>
          </Col>
          <Col xs={8} sm={6} md>
            <Row center="xs">
              <button onClick={() => history.push("bitcoin")}>Bitcoin</button>
              <button onClick={() => history.push("ethereum")}>Ethereum</button>
              <button onClick={() => history.push("eos")}>EOS</button>
            </Row>
          </Col>
          <Col xs={4} sm={2} md>
            <Row start="xs" end="md">
              <Select
                id="select"
                value={currency}
                onChange={value => dispatch(setCurrency(value))}
              >
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="PLN">PLN</Option>
              </Select>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
