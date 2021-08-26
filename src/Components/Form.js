import React from "react";
import useInputState from "../hooks/useInputState";

const Form = () => {
  const [make, setMake] = useInputState("");
  const [model, setModel] = useInputState("");
  const [vehicleClass, setVehicleClass] = useInputState("");
  const [engine, setEngine] = useInputState("");
  const [cylinders, setCylinders] = useInputState("");
  const [transmission, setTransmission] = useInputState("");
  const [fuelType, setFuelType] = useInputState("");
  const [mpg, setMpg] = useInputState("");
  const [co2Emissions, setCo2Emissions] = useInputState("");

  return (
    <form>
      <div>
        <label htmlFor="make">Make: </label>
        <input
          type="text"
          name="make"
          id="make"
          placeholder="e.g: Acura"
          value={make}
          onChange={setMake}
        />
      </div>

      <div>
        <label htmlFor="model">Model: </label>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="e.g: ILX HYBRID"
          value={model}
          onChange={setModel}
        />
      </div>

      <div>
        <label htmlFor="vehicleClass">Vehicle Class: </label>
        <input
          type="text"
          name="vehicleClass"
          id="vehicleClass"
          placeholder="e.g: COMPACT"
          value={vehicleClass}
          onChange={setVehicleClass}
        />
      </div>

      <div>
        <label htmlFor="engine">Engine: </label>
        <input
          type="text"
          name="engine"
          id="engine"
          placeholder="e.g: 2"
          value={engine}
          onChange={setEngine}
        />
      </div>

      <div>
        <label htmlFor="make">Cylinders: </label>
        <input
          type="text"
          name="cylinders"
          id="cylinders"
          placeholder="e.g: 4"
          value={cylinders}
          onChange={setCylinders}
        />
      </div>

      <div>
        <label htmlFor="transmission">Transmission: </label>
        <input
          type="text"
          name="transmission"
          id="transmission"
          placeholder="e.g: AS5"
          value={transmission}
          onChange={setTransmission}
        />
      </div>

      <div>
        <label htmlFor="fuelType">Fuel Type: </label>
        <input
          type="text"
          name="fuelType"
          id="fuelType"
          placeholder="e.g: Z"
          value={fuelType}
          onChange={setFuelType}
        />
      </div>

      <div>
        <label htmlFor="mpg">MPG'S: </label>
        <input
          type="text"
          name="mpg"
          id="mpg"
          placeholder="e.g: 33"
          value={mpg}
          onChange={setMpg}
        />
      </div>

      <div>
        <label htmlFor="make">CO2 Emissions: </label>
        <input
          type="text"
          name="co2Emissions"
          id="co2Emissions"
          placeholder="e.g: 196"
          ovalue={co2Emissions}
          onChange={setCo2Emissions}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default React.memo(Form);
