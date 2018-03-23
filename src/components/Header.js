import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';


//
const Header = () => (
  <AppBar
    title="Mi pedido actual"
    iconElementRight={<IconButton>
    </IconButton>}
  />
);

export default Header;
