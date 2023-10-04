import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '250px',
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        edge="start"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="temporary"
        className={classes.drawer}
      >
        <List>
          <ListItem button component={Link} to="/products/chairs">
            <ListItemText primary="Chairs" />
          </ListItem>
          <ListItem button component={Link} to="/products/tables">
            <ListItemText primary="Tables" />
          </ListItem>
          <ListItem button component={Link} to="/products/cupboards">
            <ListItemText primary="Cupboards" />
          </ListItem>
          <ListItem button component={Link} to="/products/accessories">
            <ListItemText primary="Accessories" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;