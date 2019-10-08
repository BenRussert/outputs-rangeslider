import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

const counterStyle = {
  position: "absolute",
  pointerEvents: "none",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};

function useIndex(max) {
  const [index, _setIndex] = useState(0);

  function setIndex(val) {
    if (val >= 0 && val <= max) {
      _setIndex(val);
    }
  }

  function onChange(e) {
    const newIndex = Number(e.target.value);
    console.log("newIndex ", newIndex);
    setIndex(newIndex);
  }

  return [index, setIndex, onChange];
}
function App() {
  const [outputs, setOutputs] = useState([10, 20]);
  const [index, setIndex, onIndexChange] = useIndex(outputs.length);

  React.useEffect(() => {
    console.log("new Index: ", index);
  }, [index]);

  function incrementIndex() {
    setIndex(index + 1);
  }

  function decrementIndex() {
    console.log("hey");
    setIndex(index - 1);
  }
  return (
    <div className="App">
      <div
        className="output-thing"
        onClick={() => setOutputs([...outputs, Math.random()])}
      >
        hey
      </div>
      <div className="slider">
        <div
          className="btn btn-xs icon icon-chevron-left"
          onClick={decrementIndex}
        />
        <input
          className="range-input"
          id="start"
          max={outputs.length - 1}
          min="0"
          name="outputs"
          onChange={onIndexChange}
          type="range"
          value={index}
        />
        <label htmlFor="outputs" />
        <div style={counterStyle}>
          {index + 1}/{outputs.length}
        </div>
        <div
          className="btn btn-xs icon icon-chevron-right"
          onClick={incrementIndex}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
