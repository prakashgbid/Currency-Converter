import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  },
  select: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "brown"
  }
}));

export default useStyles;
