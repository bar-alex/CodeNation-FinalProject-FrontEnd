// The following is an @react-google-maps/api documentation
// url: https://react-google-maps-api-docs.netlify.app/
import React from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 53.483959,
    lng: -2.244644
};

function RouteMap() {
    return (
        <div className="mapWrapper">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_FRONTEND_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          clickableIcons={false}

        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    )
  }
  
  export default React.memo(RouteMap)
