import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout, HomePage, Category } from './components';
import { Refresh } from '@material-ui/icons';

function App() {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data: products } = await commerce.products.list();
      const { data: categories } = await commerce.categories.list();

      const productsByCategory = categories.map(category => ({
        ...category,
        productsData: products.filter(product =>
          product.categories.find(cat => cat.id === category.id)
        ),
      }));

      setCategories(productsByCategory);
      setIsFetching(false); // Set loading state to false after data is fetched
    } catch (error) {
      console.error('Error fetching products:', error);
      setIsFetching(false); // Handle error by setting loading state to false
    }
  }

  if (isFetching) {
    return (
      <h1>
        <Refresh />
        Loading...
      </h1>
    );
  }

  const fetchCart = async () => {
    setCart (await commerce.cart.retrieve())

  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  
  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (CheckoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(CheckoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div> 
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Category categories={categories} />
          </Route>
          <Route path="/category/:categoryId" >
            <Products categories={categories} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout 
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
