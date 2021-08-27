import { useState } from "react";

const useInputState = (initialState) => {
  const [state, setState] = useState(initialState);
  const reset = () => setState("");
  const onChange = (evt) => setState(evt.target.value);
  return [state, onChange, reset];
};

export default useInputState;
