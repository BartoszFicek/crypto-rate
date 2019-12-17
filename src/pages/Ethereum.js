import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBasicData, fetchMarketChartData } from "../redux/stateActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  CurrentValue,
  CryptoName,
  Loader,
  CryptoValuesTable,
  ButtonsRow
} from "../components";
import ethImage from "../assets/eth-logo.png";

export const Ethereum = props => {
  let [chartIsActive, setChartIsActive] = useState(true);
  let [period, setPeriod] = useState("1W");

  const dispatch = useDispatch();
  const vsCurrency = useSelector(state => state.currency);
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchBasicData("ethereum", vsCurrency));
    dispatch(fetchMarketChartData("ethereum", vsCurrency, 1));
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
          <CryptoName logoUrl={ethImage} name="Ethereum (ETH)" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <CurrentValue
            currentPrice={data.current_price}
            vsCurrency={vsCurrency}
            priceChange24={data.price_change_24h}
            priceChangePercentage24={data.price_change_percentage_24h}
            nameWithSymbol={"Ethereum (ETH)"}
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
            buttonCaption="About Ethereum"
          />
        </Col>
      </Row>
      <Row id="thirdRowWrapper">
        <ButtonsRow
          setChartIsActive={setChartIsActive}
          chartIsActive={chartIsActive}
          setPeriod={setPeriod}
          period={period}
          buttonCaption="About Eos"
        />
      </Row>
      <Row id="fourthRowWrapper">
        <Col xs={12}>Card</Col>
      </Row>
    </Grid>
  );
};
