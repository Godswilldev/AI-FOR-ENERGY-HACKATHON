import React from "react";
import useInputState from "../hooks/useInputState";

const Form = ({ data }) => {
  const [make, setMake, resetMake] = useInputState("");
  const Make = new Set(data.map((d) => d.Make));

  const [model, setModel, resetModel] = useInputState("");
  const Model = new Set(data.map((d) => d.Model));

  const [vehicleClass, setVehicleClass, resetVehicleClass] = useInputState("");
  const Vehicle_Class = new Set(data.map((d) => d.Vehicle_Class));

  const [engine, setEngine, resetEngine] = useInputState("");
  const Engine = new Set(data.map((d) => d.Engine));

  const [cylinders, setCylinders, resetCylinders] = useInputState("");
  const Cylinders = new Set(data.map((d) => d.Cylinders));

  const [transmission, setTransmission, resetTransmission] = useInputState("");
  const Transmission = new Set(data.map((d) => d.Transmission));

  const [fuelType, setFuelType, resetFuelType] = useInputState("");
  const Fuel_Type = new Set(data.map((d) => d.Fuel_Type));

  const [mpg, setMpg, resetMpg] = useInputState("");
  const Mpg = new Set(data.map((d) => d.mpg));

  const [co2Emissions, setCo2Emissions, resetCo2Emissions] = useInputState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log({
      make,
      model,
      vehicleClass,
      engine,
      cylinders,
      transmission,
      fuelType,
      mpg,
      co2Emissions,
    });

    resetMake();
    resetModel();
    resetCo2Emissions();
    resetMpg();
    resetFuelType();
    resetTransmission();
    resetEngine();
    resetCylinders();
    resetVehicleClass();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Make */}

      <div>
        <h1>{make}</h1>
        <label htmlFor="make">Make: </label>
        <select name="make" id="make" onChange={setMake}>
          <option value={make}>Make</option>
          {[...Make].map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Model */}

      <div>
        <h1>{model}</h1>
        <label htmlFor="model">Model: </label>
        <select name="model" id="model" onChange={setModel}>
          <option value={model}>Model</option>
          {[...Model].map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Vehicle class */}

      <div>
        <h1>{vehicleClass}</h1>
        <label htmlFor="vehicleClass">Vehicle Class: </label>
        <select
          name="vehicleClass"
          id="vehicleClass"
          onChange={setVehicleClass}
        >
          <option value={vehicleClass}>Vehicle Class</option>
          {[...Vehicle_Class].map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Engine */}

      <div>
        <h1>{engine}</h1>
        <label htmlFor="engine">Engine: </label>
        <select name="engine" id="engine" onChange={setEngine}>
          <option value={engine}>Engine</option>
          {[...Engine]
            .sort((a, b) => a - b)
            .map((value, idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>

        <input
          type="range"
          name="engine"
          id="engine"
          value={engine}
          onChange={setEngine}
          min={0}
          step={0.1}
          max={10}
        />
      </div>

      {/* Cylinders */}

      <div>
        <h1>{cylinders}</h1>
        <label htmlFor="cylinders">Cylinders: </label>
        <select name="cylinders" id="Cylinders" onChange={setCylinders}>
          <option value={cylinders}>Cylinders</option>
          {[...Cylinders]
            .sort((a, b) => a - b)
            .map((value, idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>

        <input
          type="range"
          name="cylinders"
          id="cylinders"
          value={cylinders}
          onChange={setCylinders}
          min={0}
          step={1}
          max={20}
        />
      </div>

      {/* MPG */}

      <div>
        <h1>{mpg}</h1>
        <label htmlFor="mpg">MPG: </label>
        <select name="mpg" id="mpg" onChange={setMpg}>
          <option value={mpg}>MPG</option>
          {[...Mpg]
            .sort((a, b) => a - b)
            .map((value, idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>

        <input
          type="range"
          name="mpg"
          id="mpg"
          value={mpg}
          onChange={setMpg}
          min={0}
          step={1}
          max={100}
        />
      </div>

      {/* CO2 EMISSIONS */}

      <div>
        <h1>{co2Emissions}</h1>
        <label htmlFor="co2Emissions">CO2 Emissions: </label>

        <input
          type="range"
          name="co2Emissions"
          id="co2Emissions"
          value={co2Emissions}
          onChange={setCo2Emissions}
          min={0}
          step={1}
          max={500}
        />

        <input
          type="number"
          name="co2Emissions"
          id="co2Emissions"
          value={co2Emissions}
          onChange={setCo2Emissions}
        />
      </div>

      {/* Transmission */}

      <div>
        <h1>{transmission}</h1>
        <label htmlFor="transmission">Transmission: </label>
        <select
          name="transmission"
          id="transmission"
          onChange={setTransmission}
        >
          <option value={transmission}>Transmission</option>
          {[...Transmission].map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Fuel Type */}

      <div>
        <h1>{fuelType}</h1>
        <label htmlFor="fuelType">Fuel Type: </label>
        <select name="fuelType" id="fuelType" onChange={setFuelType}>
          <option value={fuelType}>Fuel Type</option>
          {[...Fuel_Type].map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default React.memo(Form);
