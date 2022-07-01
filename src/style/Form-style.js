import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "#E2E2E2  ",
    border: "1.5px solid",
    width: "850px",
    marginTop: "15px",
    height: "770px",
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    height: "768px",
    width: "847px",
    backgroundColor: "#F9F6F2",
    color: "black",
    position: "relative",
  },
}));

export default useStyles;
