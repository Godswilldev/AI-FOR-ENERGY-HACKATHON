import React from "react";
import data from "../data/output.json";
import Form from "./Form";

const App = () => {
  return (
    <>
      <Form data={data} />
    </>
  );
};

export default App;
