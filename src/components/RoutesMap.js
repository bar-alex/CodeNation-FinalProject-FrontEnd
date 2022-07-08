// npm @react-google-maps/api
// https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-typescript

import styled from "styled-components";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
import { retrieveAllRoutes } from "../util/utilRoutes";


const Routes = () => {
    
    // an array of routes objects
    const [ routes, setRoutes ] = useState([]);

    // on init will put all the routes in 'routes' by calling it's setter
    useEffect( ()=>{retrieveAllRoutes(setRoutes)}, []) 

    // initial point
    const center = useMemo(() => ({lat: 53.47, lng: -2.24}), [])
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }), [])

    // <GoogleMap zoom={7} center = { center } mapContainerClassName= "map-container" options={options}>

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyC4rF0twpG2XX77FJIYfQKVDN9IoevXLys", })
    if (!isLoaded) return <div>Loading...</div>

    return (
        <DivStyled>
            <div className="container">
            <div className="controls">
                <h1>controls</h1>
            </div>
            <div className="map">
                <GoogleMap zoom={7} center = { center } mapContainerClassName= "map-container" options={options}>
                { routes.length && routes.map( ({map_data},idx)=> {
                    console.log('\nmap_data: ',map_data);
                    if (map_data) {
                        const coord = JSON.parse(map_data);
                        console.log('coord: ',coord);
                        return <Marker position={coord} />
                    } else 
                        return ""
                } )}
                </GoogleMap>
            </div>
            </div>
        </DivStyled>
    )
}

const DivStyled = styled.div`
    .map{
        width: 100%;
        height: 50vh;
    }

    .map-container{
        width: 100%;
        height: 50vh;
    }
`

export default Routes;