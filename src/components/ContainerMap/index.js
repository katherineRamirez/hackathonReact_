import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapContainer from './Map';
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../../../src/components/Header';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  appBar: {
    height: 50,
  },
});


class ContainerMap extends Component{

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Header/>
      <div>
        <MapContainer/>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default ContainerMap;
