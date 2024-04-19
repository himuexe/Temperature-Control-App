import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");
  const incTemp = ()=>{
    if(temperatureValue===30){
      return;
    }
    const newTemp = temperatureValue+1;

    if(newTemp>=  22){
      setTempColor("hot");
    }

    setTemperatureValue(newTemp);
  }
  const decTemp =()=>{
    if(temperatureValue===0){
      return;
    }
    const newTemp = temperatureValue-1;

    if(newTemp<  22){
      setTempColor("cold");
    }
    setTemperatureValue(newTemp);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            incTemp();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decTemp();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default App;
