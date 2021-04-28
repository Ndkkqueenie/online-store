import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmHL-9DCWo0oozfRE36rCelBHRl7E9qIBdQ&usqp=CAU'
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '$10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaV4CGqBFvno2a4I_ys1sOHKPpyZo1fg1gA5mOxae0PjddxwzIdYaAXfnrOmiyRQv-6L8&usqp=CAU'
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid 
            item key={product.id} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
          >
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;