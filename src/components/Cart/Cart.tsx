import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

interface ItemType {
  id: string;
  product_name: string;
  line_total: { formatted_with_symbol: string };
  image: { url: string };
  quantity: number;
}

interface CartItemType {
  line_items: ItemType[];
}

const Cart: React.FC<{
  cart: CartItemType;
  onUpdateCart: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onEmptyCart: () => void;
}> = ({ cart, onUpdateCart, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyle();

  const cartItems: ItemType[] = cart.line_items;

  console.log(cartItems);

  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no item in your Shopping Cart,
      <Link to="/" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <CartItem
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">subtotal: $16.99</Typography>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.emptyButton}
            type="button"
            size="large"
            color="secondary"
            variant="contained"
            onClick={() => onEmptyCart()}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            type="button"
            size="large"
            color="primary"
            variant="contained"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container maxWidth="md">
      <div className={classes.toolbar} />
      <Typography variant="h4" className={classes.title}>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
