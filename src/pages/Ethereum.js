import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { CurrentValue, CryptoName } from "../components";
import ethImage from "../assets/eth-logo.png";

export const Ethereum = props => {
  return (
    <Grid>
      <Row id="firstRowWrapper">
        <Col xs={12} sm={12} md={6}>
          <CryptoName logoUrl={ethImage} name="Ethereum (ETH)" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <CurrentValue />
        </Col>
      </Row>
    </Grid>
  );
};
