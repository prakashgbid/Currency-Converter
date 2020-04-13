import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
