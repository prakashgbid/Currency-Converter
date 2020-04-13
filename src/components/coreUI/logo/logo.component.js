import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import useStyles from "./logo.style";

const LogoController = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SvgIcon className={classes.svg}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
  );
};

export default LogoController;
