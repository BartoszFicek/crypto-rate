import { SET_LANGUAGE } from "./stateTypes";

export const setLanguage = newLanguage => {
  return {
    type: SET_LANGUAGE,
    newLanguage: newLanguage
  };
};
