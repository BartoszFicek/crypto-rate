import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Popover, Icon } from "antd";

export const CurrentValue = props => {
  return (
    <Row>
      <Col xs={12}>
        <Row center="xs" end="md">
          <Col>
            <Row end="xs">
              {props.priceChange24 < 0 ? (
                <Icon
                  style={{
                    marginRight: "5px",
                    marginTop: "12px",
                    color: "red"
                  }}
                  type="caret-down"
                />
              ) : (
                <Icon
                  style={{
                    marginRight: "5px",
                    marginTop: "10px",
                    color: "green"
                  }}
                  type="caret-up"
                />
              )}
              <p id="currentPriceValue">
                {parseFloat(props.currentPrice).toFixed(2)}
              </p>
              <p id="currentPriceCurrency">{props.vsCurrency}</p>
            </Row>
            <Row end="xs">
              <p id="priceChange24">
                {parseFloat(props.priceChange24).toFixed(2)} {props.vsCurrency}
              </p>
              <p id="priceChangePercentage24">
                ({parseFloat(props.priceChangePercentage24).toFixed(2)}%)
              </p>
            </Row>
          </Col>
          <Col>
            <Popover content={<div>Comming soon</div>} trigger="click">
              <div id="buyCurrencyButton"> Buy {props.nameWithSymbol} </div>
            </Popover>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
