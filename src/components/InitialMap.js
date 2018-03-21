import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InitialMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOv5tv0rN5Mih51I-c6XHKhxCqa-AEC8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

// <InitialMap isMarkerShown />
 {/* const InitialMap = withGoogleMap(props =>{
  return(
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
  >
    {props.marker.map((marker, index) => (
      <Marker
        key = {index}
        position={marker.position}
        onClick={()=>props.onMarkerClick(marker)}
      />
      {marker.showInfo && (
        <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
          {
            marker.imageUrl ? <div id="InfoWindow"><img src={marker.imageUrl}/><p id="">Hello</p></div>
          }
        </InfoWindow>
      )}
    </Marker>
    ))}
  </GoogleMap>
)
}) */}

export default InitialMap;
