import React, { useState } from 'react';
import './TipCalculator.css';

function TipCalculator() {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);

  return (
    <div className="calculator-container">
      <form>
        <label>
          Bill
          <input
            type="number"
            value={bill}
            onChange={(e) => {
              setBill(e.target.value);
            }}
          />
        </label>
        <label>
          Tip %
          <input
            type="number"
            value={tipPercentage}
            onChange={(e) => {
              setTipPercentage(e.target.value);
            }}
          />
        </label>
        <label>
          Number of People
          <input
            type="number"
            value={people}
            min={1}
            onChange={(e) => {
              setPeople(e.target.value);
            }}
          />
        </label>
      </form>
      <div className="output">
        <div className="output-container">
          <div className="output-heading">
            <h2>Tip</h2>
            <p>per person</p>
          </div>
          <div>
            <p className="total">{formatter.format((bill * (tipPercentage / 100)) / people)}</p>
          </div>
        </div>
        <div className="output-container">
          <div className="output-heading">
            <h2>Total</h2>
            <p>per person</p>
          </div>
          <div>
            <p className="total">
              {formatter.format(bill / people + (bill * (tipPercentage / 100)) / people)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
