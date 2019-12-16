import { createStore, applyMiddleware } from "redux";
import { stateReducer } from "./stateReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  stateReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
