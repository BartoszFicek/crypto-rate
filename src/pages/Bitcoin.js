import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import { fetchBasicData, fetchMarketChartData } from "../redux/stateActions";
import {
  CurrentValue,
  CryptoName,
  Loader,
  CryptoValuesTable,
  ButtonsRow
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
  console.log(data);

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
        <ButtonsRow
          setChartIsActive={setChartIsActive}
          chartIsActive={chartIsActive}
          setPeriod={setPeriod}
          period={period}
          buttonCaption="About Bitcoin"
        />
      </Row>

      <Row id="fourthRowWrapper">
        <Col xs={12}>Card</Col>
      </Row>
    </Grid>
  );
};
