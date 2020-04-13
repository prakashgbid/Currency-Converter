import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import { lang } from "../../../static/static";
import useStyles from "./header.style";

const HeaderController = () => {
  const classes = useStyles();
  const { headerTitle } = lang.en;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <AccountBalanceIcon className={classes.logo} />
          <Typography variant="h6" color="inherit">
            {headerTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderController;
