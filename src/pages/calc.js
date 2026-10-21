import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="form-container">
      <h1>React Calculator Engine</h1>
      
      <div className="form-group">
        <label>Enter First Number: </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="0"
        />
      </div>

      <div className="form-group">
        <label>Enter Second Number: </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="0"
        />
      </div>

      <div className="button-group" style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
        <button onClick={handleAddition} className="btn-submit" style={{ padding: "0.5rem 1rem" }}>Add (+)</button>
        <button onClick={handleSubtraction} className="btn-submit" style={{ padding: "0.5rem 1rem" }}>Subtract (-)</button>
        <button onClick={handleMultiplication} className="btn-submit" style={{ padding: "0.5rem 1rem" }}>Multiply (*)</button>
        <button onClick={handleDivision} className="btn-submit" style={{ padding: "0.5rem 1rem" }}>Divide (/)</button>
        <button onClick={handleClear} className="btn-reset" style={{ padding: "0.5rem 1rem" }}>Clear</button>
      </div>

      <div className="feature-card">
        <h3>Calculation Output</h3>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calc;
