import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Container } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import { Refresh } from '@material-ui/icons';

const Products = ({ categories, onAddToCart }) => {
  const { categoryId } = useParams();
  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  const classes = useStyles();

  if (!selectedCategory) {
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
      <div className={classes.header}>
        <Typography variant="h4">{selectedCategory.name}</Typography>
      </div>
      <div className={classes.grid}>
        <Grid container justify="center" spacing={4}>
          {selectedCategory.productsData.map((product) => (
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
    </Container>
  );
}

export default Products;