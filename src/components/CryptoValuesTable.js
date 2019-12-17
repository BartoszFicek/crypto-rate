import React from "react";
import { Row, Col } from "react-flexbox-grid";

export const CryptoValuesTable = props => {
  return (
    <Row>
      <Col xs={12} sm={6} md={3}>
        <div className="secondRowElement">
          <p id="capTitle">Market Cap</p>
          <p id="capValue">
            {props.vsCurrency === "USD"
              ? "$ "
              : props.vsCurrency === "EUR"
              ? "€ "
              : ""}
            {parseFloat(props.marketCap).toLocaleString("en-US")}
          </p>
          <p id="capSecondValue">
            {parseFloat(
              (
                parseFloat(props.marketCap) / parseFloat(props.currentPrice)
              ).toFixed(0)
            ).toLocaleString("en-US")}
            {" " + props.name}
          </p>
        </div>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <div className="secondRowElement">
          <p id="capTitle">Volume (24h)</p>
          <p id="capValue">
            {props.vsCurrency === "USD"
              ? "$ "
              : props.vsCurrency === "EUR"
              ? "€ "
              : ""}
            {"Count volume"}
          </p>
          <p id="capSecondValue">{" meh " + props.name}</p>
        </div>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <div className="secondRowElement">
          <p id="capTitle">Circulating Supply</p>
          <p id="capValue">
            {parseFloat(
              parseFloat(props.circulatingSupply).toFixed(0)
            ).toLocaleString("en-US") +
              " " +
              props.name}
          </p>
        </div>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <div className="secondRowElement">
          <p id="capTitle">Max Supply</p>
          <p id="capValue">{"Max supply " + props.name}</p>
        </div>
      </Col>
    </Row>
  );
};
