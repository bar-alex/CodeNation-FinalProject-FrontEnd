// The following is an @react-google-maps/api documentation
// url: https://react-google-maps-api-docs.netlify.app/

import { GoogleMap, LoadScript } from "@react-google-maps/api"

const center = {
    lat: 53.457,
    lng: 2.157
};

function ManchesterMap() {
    return (
        <div className="mapWrapper">
      <LoadScript
        googleMapsApiKey="AIzaSyDsB_AaqEZtDK2ZD_c4DJL0I_4WEkeMfog"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    )
  }
  
  export default React.memo(ManchesterMap)
