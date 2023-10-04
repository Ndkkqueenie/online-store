import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders app', () => {
  render(<App />);
});

// Mock Commerce.js functions and modules
jest.mock('./lib/commerce', () => ({
  commerce: {
    products: {
      list: async () => ({
        data: [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 },
        ],
      }),
    },
    cart: {
      retrieve: async () => ({ total_items: 0, line_items: [] }),
      add: async () => ({ cart: {} }),
    },
    checkout: {
      capture: async () => ({ id: 'order123' }),
    },
  },
}));

describe('App', () => {
  it('renders the Navbar component', () => {
    render(<App />);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  it('fetches and displays a list of products', async () => {
    render(<App />);
    const product1Element = await screen.findByText('Product 1');
    const product2Element = await screen.findByText('Product 2');
    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
  });

  // Add more tests for cart, checkout, and other functionalities as needed
});
