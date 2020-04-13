import * as types from "./actionTypes";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_EXCHANGE_RATES: {
      return {
        ...state,
        exchangeRates: payload.exchangeRates,
        convertedCurrRate: payload.convertedCurrRate
      };
    }

    case types.SET_BASE_CURRENCY: {
      return {
        ...state,
        baseCurrSymbol: payload.currency,
        exchangeRates: payload.exchangeRates
      };
    }

    case types.SET_CONVERTED_CURRENCY: {
      return { ...state, convertedCurrSymbol: payload.currency };
    }

    case types.HANDLE_BASE_PRICE_CHANGE: {
      return { ...state, baseCurrAmount: payload.baseCurrAmount };
    }

    case types.HANDLE_CONVERT_CURRENCY: {
      return { ...state, baseCurrAmount: payload.baseCurrAmount };
    }

    default:
      return state;
  }
};

export default reducer;
