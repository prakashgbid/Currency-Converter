import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import {
  SET_EXCHANGE_RATES,
  SET_BASE_CURRENCY,
  SET_CONVERTED_CURRENCY,
  HANDLE_BASE_PRICE_CHANGE
} from "../../store/actionTypes";

import currency from "../../data/currency";
import { baseURL, lang } from "../../static/static";

import HeaderController from "../coreUI/header/header.component";
import InputControl from "../coreUI/input/input";
import SelectControl from "../coreUI/select/select";
import ConversionRate from "../conversionRate/conversionRate.component";

import { store } from "../../store/store";

import getExchangeRateAsync from "../../utils/getExchangeRateAsync";

import useStyles from "./currencyConverter.styles";

const CurrencyConverter = () => {
  const classes = useStyles();
  const { baseCurrTitle, convertedCurrTitle, baseCurrAmountTitle } = lang.en;

  const { state, dispatch } = useContext(store);
  const {
    baseCurrSymbol,
    convertedCurrSymbol,
    baseCurrAmount,
    convertedCurrRate
  } = state;

  useEffect(() => {
    getExchangeRateAsync(baseURL, baseCurrSymbol)
      .then(data => {
        const { rates } = data;
        const convertedCurrRate = rates[convertedCurrSymbol].toFixed(2);
        dispatch({
          type: SET_EXCHANGE_RATES,
          payload: {
            exchangeRates: rates,
            convertedCurrRate: convertedCurrRate
          }
        });
      })
      .catch(reason => {
        dispatch({
          type: SET_EXCHANGE_RATES,
          payload: { exchangeRates: null }
        });
      });
  }, [baseCurrSymbol, convertedCurrSymbol, dispatch]);

  const handleBaseCurrChange = payload => {
    dispatch({
      type: SET_BASE_CURRENCY,
      payload
    });
  };

  const handleConvertedCurrChange = payload => {
    dispatch({
      type: SET_CONVERTED_CURRENCY,
      payload
    });
  };

  const handleBasePriceChange = payload => {
    dispatch({
      type: HANDLE_BASE_PRICE_CHANGE,
      payload
    });
  };

  const ConvertedCurrency = () => (
    <h3 className={classes.h3}>
      {currency[convertedCurrSymbol].symbol}:{" "}
      {(baseCurrAmount * convertedCurrRate).toFixed(2)}
    </h3>
  );

  const Row = props => (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
      sm={12}
      spacing={3}
    >
      {props.children}
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" spacing={3}>
        <Row>
          <HeaderController />
        </Row>
        <Row>
          <Grid item xs={5}>
            <SelectControl
              label={baseCurrTitle}
              onChange={handleBaseCurrChange}
              symbol={baseCurrSymbol}
            />
          </Grid>
          <Grid item xs={2}>
            <SwapHorizIcon className={classes.arrowRight} />
          </Grid>
          <Grid item xs={5}>
            <SelectControl
              label={convertedCurrTitle}
              onChange={handleConvertedCurrChange}
              symbol={convertedCurrSymbol}
            />
          </Grid>
        </Row>
        <Row>
          <ConversionRate />
        </Row>
        <Row>
          <Grid item xs={5}>
            <InputControl
              label={baseCurrAmountTitle}
              onChange={handleBasePriceChange}
              curr={currency[baseCurrSymbol].symbol}
              val={baseCurrAmount}
            />
          </Grid>
          <Grid item xs={2}>
            <ArrowRightAltIcon className={classes.arrowRight} />
          </Grid>
          <Grid item xs={5}>
            <ConvertedCurrency />
          </Grid>
        </Row>
      </Grid>
    </div>
  );
};

export default CurrencyConverter;
