import styled from "styled-components";
import { useLoadScript, GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from "@react-google-maps/api";
import { useMemo } from "react";


function Routes(properties) {
  const center = useMemo(() => ({lat: 53.47, lng: -2.24}), [])
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
            <GoogleMap zoom={13} center = { center } mapContainerClassName= "map-container" options={options}></GoogleMap>
          </div>
        </div>
      </DivStyled>
    );
  }

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