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
export const fetchMarketChartRequest = () => {
  return {
    type: "FETCH_MARKET_CHART_REQUEST"
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

export const fetchCurrencyDescriptionSuccess = data => {
  return {
    type: "FETCH_CURRENCY_DESCRIPTION_SUCCESS",
    payload: data
  };
};

export const fetchCurrencyDescriptionFailure = error => {
  return {
    type: "FETCH_CURRENCY_DESCRIPTION_FAILURE",
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
    dispatch(fetchMarketChartRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${vsCurrency}&days=${days}`
      )
      .then(response => {
        dispatch(fetchChartDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchChartDataFailure(error.message));
      });
  };
};

export const fetchCurrencyDescription = cryptoName => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then(response => {
        dispatch(fetchCurrencyDescriptionSuccess(response.data.description.en));
      })
      .catch(error => {
        dispatch(fetchCurrencyDescriptionFailure(error.message));
      });
  };
};
