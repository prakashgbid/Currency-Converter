import React, { useContext, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import currency from "../../data/currency";
import HeaderController from "../coreUI/header/header.component";
import InputControl from "../coreUI/input/input";
import SelectControl from "../coreUI/select/select";
import ConversionRate from "../conversionRate/conversionRate.component";
import { store } from "../../store/store";
import {
  SET_EXCHANGE_RATES,
  SET_BASE_CURRENCY,
  SET_CONVERTED_CURRENCY,
  HANDLE_BASE_PRICE_CHANGE,
  HANDLE_CONVERT_CURRENCY
} from "../../store/actionTypes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "1px 1px 1px 1px #3b7cbf"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  h3: {
    color: "#487BEA"
  },
  button: {
    minWidth: "100%"
  },
  arrowRight: {
    minWidth: "100%",
    color: "green",
    height: 35
  }
}));

const CurrencyConverter = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(store);
  const{baseCurrSymbol,convertedCurrSymbol, baseCurrAmount, convertedCurrRate} = state;

  async function getExchangeRateAsync(baseCurrSymbol) {
    let response = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${baseCurrSymbol}`
    );
    let data = await response.json();
    return data;
  }

  useEffect(()=>{
    console.log(baseCurrSymbol + ' ' +convertedCurrSymbol);
    
    getExchangeRateAsync(baseCurrSymbol)
    .then(data =>{
      const {rates} = data;
      const convertedCurrRate = rates[convertedCurrSymbol];
      dispatch({
        type: SET_EXCHANGE_RATES,
        payload: { exchangeRates: rates, convertedCurrRate:convertedCurrRate }
      });
    })
    .catch(reason => {
      console.log('API response error' + reason.message);
      dispatch({
        type: SET_EXCHANGE_RATES,
        payload: { exchangeRates: null }
      });
    });
    
  },[baseCurrSymbol, convertedCurrSymbol]); 

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

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid 
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          sm={12}
          spacing={3}>
          <HeaderController />
        </Grid>

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
          <Grid item xs={5}>
            <SelectControl
              label="Base"
              onChange={handleBaseCurrChange}
              symbol={baseCurrSymbol}
            />
          </Grid>
          <Grid item xs={2}>
            <SwapHorizIcon className={classes.arrowRight} />
          </Grid>
          <Grid item xs={5}>
            <SelectControl
              label="To"
              onChange={handleConvertedCurrChange}
              symbol={convertedCurrSymbol}
            />
          </Grid>
        </Grid>
        <Grid container item align="center" xs={12} sm={12} spacing={0}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <ConversionRate />
          </Grid>
          <Grid item xs={2} />
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={12}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={5}>
            <InputControl
              label="Amount"
              onChange={handleBasePriceChange}
              curr={currency[baseCurrSymbol].symbol}
              val={baseCurrAmount}
            />
          </Grid>
          <Grid item xs={2}>
            <ArrowRightAltIcon className={classes.arrowRight} />
          </Grid>
          
          <Grid item xs={5}>
  <h3>{currency[convertedCurrSymbol].symbol}: {baseCurrAmount * convertedCurrRate}</h3>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrencyConverter;
