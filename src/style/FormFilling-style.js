import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  container: {
    display: "block",
    width: "1150px",
    minWidth: "1150px",
    minHeight: "800px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  paper: {
    position: "relative",
    width: "1150px",
    minWidth: "1150px",
    minHeight: "800px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "50px",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export default useStyles;
