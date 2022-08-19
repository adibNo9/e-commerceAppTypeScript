import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Product from "./Product/Product";

const Products: React.FC<{
  products: {
    id: string;
    name: string;
    price: { formatted_with_symbol: string };
    description: string;
    image: { url: string };
  }[];
  onAddToCart: (productId: string, quantity: number) => void;
}> = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid
          className={classes.content}
          container
          spacing={4}
          justifyContent="center"
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
