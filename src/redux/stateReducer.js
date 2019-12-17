const initialState = {
  language: "english",
  currency: "USD",
  loading: false,
  data: {},
  error: "",
  chartData: {},
  chartError: "",
  description: "",
  lastUpdated: Date.now()
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.newLanguage
      };
    case "SET_CURRENCY":
      return {
        ...state,
        currency: action.newCurrency
      };
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_MARKET_CHART":
      return {
        ...state
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      };
    case "FETCH_CHART_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        chartData: action.payload,
        chartError: "",
        lastUpdated: Date.now()
      };
    case "FETCH_CHART_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        chartData: {},
        chartError: action.payload
      };
    case "FETCH_CURRENCY_DESCRIPTION_SUCCESS":
      return {
        ...state,
        loading: false,
        lastUpdated: Date.now(),
        description: action.payload
      };
    case "FETCH_CURRENCY_DESCRIPTION_FAILURE":
      return {
        ...state,
        loading: false,
        description: "",
        error: action.payload
      };
    default:
      return state;
  }
};
