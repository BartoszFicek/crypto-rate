import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBasicData,
  fetchMarketChartData,
  fetchCurrencyDescription
} from "../redux/stateActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  CurrentValue,
  CryptoName,
  Loader,
  CryptoValuesTable,
  ButtonsRow,
  Chart
} from "../components";
import eosImage from "../assets/eos-logo.png";

export const Eos = props => {
  let [chartIsActive, setChartIsActive] = useState(true);
  let [period, setPeriod] = useState("1W");

  const data = useSelector(state => state.data);
  const vsCurrency = useSelector(state => state.currency);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const chartData = useSelector(state => state.chartData);
  const description = useSelector(state => state.description);

  useEffect(() => {
    dispatch(fetchBasicData("eos", vsCurrency));
    dispatch(fetchMarketChartData("eos", vsCurrency, periodToValue(period)));
    dispatch(fetchCurrencyDescription("eos"));
  }, [vsCurrency]);

  useEffect(() => {
    dispatch(fetchMarketChartData("eos", vsCurrency, periodToValue(period)));
  }, [period]);

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
            name={"EOS"}
            circulatingSupply={data.circulating_supply}
            volume={data.total_volume}
            maxSupply={data.total_supply}
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
        {chartIsActive ? (
          <Chart
            period={period}
            marketCaps={chartData.market_caps}
            prices={chartData.prices}
            marketCapsLabel={"Market Cap"}
            pricesLabel={`Price (${vsCurrency})`}
          />
        ) : (
          <Col xs={12} dangerouslySetInnerHTML={{ __html: description }}></Col>
        )}
      </Row>
    </Grid>
  );
};

const periodToValue = period => {
  if (period === "1W") return 7;
  else return 1;
};
