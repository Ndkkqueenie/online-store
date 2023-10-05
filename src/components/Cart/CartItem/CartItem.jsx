import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  // Check if item.media exists before accessing item.media.source
  const imageSource = item.image ? item.image.url : '';

  return (
    <Card>
      {/* Use the imageSource variable for the image */}
      <CardMedia image={imageSource} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant='subtitle1'>{item.name}</Typography>
        <Typography variant='subtitle2'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button 
          variant='contained' 
          type='button' 
          color='secondary' 
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;