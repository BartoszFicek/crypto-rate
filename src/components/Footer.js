import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useSelector } from "react-redux";

export const Footer = () => {
  const lastUpdated = useSelector(state => state.lastUpdated);

  return (
    <div id="footerWrapper">
      <Grid>
        <Row middle="xs" id="footer">
          <Col xs={12} sm={4} md={4}>
            <Row start="xs">Last Updated: {milisToStringDate(lastUpdated)}</Row>
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Row center="xs">Zadanie rekrutacyjne Try Codnet</Row>
          </Col>
          <Col xs={4} sm={2} md={4}>
            <Row end="xs">
              <p>Bitcoin</p>
              <p>Ethereum</p>
              <p> EOS</p>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

const milisToStringDate = millis => {
  let dt = new Date(millis);

  let DD = ("0" + dt.getDate()).slice(-2);

  let MM = ("0" + (dt.getMonth() + 1)).slice(-2);

  let YYYY = dt.getFullYear();

  let hh = ("0" + dt.getHours()).slice(-2);

  let mm = ("0" + dt.getMinutes()).slice(-2);

  let ss = ("0" + dt.getSeconds()).slice(-2);

  return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
};
