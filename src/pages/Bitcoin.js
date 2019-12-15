import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLanguage } from "../redux";

export const Bitcoin = props => {
  let history = useHistory();
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  return (
    <div>
      Bitcoin {language}
      <button
        onClick={() => {
          dispatch(setLanguage("polski"));
          history.push("/eos");
        }}
      >
        -
      </button>
      {JSON.stringify(state)}
    </div>
  );
};
