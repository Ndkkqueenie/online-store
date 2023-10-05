import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Container, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const Category = ({ categories }) => {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.toolbar} />
      <div className={classes.grid}>
        <Grid container justify="center" spacing={4}>
          {categories.map((category) => (
            <Grid
              item
              key={category.id}
              xs={9}
              sm={6}
              md={5}
              lg={3}
            >
              <Link key={category.id} to={`/category/${category.id}`}>
                <Card className={classes.categoryCard}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={category.assets.length > 0 ? category.assets[0].url : ''}
                    title={category.name}
                  />
                  <CardContent>
                    <Typography variant="h5">{category.name}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Category;