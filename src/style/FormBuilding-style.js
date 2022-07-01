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
  link: {
    margin: "5px",
    borderRadius: "50%",
    border: "2px solid #f98e03",
    width: "52px",
    height: "52px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundImage:
      'url("//www.gravatar.com/avatar/266ca03e409566bead65079af3ed408c?s=50&d=https://cdn.jotfor.ms/assets/img/v4/avatar/Podo-Avatar2-01.png")',
  },
}));

export default useStyles;
