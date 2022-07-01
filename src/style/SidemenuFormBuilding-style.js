import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
    width: "270px",
    height: "800px",
    backgroundColor: "#f8f4fc",
  },
  typography: {
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
    margin: "-15px",
    fontSize: "20px",
  },
  menuItem: { padding: "20px" },
  typographyNested: {
    fontSize: "16px",
    marginLeft: "5px",
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
  },
}));

export default useStyles;
