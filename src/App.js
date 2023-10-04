import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout, LandingPage, About } from './components';

function App() {
  const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  //const [selectedCategory, setSelectedCategory] = useState('');

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();

    const productsByCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) => 
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);

    setCategories(productsByCategory);
  }

  const fetchCart = async () => {
    setCart (await commerce.cart.retrieve())

  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

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
        <LandingPage />
        <Switch>
          <Route exact path="/">
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
      <About />
      </div>
    </Router> 
  );
}

export default App;
