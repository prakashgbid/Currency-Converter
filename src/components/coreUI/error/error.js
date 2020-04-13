import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

import useStyles from "./error.style";

const Error = props => {
  const classes = useStyles();
  return (
    <p className={classes.p}>
      <ErrorIcon className={classes.icon} />
      {"    "}
      {props.errMsg}
    </p>
  );
};

export default Error;
