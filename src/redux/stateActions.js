import axios from "axios";

export const setLanguage = newLanguage => {
  return {
    type: "SET_LANGUAGE",
    newLanguage: newLanguage
  };
};

export const setCurrency = newCurrency => {
  return {
    type: "SET_CURRENCY",
    newCurrency: newCurrency
  };
};

export const fetchDataRequest = () => {
  return {
    type: "FETCH_DATA_REQUEST"
  };
};

export const fetchDataSuccess = data => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data
  };
};

export const fetchDataFailure = error => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error
  };
};

export const fetchChartDataSuccess = data => {
  return {
    type: "FETCH_CHART_DATA_SUCCESS",
    payload: data
  };
};

export const fetchChartDataFailure = error => {
  return {
    type: "FETCH_CHART_DATA_FAILURE",
    payload: error
  };
};

export const fetchBasicData = (cryptoName, vsCurrency) => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=${cryptoName}`
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data[0]));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchMarketChartData = (cryptoName, vsCurrency, days) => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${vsCurrency}&days=${days}`
      )
      .then(response => {
        console.log("res", response);
        dispatch(fetchChartDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchChartDataFailure(error.message));
      });
  };
};
