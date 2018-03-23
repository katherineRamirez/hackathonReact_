import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOv5tv0rN5Mih51I-c6XHKhxCqa-AEC8&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -33.4569400, lng: -70.6482700 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -33.4569400, lng: -70.6482700 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MapContainer extends React.PureComponent {


  state = {
    isMarkerShown: false,
  }
  componentDidMount() {
    this.delayedShowMarker()
  }
  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }
  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {

    return (
      <div>

        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>

    )
  }
}

export default MapContainer;
