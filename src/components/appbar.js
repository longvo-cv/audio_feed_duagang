import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class TopNav extends Component {
  render() {
    function refreshPage(e) {
      e.preventDefault();
      console.log('refreshing page');
      window.location.reload();
    }
    return (
      <AppBar>
        <Toolbar
          className='nav-container'
          style={{ backgroundColor: '#5CDB95', color: '#05386B' }}
        >
          <Typography style={{ flex: 1 }}>
            <b>MY REACT APP</b>
          </Typography>
          <Button onClick={refreshPage} color='inherit'>
            <b>Click to refresh!</b>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopNav;
