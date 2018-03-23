import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const Header = () => (
  <AppBar
    title="Mi pedido actual"
    iconElementRight={<IconButton>
    </IconButton>}
  />
);

export default Header;
