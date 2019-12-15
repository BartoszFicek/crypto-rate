import React, { PropTypes } from "react";
import { setLanguage } from "../redux";
import { useSelector, useDispatch } from "react-redux";

type Props = {
  language: PropTypes.Number,
  setLanguage: PropTypes.func
};

export const Bitcoin = (props: Props) => {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  return (
    <div>
      Bitcoin {language}
      <button onClick={() => dispatch(setLanguage("polski"))}>-</button>
    </div>
  );
};
