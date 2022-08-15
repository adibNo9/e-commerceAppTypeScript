import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react'
import useStyles from './styles';

const Product: React.FC<{product: {name: string, price: {formatted_with_symbol: string}, description: string, image: {url: string}}}> = ({product}) => {
  const classes: ClassNameMap<string> = useStyles();

  // const addToCartHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
  //   e.preventDefault();

  // }

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>{product.name}</Typography>
          <Typography variant='h5' >{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography variant='body2' color="textSecondary">{product.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product