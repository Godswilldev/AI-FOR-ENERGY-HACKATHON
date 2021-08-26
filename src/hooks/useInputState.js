import { useState } from "react";

const useInputState = (initialState) => {
  const [state, setState] = useState(initialState);

  const reset = (evt) => {
    evt.preventDefault();
    setState(([evt.target.name] = ""));
  };

  const onChange = (evt) => {
    evt.preventDefault();
    setState(([evt.target.name] = evt.target.value));
  };

  return [state, onChange, reset];
};

export default useInputState;
