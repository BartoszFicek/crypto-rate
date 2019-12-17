import React from "react";
import { Row, Col } from "react-flexbox-grid";

export const ButtonsRow = props => {
  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <Row>
          <div
            onClick={() => props.setChartIsActive(true)}
            style={{
              backgroundColor: props.chartIsActive
                ? "rgb(71, 158, 221)"
                : "white",
              color: props.chartIsActive ? "white" : "rgb(120, 130, 148)"
            }}
            className="customButton"
          >
            Charts
          </div>
          <div
            onClick={() => props.setChartIsActive(false)}
            style={{
              backgroundColor: !props.chartIsActive
                ? "rgb(71, 158, 221)"
                : "white",
              color: !props.chartIsActive ? "white" : "rgb(120, 130, 148)"
            }}
            className="customButton"
          >
            {props.buttonCaption}
          </div>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <Row end="xs">
          <div
            onClick={() => props.setPeriod("1W")}
            style={{
              backgroundColor:
                props.period === "1W" ? "rgb(71, 158, 221)" : "white",
              color: props.period === "1W" ? "white" : "rgb(120, 130, 148)"
            }}
            className="squareButton"
          >
            1W
          </div>
          <div
            onClick={() => props.setPeriod("1D")}
            style={{
              backgroundColor:
                props.period === "1D" ? "rgb(71, 158, 221)" : "white",
              color: props.period === "1D" ? "white" : "rgb(120, 130, 148)"
            }}
            className="squareButton"
          >
            1D
          </div>
          <div
            onClick={() => props.setPeriod("4H")}
            style={{
              backgroundColor:
                props.period === "4H" ? "rgb(71, 158, 221)" : "white",
              color: props.period === "4H" ? "white" : "rgb(120, 130, 148)"
            }}
            className="squareButton"
          >
            4H
          </div>
          <div
            onClick={() => props.setPeriod("2H")}
            style={{
              backgroundColor:
                props.period === "2H" ? "rgb(71, 158, 221)" : "white",
              color: props.period === "2H" ? "white" : "rgb(120, 130, 148)"
            }}
            className="squareButton"
          >
            2H
          </div>
          <div
            onClick={() => props.setPeriod("15M")}
            style={{
              backgroundColor:
                props.period === "15M" ? "rgb(71, 158, 221)" : "white",
              color: props.period === "15M" ? "white" : "rgb(120, 130, 148)"
            }}
            className="squareButton"
          >
            15M
          </div>
        </Row>
      </Col>
    </>
  );
};
