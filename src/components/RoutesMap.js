// npm @react-google-maps/api
// https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-typescript

import styled from "styled-components";
// import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";


// import { useState, useEffect } from "react";
// import { retrieveAllRoutes } from "../util/utilRoutes";


const DivStyled = styled.div`
    border: 1px solid rgb(0,0,0,.8);
    box-shadow: 10px 10px 14px -12px rgba(0,0,0,0.68);

    /* .map{ */
    #map-div{
        width: 100%;
        height: 50vh;
    }

    /* .map-container{ */
    #map-container-google{
        width: 100%;
        height: 50vh;
    }
`;

const RoutesMap = ( {allRoutes, markerCoord} ) => {
    
    console.log( '->RoutesMap allRoutes, markerCoord: ', allRoutes, markerCoord );

    // an array of routes objects
    // const [ routes, setRoutes ] = useState([]);

    // only if all_routes is true
    // if (all_routes){
    //     // on init will put all the routes in 'routes' by calling it's setter
    //     useEffect( ()=>{retrieveAllRoutes(setRoutes)}, []) 
    // }


    // const [map, setMap] = useState(null);

    // useEffect( ()=>{
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     setMap(map)

    //     return () => setMap(null);
    // },[] )  // eslint-disable-line react-hooks/exhaustive-deps



    // initial point
    const center = {lat: 53.47, lng: -2.24};
    const options = { disableDefaultUI: true, clickableIcons: false };

    // <GoogleMap zoom={7} center = { center } mapContainerClassName= "map-container" options={options}>

    // const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyC4rF0twpG2XX77FJIYfQKVDN9IoevXLys", })
    const objApiLoader = useJsApiLoader({id: 'google-map-script',googleMapsApiKey: process.env.REACT_APP_FRONTEND_GOOGLE_API_KEY})
    const { isLoaded } = objApiLoader
    // if (!isLoaded) return <div>Loading...</div>

    // console.log('RoutesMap(), isLoaded, objApiLoader: ', isLoaded, objApiLoader);

    return isLoaded ? (
            <DivStyled>
                <div className="container">
                <div className="controls">
                    {/* <h1>controls</h1> */}
                </div>
                <div id="map-div" className="map">
                    <GoogleMap zoom={10} 
                        center = { center } 
                        mapContainerClassName= "map-container" 
                        id = "map-container-google"
                        options={ options }
                    >

                        {/* for all routes */}
                        {   allRoutes?.length 
                            && allRoutes.map( (it,idx)=> {
                                console.log('\nmap_data: ',it.map_data);
                                if (it.map_data) {
                                    const coord = JSON.parse(it.map_data);
                                    console.log('coord: ',coord);
                                    return <Marker position={coord} />
                                } else 
                                    return ""
                            } )
                        }

                        {/* just for one coord */}
                        {   markerCoord && <Marker position={markerCoord} /> }

                    </GoogleMap>
                </div>
                </div>
            </DivStyled>
        )
        : <></>;
}

export default RoutesMap;