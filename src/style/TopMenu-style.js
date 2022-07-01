import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    display: "flex",
    float: "right",
    height: "60px",
    marginTop: "-10px",
  },
  typography: {
    textTransform: "none",
    padding: "13px",
    color: "white",
    fontSize: "16px",
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  underlinedTypography: {
    textTransform: "none",
    padding: "13px",
    color: "white",
    fontSize: "16px",
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
    fontWeight: "500",
    whiteSpace: "nowrap",
    textDecoration: "underline white",
    textUnderlineOffset: "5px",
  },
}));

export default useStyles;
