import React, { useState, useContext, useEffect } from "react";
import { store } from "../../store/store";

const ConversionRate = () => {
  const { state } = useContext(store);
  const { convertedCurrRate, baseCurrSymbol, convertedCurrSymbol } = state;
  console.log(state);
/*
  const [toAmount, setToAmount] = useState(null);
  useEffect(() => {
    if(exchangeRates != null){
      console.log(exchangeRates[convertedCurrSymbol]);
      setToAmount(exchangeRates[convertedCurrSymbol]);
    }
    
  }, [exchangeRates, convertedCurrSymbol]);

*/
  return <h3>1 {baseCurrSymbol} = {convertedCurrRate} {convertedCurrSymbol}</h3>;
};

export default ConversionRate;
