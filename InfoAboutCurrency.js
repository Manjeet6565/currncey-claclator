import { useEffect, useState } from "react";

function InfoAboutCurrency({ currency }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/cda6cd85bed4f7ee76457c05/latest/USD`)
      .then((res) => res.json())
      .then((res) => {
        const rates = res.conversion_rates;
        setData(rates);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, [currency]);

  return data;
}

export default InfoAboutCurrency;
