import React from 'react';
import { Typography, Card, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import useStyles from './styles';
import logo from '../../../assets/085622af8231ab6eb78b80eb2add557a.jpg';

const CartItem = () => {
  const classes = useStyles();

  return (
    <Card>
            <CardMedia image={logo}  className={classes.media} />
            <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>test</Typography>
                <Typography variant='h5' >15.99</Typography>
              </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <div className={classes.buttons}>
                <Button type='button' size='small'>-</Button>
                <Typography>0</Typography>
                <Button type='button' size='small'>+</Button>
              </div>
              <Button type='button' color="secondary" variant='contained'>REMOVE</Button>
            </CardActions>
          </Card>
  )
}

export default CartItem;