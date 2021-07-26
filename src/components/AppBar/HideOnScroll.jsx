import React, { useState,useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import { Grow } from '@material-ui/core';

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

 const ScrolledAppBar = withStyles(styles) (({ classes }) => {
const [scrolling,setScrolling]= useState(false);
const [scrollTop, setScrollTop]= useState(0);
    const onScroll = e => {
    console.log(e.target.documentElement.scrollTop,"current",scrollTop,"prev");
    setScrolling(e.target.documentElement.scrollTop > scrollTop)
    setScrollTop(e.target.documentElement.scrollTop)
};
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    // shouldComponentUpdate(props, state) {
    //   return this.state.scrolling !== state.scrolling;
    // }



      return (
        <Grow in={!scrolling}>
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              color="inherit"
              className={classes.flex}
            >
              My Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Grow>

        // <Fade in={!scrolling}>
        //   <AppBar>
        //     <Toolbar>
        //       <IconButton
        //         className={classes.menuButton}
        //         color="inherit"
        //         aria-label="Menu"
        //       >
        //         <MenuIcon />
        //       </IconButton>
        //       <Typography
        //         variant="h6"
        //         color="inherit"
        //         className={classes.flex}
        //       >
        //         My Title
        //       </Typography>
        //       <Button color="inherit">Login</Button>
        //     </Toolbar>
        //   </AppBar>
        // </Fade>
      );
    }
);
const AppBarWithButtons = withStyles(styles)(
  ({ classes, title, buttonText }) => (
    <div className={classes.root}>
      <ScrolledAppBar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )

        
);

export default AppBarWithButtons;
