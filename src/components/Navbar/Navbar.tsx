import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import logo from '../../assets/085622af8231ab6eb78b80eb2add557a.jpg';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed' className={classes.appbar} color='inherit'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' color='inherit' className={classes.title} >
            <img src={logo} alt='alpha-commercejs' height='45px' className={classes.image} />
            Alpha E-Commerce
          </Typography>
          <div className={classes.grow} />
            <div className={classes.menuButton}>
              <IconButton color='inherit' aria-label='Show Cart items' >
                <Badge overlap='rectangular' color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;