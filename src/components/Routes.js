import styled from "styled-components";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const centerMarker = {
  lat: 53.483959,
  lng: -2.244644
}
fetch(`https://cn-fitness-m37.herokuapp.com/routes/all`)
   .then((response) => console.log(response.json()))


function Routes(properties) {
  const center = useMemo(() => ({lat: 53.34, lng: -1.77}), [])
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), [])
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4rF0twpG2XX77FJIYfQKVDN9IoevXLys",
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
      <DivStyled>
        <div className="container">
          <div className="controls">
            <h1>controls</h1>
          </div>
          <div className="map">
            <GoogleMap zoom={13} center = { center } mapContainerClassName= "map-container" options={options}>
              <Marker position={centerMarker} />
            </GoogleMap>
          </div>
        </div>
      </DivStyled>)}

  const DivStyled = styled.div`
    .map{
      width: 100%;
      height: 100vh;
    }

    .map-container{
      width: 100%;
      height: 100vh;
    }
  `
  
  export default Routes;