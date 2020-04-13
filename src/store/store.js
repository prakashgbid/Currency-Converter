import { createContext } from "react";
import {
  SET_EXCHANGE_RATES,
  SET_BASE_CURRENCY,
  SET_CONVERTED_CURRENCY,
  HANDLE_BASE_PRICE_CHANGE,
  HANDLE_CONVERT_CURRENCY
} from "./actionTypes";
import fx from "money";

export const initialState = {
  baseCurrSymbol: "USD",
  convertedCurrSymbol: "CAD",
  exchangeRates: null,
  convertedCurrRate: null,
  baseCurrAmount: 1,
  convertedCurrAmount: null
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EXCHANGE_RATES: {
      return {
        ...state,
        exchangeRates: payload.exchangeRates,
        convertedCurrRate: payload.convertedCurrRate
      };
    }

    case SET_BASE_CURRENCY: {
      return {
        ...state,
        baseCurrSymbol: payload.currency,
        exchangeRates: payload.exchangeRates
      };
    }

    case SET_CONVERTED_CURRENCY: {
      return { ...state, convertedCurrSymbol: payload.currency };
    }

    case HANDLE_BASE_PRICE_CHANGE: {
      return { ...state, baseCurrAmount: payload.baseCurrAmount };
    }

    case HANDLE_CONVERT_CURRENCY: {
      return { ...state, baseCurrAmount: payload.baseCurrAmount };
    }

    default:
      return state;
  }
};

export const store = createContext({
  state: initialState,
  dispatch: () => 0
});

export const provider = store.provider;
