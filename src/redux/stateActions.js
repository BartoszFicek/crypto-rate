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

export const fetchBitcoinData = vsCurrency => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=bitcoin`
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data[0]));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchEthereumData = vsCurrency => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=ethereum`
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data[0]));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchEosData = vsCurrency => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=eos`
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data[0]));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
