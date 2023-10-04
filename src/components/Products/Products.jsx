import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import { Refresh } from '@material-ui/icons';

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  if (!categories.length) {
    return (
      <h1 className={classes.loader}>
        <Refresh />
        Loading...
      </h1>
    );
  }

  return (
    <Container fixed>
      <div className={classes.toolbar} />
      {categories.map((category) => (
        <div key={category.id} className={classes.grid}>
          <Typography variant="h4">{category.name}</Typography>
          <Grid container justify="center" spacing={4}>
            {category.productsData.map((product) => (
              <Grid
                item
                key={product.id}
                xs={9}
                sm={6}
                md={5}
                lg={3}
              >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}      
    </Container>
  );
}

export default Products;