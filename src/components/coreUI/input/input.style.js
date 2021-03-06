import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
