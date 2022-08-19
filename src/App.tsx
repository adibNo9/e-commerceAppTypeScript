import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import { CircularProgress } from "@material-ui/core";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({
    line_items: [],
    total_items: null,
    id: "",
  });

  const fetchProducts = async () => {
    const response = await commerce.products.list();

    setProducts(response.data);
  };

  const addToCartHandler = async (productId: string, quantity: number) => {
    const cart = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const updateCartHandler = async (productId: string, quantity: number) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response);
  };

  const removeFromCartHandler = async (productId: string) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  const emptyCartHandler = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  if (cart.total_items === null)
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
      <BrowserRouter>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={addToCartHandler} />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                onUpdateCart={updateCartHandler}
                onRemoveFromCart={removeFromCartHandler}
                onEmptyCart={emptyCartHandler}
              />
            }
          />
          <Route path="checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
