import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputBox } from "./Component/Input";
import InfoAboutCurrency from "./Hooks/InfoAboutCurrency";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = InfoAboutCurrency({ currency: from });

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    } else {
      console.error("Conversion rate not available");
    }
  };

  const options = Object.keys(currencyInfo);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const handleCurrencyChange = (currency, type) => {
    if (type === "from") {
      setFrom(currency);
    } else if (type === "to") {
      setTo(currency);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/23533608/pexels-photo-23533608/free-photo-of-the-light-within.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')`,
      }}
    >
      <div className="w-1/3 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <InputBox
          label="From"
          amount={amount}
          convertedAmount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={handleCurrencyChange}
          selectedCurrency={from}
          onAmountChange={handleAmountChange}
        />
        <button
          type="button"
          className="btn btn-success mt-3 w-full"
          onClick={convert}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
