import React, { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';


function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();

    setProducts(response.data);
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />  
      {/* <Products products={products} /> */}
      <Cart />
    </div>
  );
}

export default App;
