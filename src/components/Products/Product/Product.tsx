import React, { MouseEvent } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product: React.FC<{
  product: {
    name: string;
    price: { formatted_with_symbol: string };
    description: string;
    image: { url: string };
    id: string;
  };
  onAddToCart: (productId: string, quantity: number) => void;
}> = ({ product, onAddToCart }) => {
  const classes: ClassNameMap<string> = useStyles();

  const addToCartHandler = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: `${product.description}` }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={addToCartHandler}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
