import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
    borderBottom: "1px solid  rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  toolbar: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "90%",
      margin: "0 10%",
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
