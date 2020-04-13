import React, { useReducer } from "react";
import { store, reducer, initialState } from "./store/store";
import ErrorBoundry from "./components/errorBoundry/errorBoundry.component";
import CurrencyConverter from "./components/currencyConverter/currencyConverter";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ErrorBoundry>
      <store.Provider value={value}>
        <CurrencyConverter />
      </store.Provider>
    </ErrorBoundry>
  );
};

export default App;
