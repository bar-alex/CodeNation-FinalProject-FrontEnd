import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveNamedRoute } from "../util/utilRoutes";
import RoutesMap from "./RoutesMap";
import ActivityList from "./ActivityList";

import { FaSwimmer } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";


// the title
// the map
// the chart || info about the route
// the activities || the achievemenets



const DivPage = styled.div`
    
    margin-top: 80px;
    display: flex;
    flex-flow: row wrap;
    /* justify-content: center; */
    /* width: 80%; */


    /* #title {
        margin-top: 10px;
        margin-bottom: 10px;
    } */

    #top-side {
        /* border: 1px solid red; */
        width: 80%;
        margin: auto;
        display:flex;
        justify-content: space-between;
    }

    #route-info {
        /* border: 1px solid blue; */
        width: 55%;
        display: flex;
        flex-direction: column;

        h2 {
            margin-top: 5px;
            width: 100%;
            text-align: center;
        }

        p {
            /* text-indent: 5%; */
            overflow-wrap: break-word;
        }

        /* p:first-of-type {
            display: block;
            margin-bottom: auto;
        } */
    }

    #map-div {
        /* border: 1px solid red; */
        width: 40%;
        margin-left: auto;
        /* left: 2%; */
        /* transform: 50% + translate(50%); */
    }

    #activities-div {
        width: 80%;
    }


`;


const RouteActivities = ( {routes, user, activities, setActivities} ) => {

    const { route_name } = useParams();
    
    const [route, setRoute] = useState(undefined);

    const [routeCoord, setRouteCoord] = useState(undefined);
    
    useEffect( ()=>{ retrieveNamedRoute( route_name, setRoute ) },[route_name])

    useEffect( ()=>{ 
        if (route?.map_data) setRouteCoord( JSON.parse(route.map_data) ) 
    }, [route] )  // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <DivPage>

            <div id="top-side">
                {/* info about the route */}
                <div id="route-info">
                    <h2> { route?.title } </h2>
                    <br />
                    <p> {route?.description} </p>
                    <br /><br />
                    <p> Activity: { 
                    route?.activity_type==='run'?<FaRunning/>: 
                    route?.activity_type==='cycle'?<FaBiking/>:<FaSwimmer/> 
                        }</p>
                    <p> Distance: {route?.distance} { route?.type_activity==='swim'?' metres':' km' }</p>
                    <p> Estimated time: {route?.time} min</p>
                    <p>  </p>
                </div>
                {/* the map */}
                <div id="map-div">
                    <RoutesMap markerCoord={ routeCoord } />
                </div>
            </div>

            {/* the chart */}
            <div id="chart-div">

            </div>

            {/* the list of activities */}
            <div id="activities-div">
                <ActivityList 
                    user={user} 
                    route={route} 
                    activities={activities} 
                    setActivities={setActivities} 
                />
            </div>




        </DivPage>
    );
};

export default RouteActivities;