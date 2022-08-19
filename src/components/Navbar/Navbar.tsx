import {
  AppBar,
  Badge,
  CircularProgress,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../assets/085622af8231ab6eb78b80eb2add557a.jpg";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{ totalItems: number }> = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  if (totalItems === null)
    return (
      <CircularProgress
        color="inherit"
        style={{
          display: "flex",
          height: "80vh",
          margin: "auto",
        }}
      />
    );

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={classes.title}
          >
            <img
              src={logo}
              alt="alpha-commercejs"
              height="45px"
              className={classes.image}
            />
            Alpha E-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                aria-label="Show Cart items"
              >
                <Badge
                  overlap="rectangular"
                  color="secondary"
                  badgeContent={totalItems}
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
