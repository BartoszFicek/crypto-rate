import { SET_LANGUAGE } from "./stateTypes";

const initialState = {
  language: "english"
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.newLanguage
      };
    default:
      return state;
  }
};
