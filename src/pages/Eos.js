import React, { PropTypes } from "react";
import { setLanguage } from "../redux";
import { useSelector, useDispatch } from "react-redux";

type Props = {
  language: PropTypes.Number,
  setLanguage: PropTypes.func
};

export const Eos = (props: Props) => {
  let language = useSelector(state => state.language);
  let dispatch = useDispatch();

  return (
    <div>
      EOS {language}
      <button
        onClick={() => {
          dispatch(setLanguage("polski"));
        }}
      >
        -
      </button>
    </div>
  );
};
