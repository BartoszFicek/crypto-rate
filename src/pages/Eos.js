import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBasicData, fetchMarketChartData } from "../redux/stateActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  CurrentValue,
  CryptoName,
  Loader,
  CryptoValuesTable
} from "../components";
import eosImage from "../assets/eos-logo.png";

export const Eos = props => {
  const data = useSelector(state => state.data);
  const vsCurrency = useSelector(state => state.currency);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const chartData = useSelector(state => state.chartData);
  useEffect(() => {
    dispatch(fetchBasicData("eos", vsCurrency));
    dispatch(fetchMarketChartData("eos", vsCurrency, 1));
  }, [vsCurrency]);

  console.log(data);

  return loading ? (
    <Grid style={{ zIndex: "1000" }}>
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
          <CryptoName logoUrl={eosImage} name="EOS (EOS)" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <CurrentValue
            currentPrice={data.current_price}
            vsCurrency={vsCurrency}
            priceChange24={data.price_change_24h}
            priceChangePercentage24={data.price_change_percentage_24h}
            nameWithSymbol={"Eos (EOS)"}
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
    </Grid>
  );
};
