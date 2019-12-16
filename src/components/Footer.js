import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export const Footer = () => {
  return (
    <div id="footerWrapper">
      <Grid>
        <Row middle="xs" id="footer">
          <Col xs={12} sm={4} md={4}>
            <Row start="xs">Last Updated</Row>
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
