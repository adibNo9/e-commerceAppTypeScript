import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './styles';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  const classes = useStyle();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no item in your Shopping Cart,start adding some!</Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
          <CartItem />
        </Grid>
        <Grid item xs={12} sm={4} >
        <CartItem />
        </Grid>
        <Grid item xs={12} sm={4} >
        <CartItem />
        </Grid>
        <Grid item xs={12} sm={4} >
        <CartItem />
        </Grid>
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          subtotal: $16.99
        </Typography>
        <div>
          <Button className={classes.emptyButton} type='button' size='large' color='secondary' variant='contained'>Empty Cart</Button>
          <Button className={classes.checkoutButtom} type='button' size='large' color='primary' variant='contained'>Checkout</Button>
        </div>
      </div>
    </>
    
  );


  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant='h4' className={classes.title} gutterBottom>Your Shopping Cart</Typography>
      <FilledCart />
    </Container>
  )
}

export default Cart;