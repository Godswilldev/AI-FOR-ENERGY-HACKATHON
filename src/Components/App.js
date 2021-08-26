import React, { useState } from "react";
import data from "../output.json";

const App = () => {
  const [make, setMake] = useState("");

  const Make = data.map((d) => d.Make);
  const uniqueMake = new Set(Make);

  return (
    <>
      <div>
        <label htmlFor="make">Make: </label>
        <select
          name="make"
          id="make"
          onChange={(evt) => setMake(evt.target.value)}
        >
          <option value={make}>Make</option>
          {[...uniqueMake].map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default App;
