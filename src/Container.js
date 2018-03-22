import React from 'react';
import {render} from 'react-dom';
import GoogleApiComponent from './GoogleApiComponent';
import Map from './Map';

class Container extends React.Component{

  render(){
    const style = {
      width: '100vw',
      height: '100vh'
    };

    return (
      <div style={style} >
        <Map google={this.props.google}/>
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container);
