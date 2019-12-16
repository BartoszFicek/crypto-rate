import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBitcoinData } from "../redux/stateActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import { CurrentValue, CryptoName } from "../components";
import btcImage from "../assets/btc-logo.png";

export const Bitcoin = props => {
  const vsCurrency = useSelector(state => state.currency);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBitcoinData(vsCurrency), []));
  return (
    <Grid>
      <Row id="firstRowWrapper">
        <Col xs={12} sm={12} md={6}>
          <CryptoName logoUrl={btcImage} name="Bitcoin (BTC)" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <CurrentValue />
        </Col>
      </Row>
      <Row>
        <Col> {JSON.stringify(data)}</Col>
      </Row>
    </Grid>
  );
};
