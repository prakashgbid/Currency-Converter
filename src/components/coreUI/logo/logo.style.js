import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2)
    }
  },
  svg: {
    color: green[500]
  }
}));

export default useStyles;
