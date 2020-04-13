import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
