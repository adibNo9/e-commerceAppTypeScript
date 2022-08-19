import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";

type ItemType = {
  id: string;
  product_name: string;
  line_total: { formatted_with_symbol: string };
  image: { url: string };
  quantity: number;
};

const CartItem: React.FC<{
  item: ItemType;
  onUpdateCart: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}> = ({ item, onUpdateCart, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.image.url} className={classes.media} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {item.product_name}
          </Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          onClick={() => onRemoveFromCart(item.id)}
        >
          REMOVE
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
