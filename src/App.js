import React, { Component } from 'react';
import ContainerMap from './components/ContainerMap'
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header';
import './App.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  appBar: {
    height: 50,
  },
});
class App extends Component {
  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div className= 'App'>
          <Header/>
          <ContainerMap/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
