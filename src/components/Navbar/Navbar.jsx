import React from 'react';
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to="/" variant='h6' className={classes.title} >
            <img src={logo} alt='online store' height='30px' className={classes.image} />
            Glam Furnitures
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;