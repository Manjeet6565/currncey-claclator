import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function InputBox({
  amount,
  convertedAmount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
}) {
  return (
    <div className="card w-full">
      <div className="card-body">
        <h5 className="card-title">Currency Converter</h5>

        <input
          type="text"
          placeholder="Converted Amount"
          className="mb-3 form-control"
          value={convertedAmount}
          readOnly
        />

        <input
          type="number"
          placeholder="Amount"
          className="mb-3 form-control"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />

        <div className="mb-3">
          <label htmlFor="fromCurrency" className="form-label">
            From
          </label>
          <select
            id="fromCurrency"
            className="form-select"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange(e.target.value, "from")}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="toCurrency" className="form-label">
            To
          </label>
          <select
            id="toCurrency"
            className="form-select"
            onChange={(e) => onCurrencyChange(e.target.value, "to")}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
