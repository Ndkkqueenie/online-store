import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Collapse, styled } from '@material-ui/core';
import { AddShoppingCart, Favorite, Share, ExpandMore } from '@material-ui/icons';
import { Refresh } from '@material-ui/icons';
import useStyles from './styles';

const ExpandMoreIcon = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Product = ({ product, onAddToCart }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFetched, setIsFetched] = useState(false); // Loading state
	const classes = useStyles();

  useEffect(() => {
    // Simulating a delay for image loading (replace with actual image loading logic)
    setTimeout(() => {
      setIsFetched(true);
    }, 2000); // Adjust the delay as needed
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {isFetched ? ( // Conditionally render based on the loading state
        <CardMedia
          component="img"
          height="194"
          image={product.image?.url}
          title={product.name}
        />
      ) : (
        <div className={classes.loader}>
          <Refresh />
          Loading...
        </div>
      )}
      <CardContent>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMoreIcon
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreIcon>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;