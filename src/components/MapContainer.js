import React, {Component} from 'react';
import InitialMap from './InitialMap.js'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

// export default class MapContainer extends Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       markers: [{
//         position: {
//           lat: 25.01,
//           lng: 121.5,
//         }
//       }]
//     }
//     this.handleMapClick = this.handleMapClick.bind(this);
//     this.handleMarkerClick = this.handleMarkerClick.bind(this);
//     this.handleMarkerClose = this.handleMarkerClose.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.updatingContent = this.updatingContent.bind(this);
//   }
//
//
//   render(){
//     return(
//       <div>
//         <InitialMap
//           containerElement={
//             <div style={{height:'100vh', width:'auto'}}></div>
//           }
//           mapElement={
//             <div style={{height:'100vh', width:'100vw'}}></div>
//           }
//           marker={this.state.markers}
//           onMapLoad={this.handleMapLoad}
//           onMapClick={this.handleMapClick}
//           onMarkerRightClick={this.handleMarkerRightClick}
//           onMarkerClick={this.handleMarkerClick}
//           onMarkerClose={this.handleMarkerClose}
//         />
//       </div>
//     )
//   }
// }
