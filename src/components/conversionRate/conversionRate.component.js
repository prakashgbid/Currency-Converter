import React, { useContext } from "react";
import { store } from "../../store/store";

const ConversionRate = () => {
  const { state } = useContext(store);
  const { convertedCurrRate, baseCurrSymbol, convertedCurrSymbol } = state;

  return (
    <h3>
      1 {baseCurrSymbol} = {convertedCurrRate} {convertedCurrSymbol}
    </h3>
  );
};

export default ConversionRate;
