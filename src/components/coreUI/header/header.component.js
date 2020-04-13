import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    align: "center"
  },
  logo: {
    marginRight: theme.spacing(2),
    color: "red"
  }
}));

const HeaderController = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <AccountBalanceIcon className={classes.logo} />
          <Typography variant="h6" color="inherit">
            Currency Converter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderController;
