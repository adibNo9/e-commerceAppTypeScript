import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    margin: "5% 0",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  buttonContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5%",
    width: "100%",
    paddingBottom: "5%",
  },
}));
