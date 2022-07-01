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

    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        border: "1.5px solid",
      },
      "&:hover fieldset": {
        borderColor: "black",
        border: "1.5px solid",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  headerContainer: {
    marginTop: "50px",
    textAlign: "center",
    width: "100%",
  },
  typographyHeader1: {
    fontSize: "30px",
    color: "#666666",
  },
  typographyHeader2: {
    fontSize: "30px",
    color: "#136ea0",
    fontWeight: "500",
  },
  container: {
    marginTop: "50px",
    width: "920px",
    height: "20px",
  },
  input: {
    width: "780px",
    marginLeft: "30px",
    fontSize: "20px",
  },
  typographyTitle: {
    width: "150px",
    marginLeft: "30px",
    marginBottom: "8px",
    fontSize: "20px",
    fontWeight: "Bold",
  },
  dividerHeader: {
    background:
      "linear-gradient(to right, #F9F6F2  5%, #5ca8c6 10%, #3d7070  15%, #004949    25%,#0a1b40   80%, #0a1b40  90%,#5ca8c6 95%, #F9F6F2 );",
    marginLeft: "205px",
    marginTop: "15px",
    width: "400px",
  },
  button: {
    marginLeft: "750px",
    marginTop: "10px",
    backgroundColor: "#f8f4fc",
  },
  typographyButton: {
    fontSize: "18px",
  },
}));

export default useStyles;
