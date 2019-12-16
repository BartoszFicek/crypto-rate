import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEthereumData } from "../redux/stateActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import { CurrentValue, CryptoName } from "../components";
import ethImage from "../assets/eth-logo.png";

export const Ethereum = props => {
  const vsCurrency = useSelector(state => state.currency);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchEthereumData(vsCurrency), []));
  return (
    <Grid>
      <Row id="firstRowWrapper">
        <Col xs={12} sm={12} md={6}>
          <CryptoName logoUrl={ethImage} name="Ethereum (ETH)" />
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
