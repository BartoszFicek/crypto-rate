const initialState = {
  language: "english",
  currency: "USD",
  loading: false,
  data: {},
  error: ""
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
    default:
      return state;
  }
};
