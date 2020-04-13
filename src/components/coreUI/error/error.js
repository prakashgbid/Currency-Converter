import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles(theme => ({
  p: {
    fontSize: "1rem",
    color: "red"
  },
  icon: {
    fontSize: '.8rem'
  }
}));

const Error = props => {
  const classes = useStyles();
  return (
    <p className={classes.p}>
      <ErrorIcon className={classes.icon} />
      {'    '}
      {props.errMsg}
    </p>
  );
};

export default Error;
