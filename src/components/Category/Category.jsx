import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Container, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { Refresh } from '@material-ui/icons';

const Category = ({ categories }) => {
  const classes = useStyles();
  const [isFetched, setIsFetched] = useState(false); // Loading state

  useEffect(() => {
    // You can set isFetched to true when the image data is fetched
    // For simplicity, I'm just simulating a delay here.
    setTimeout(() => {
      setIsFetched(true);
    }, 2000); // Adjust the delay as needed
  }, []);

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
                  {isFetched ? ( // Conditionally render based on the loading state
                    <CardMedia
                      component="img"
                      height="194"
                      image={category.assets.length > 0 ? category.assets[0].url : ''}
                      title={category.name}
                    />
                  ) : (
                    <div className={classes.loader}>
                      <Refresh />
                      Loading...
                    </div>
                  )}
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