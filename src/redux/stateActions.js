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
