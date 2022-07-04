// The following is an @react-google-maps/api documentation
// url: https://react-google-maps-api-docs.netlify.app/
import React, { Component } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const route =
// { 
//   routeId: 0,
//   name: "Default",
//   lat: 53.483959,
//   lng: -2.244644
// };
// {
//   routeId: 1,
//   name: "The Meadow, Salford",
//   lat: 53.48523799057195,
//   lng: -2.2678729258604644
// },
// { 
//   routeId: 2,
//   name: "Test Route 2",
//   lat: 53.483959,
//   lng: -2.244644
// },
// { 
//   routeId: 3,
//   name: "Test Route 3",
//   lat: 56.604894165012546, 
//   lng: -4.185915419794618
// },

const containerStyle = {
  width: "500px",
  height: "500px"
};

const center = {
  lat: 53.483959,
  lng: -2.244644
};

const options = {
    zoomControl: false,
    streetViewControl: false,
};

const RouteMap = {
  render() {
    return (
      <LoadScript
      googleMapsApiKey="process.env.REACT_APP_FRONTEND_GOOGLE_API_KEY"
      >
      <GoogleMap
          options={options}
          mapContainerStyle={containerStyle}
          center={center}       
          zoom={10}
          clickableIcons={false}
          >
        </GoogleMap>
      </LoadScript>
    )
  }
};

class MeadowSalfordCircuit extends React.RouteMap {
  render() {
    return (
      <LoadScript
      googleMapsApiKey="process.env.REACT_APP_FRONTEND_GOOGLE_API_KEY"
      >
        <GoogleMap
          options={options}
          mapContainerStyle={containerStyle}
          center={{
            lat: 53.48523799057195,
            lng: -2.2678729258604644
          }}       
          zoom={10}
          clickableIcons={false}
          >
        </GoogleMap>
      </LoadScript>
    )
  }
};

export default React.memo(RouteMap);
