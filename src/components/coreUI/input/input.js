import React, { useState } from "react";
import Error from "../error/error";
import { errorMessages } from "../../../static/static";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      minWidth: "100%"
    }
  },
  input: {
    fontWeight: "bold",
    color: "#487BEA"
  }
}));

const placeholderText = "00.00";

const InputControl = props => {
  const classes = useStyles();

  const { label, disabled, onChange, curr, val } = props;

  const [showErr, setShowErr] = useState(false);
  const [value, setValue] = useState(val);

  const formatCurrency = amount => {
    const temp = amount.split(".").join("");
    if (temp.length > 0) {
      if (temp === ".") {
        return "";
      } else {
        return temp.slice(0, -2) + "." + temp.slice(-2);
      }
    } else {
      return temp;
    }
  };

  const handleChange = e => {
    const newVal = e.target.value;
    const isNum = Number(e.target.value);
    if ((isNum && isNum !== NaN) || newVal === "" || newVal === ".") {
      setShowErr(false);
      setValue(formatCurrency(newVal));
      onChange({ baseCurrAmount: formatCurrency(newVal) });
    } else {
      setShowErr(true);
      setValue(value);
    }
  };

  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        className={classes.input}
        id="outlined-adornment-amount"
        value={value}
        startAdornment={
          <InputAdornment position="start">{curr}</InputAdornment>
        }
        error={showErr}
        disabled={disabled}
        label={label}
        variant="outlined"
        onChange={handleChange}
        placeholder={placeholderText}
        type="text"
      />
      {showErr && <Error errMsg={errorMessages.NaN} />}
    </FormControl>
  );
};

export default InputControl;
