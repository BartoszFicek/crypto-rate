import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import { fetchBasicData, fetchMarketChartData } from "../redux/stateActions";
import {
  CurrentValue,
  CryptoName,
  Loader,
  CryptoValuesTable
} from "../components";
import btcImage from "../assets/btc-logo.png";

export const Bitcoin = props => {
  let [chartIsActive, setChartIsActive] = useState(true);
  let [period, setPeriod] = useState("1W");

  const dispatch = useDispatch();
  const vsCurrency = useSelector(state => state.currency);
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const chartData = useSelector(state => state.chartData);

  useEffect(() => {
    dispatch(fetchBasicData("bitcoin", vsCurrency));
    dispatch(fetchMarketChartData("bitcoin", vsCurrency, 1));
  }, [vsCurrency]);

  return loading ? (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <Loader />
        </Col>
      </Row>
    </Grid>
  ) : error.length > 0 ? (
    error
  ) : (
    <Grid>
      <Row id="firstRowWrapper">
        <Col xs={12} sm={12} md={6}>
          <CryptoName logoUrl={btcImage} name="Bitcoin (BTC)" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <CurrentValue
            currentPrice={data.current_price}
            vsCurrency={vsCurrency}
            priceChange24={data.price_change_24h}
            priceChangePercentage24={data.price_change_percentage_24h}
            nameWithSymbol={"Bitcoin (BTC)"}
          />
        </Col>
      </Row>
      <Row id="secondRowWrapper">
        <Col xs={12}>
          <CryptoValuesTable
            vsCurrency={vsCurrency}
            marketCap={data.market_cap}
            currentPrice={data.current_price}
            name={data.name}
            circulatingSupply={data.circulating_supply}
          />
        </Col>
      </Row>

      <Row id="thirdRowWrapper">
        <Col xs={12} sm={12} md={6}>
          <Row>
            <div
              onClick={() => setChartIsActive(true)}
              style={{
                backgroundColor: chartIsActive ? "rgb(71, 158, 221)" : "white",
                color: chartIsActive ? "white" : "rgb(120, 130, 148)"
              }}
              className="customButton"
            >
              Charts
            </div>
            <div
              onClick={() => setChartIsActive(false)}
              style={{
                backgroundColor: !chartIsActive ? "rgb(71, 158, 221)" : "white",
                color: !chartIsActive ? "white" : "rgb(120, 130, 148)"
              }}
              className="customButton"
            >
              About Bitcoin
            </div>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Row end="xs">
            <div
              onClick={() => setPeriod("1W")}
              style={{
                backgroundColor:
                  period === "1W" ? "rgb(71, 158, 221)" : "white",
                color: period === "1W" ? "white" : "rgb(120, 130, 148)"
              }}
              className="squareButton"
            >
              1W
            </div>
            <div
              onClick={() => setPeriod("1D")}
              style={{
                backgroundColor:
                  period === "1D" ? "rgb(71, 158, 221)" : "white",
                color: period === "1D" ? "white" : "rgb(120, 130, 148)"
              }}
              className="squareButton"
            >
              1D
            </div>
            <div
              onClick={() => setPeriod("4H")}
              style={{
                backgroundColor:
                  period === "4H" ? "rgb(71, 158, 221)" : "white",
                color: period === "4H" ? "white" : "rgb(120, 130, 148)"
              }}
              className="squareButton"
            >
              4H
            </div>
            <div
              onClick={() => setPeriod("2H")}
              style={{
                backgroundColor:
                  period === "2H" ? "rgb(71, 158, 221)" : "white",
                color: period === "2H" ? "white" : "rgb(120, 130, 148)"
              }}
              className="squareButton"
            >
              2H
            </div>
            <div
              onClick={() => setPeriod("15M")}
              style={{
                backgroundColor:
                  period === "15M" ? "rgb(71, 158, 221)" : "white",
                color: period === "15M" ? "white" : "rgb(120, 130, 148)"
              }}
              className="squareButton"
            >
              15M
            </div>
          </Row>
        </Col>
      </Row>

      <Row id="fourthRowWrapper">
        <Col xs={12}>Card</Col>
      </Row>
    </Grid>
  );
};
