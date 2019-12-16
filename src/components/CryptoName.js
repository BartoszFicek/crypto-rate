import React from "react";
import { Row, Col } from "react-flexbox-grid";

export const CryptoName = props => {
  return (
    <Row>
      <Col xs={12}>
        <Row middle="xs">
          <img id="currency-logo" src={props.logoUrl} alt={"Currency logo"} />
          <div id="currency-name">{props.name}</div>
        </Row>
      </Col>
    </Row>
  );
};
