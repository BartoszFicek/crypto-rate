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
  console.log(history);
  return (
    <div id="menuWrapper">
      <Grid>
        <Row middle="xs" id="menu">
          <Col xs={12} sm={4} md={4}>
            <Row center="xs" start="sm">
              <div id="logoWrapper" onClick={() => history.push("bitcoin")}>
                <Grid>
                  <Row>
                    <img id="logo" src={logo} alt="TryCodnet logo" />
                    <p id="itText">IT</p>
                    <p id="recruitmentText">Recruitment</p>
                  </Row>
                </Grid>
              </div>
            </Row>
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Row center="xs">
              <button
                onClick={() => history.push("bitcoin")}
                style={{
                  color: checkIsActiveAndReturnColor(
                    history.location.pathname,
                    "/bitcoin"
                  )
                }}
              >
                Bitcoin
              </button>
              <button
                onClick={() => history.push("ethereum")}
                style={{
                  color: checkIsActiveAndReturnColor(
                    history.location.pathname,
                    "/ethereum"
                  )
                }}
              >
                Ethereum
              </button>
              <button
                onClick={() => history.push("eos")}
                style={{
                  color: checkIsActiveAndReturnColor(
                    history.location.pathname,
                    "/eos"
                  )
                }}
              >
                EOS
              </button>
            </Row>
          </Col>
          <Col xs={4} sm={2} md={4}>
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

const checkIsActiveAndReturnColor = (pathname, buttonPath) =>
  pathname === buttonPath ? "rgb(27, 95, 172)" : "rgb(120, 130, 148)";
