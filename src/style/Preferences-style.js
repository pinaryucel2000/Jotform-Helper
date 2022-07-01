import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "#E2E2E2  ",
    border: "1.5px solid",
    width: "850px",
    marginTop: "15px",
    height: "770px",
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
  },
  typographyHeader: {
    fontSize: "30px",
    color: "#666666",
  },
  dividerHeader: {
    background:
      "linear-gradient(to right, #F9F6F2  5%, #5ca8c6 10%, #3d7070  15%, #004949    25%,#0a1b40   80%, #0a1b40  90%,#5ca8c6 95%, #F9F6F2 );",
    marginTop: "15px",
    marginLeft: "120px",
    width: "550px",
  },
  headerContainer: {
    textAlign: "center",
    width: "100%",
    marginTop: "50px",
  },
  ruleContainer: {
    width: "95%",
    display: "flex",
    marginTop: "25px",
    marginLeft: "20px",
  },
  typographyRule: {
    fontFamily:
      "CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",
    fontSize: "20px",
    color: "black",
  },
  ruleDivider: {
    marginTop: "10px",
  },
}));

export default useStyles;
