import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import currency from "../../../data/currency";

import useStyles from "./select.style";

const SelectControl = props => {
  const classes = useStyles();
  const { label, symbol, onChange } = props;

  const handleChange = e => {
    e.persist();
    onChange({ currency: e.target.value });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select
        native
        value={symbol}
        onChange={handleChange}
        label={label}
        inputProps={{
          id: "outlined-age-native-simple"
        }}
        className={classes.select}
      >
        {Object.keys(currency).map(option => (
          <option key={option} value={option}>
            {`${option}[${currency[option].symbol}]`}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectControl;
