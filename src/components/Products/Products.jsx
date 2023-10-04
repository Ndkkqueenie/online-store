import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles(); // Move this line to the top

  if (!categories.length) return <p>Loading...</p>

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {categories.map(category => category.productsData.map((product) => (
          <Grid 
            item key={product.id} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
          >
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        )))}
      </Grid>
    </main>
  );
}

export default Products;