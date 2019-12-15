const initialState = {
  language: "english",
  currency: "USD",
  loading: false,
  data: [],
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
    default:
      return state;
  }
};
