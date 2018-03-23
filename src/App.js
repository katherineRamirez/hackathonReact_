import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContainerMap from './components/ContainerMap'
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header';
import './App.css';



class App extends Component {

  render() {

    return (


        <div className= 'App'>
          <Header/>
          <ContainerMap />
        </div>

    );
  }
}

export default App;
