import React, { Fragment, useState, forwardRef, useRef } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const  MenuItems= ({ closeMenu , ref}) => (
    <Fragment>
        <div ref={ref} >

      <MenuItem onClick={closeMenu}>Profile</MenuItem>
      <MenuItem onClick={closeMenu}>My account</MenuItem>
      <MenuItem onClick={closeMenu}>Logout</MenuItem>
      </div>
    </Fragment>
  )
  const RealMeuns= forwardRef(MenuItems)
const  RightButton = () => <Button color="inherit">Login</Button>


const MyToolbar = withStyles(styles)(({ classes, title}) =>
   {
const divRef= useRef(null);

   const[ anchor,setAnchor] = useState( null );

  const  closeMenu = () => setAnchor( null );


      return (
        <Fragment>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={e =>
                 setAnchor( e.currentTarget )
                }
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={closeMenu}
              >
                <RealMeuns ref={divRef} closeMenu={closeMenu} />
              </Menu>
              <Typography
                variant="h1"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
              <RightButton />
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
  }
);

const ToolbarAbstraction = withStyles(styles)(
  ({ classes, ...props }) => (
      <>
    <div className={classes.root}>
      <MyToolbar {...props} />
    </div>
    </>
  )
);

export default ToolbarAbstraction;
