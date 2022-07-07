import React, { useState, useEffect } from 'react';
import { Routes as DomRoutes, Route as DomRoute } from "react-router-dom";
import './App.css';
import Dashbaord from "./components/Dashboard/Dashboard";
import styled from 'styled-components';

import { getUserToken, retrieveUser } from './util/utilUser.js';
import leaderboardData from "./components/Leaderboard/LeaderboardData";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import routesData from "./components/Routes/RotesData";
import data from "./components/Leaderboard/LeaderboardData";
import LineChart from "./components/LineChart";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Routes from "./components/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import RouteCard from "./components/RouteCard.js";

// import AmodalTest from "./components/AmodalTest.js";
// import VerticalBarChart from "./components/VerticalBarChart";
// import Challenges from "./components/Challenges";

// import Setup_insertRoutesToDb from "./components/Setup__insertRoutesToDb";


const Boardtainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  min-height: 50vh;
  width: 600px;
  padding: 20px;
`;

const onRowClicked = (item, index) => {
    console.log(item, index);
  }
  
  
  const App = () => {
    // user object: username, email, full_name
    const [user, setUser] = useState(undefined);
    
    useEffect( ()=>{
      const token = getUserToken();
      if (!!token) retrieveUser( setUser );

      // console.log('-> token: ',token, '\n-> user: ',user.username);
    },[])

  
    // chartTitle,         // string or empty -- the title of the chart
    // const horizontalLabels = ['x', 'y', 'z', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // const verticalLabel = 'Distance X';
    // // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
    // const verticalValues = [];
  
    // this is to test the linechart
    const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
    const vertLabel="M";
    const vertValues=[33, 53, 85, 41, 44, 65, 71];
    
    const testRouteData =  {  
        title: "Sample title 2", 
        activity_type: "cycle",
        difficulty: "really hard",
        distance: "10km",
        time:"2h", 
      }
  
    return (


            //This is new import, commented to be tested
            
    //   <div className="App">

    //   <Navbar />
    //   <DomRoutes>
    //     <DomRoute path="/" element={<Dashbaord />} />
    //     <DomRoute path="/routes" element={<Routes data={routesData} />} />
    //     <DomRoute path="/leaderboard" element={<Leaderboard items={leaderboardData} onClick={() => { }} />} />
    //   </DomRoutes>
    // </div>


      
      <div className = "App">
        <div>
        <Navbar user={user} setUser={setUser} />
        <Navbar />
      <DomRoutes>
        <DomRoute path="/" element={<Dashbaord />} />
        <DomRoute path="/routes" element={<Routes data={routesData} />} />
        <DomRoute path="/leaderboard" element={<Leaderboard items={leaderboardData} onClick={() => { }} />} />
      </DomRoutes>

        </div>

        {/* <Setup_insertRoutesToDb /> */}

        <RouteCard routeData = { testRouteData } />
          <h1>Fitness App</h1>
            <Boardtainer>
                <Leaderboard items={data} onClick={onRowClicked} />
            </Boardtainer>
          <div style = { {width:"600px"} }>
            <LineChart 
            horizLabels={horizLabels}  
            vertLabel={vertLabel} 
            vertValues={vertValues} />
          </div>
          <div>
            <Achievements />
            <Activities />
            <Routes />
          </div>
          {/* <VerticalBarChart /> */}
        </div>
        
  
    );
  };
  
  export default App;
  
  // chartTitle,         // string or empty -- the title of the chart
  // horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // verticalLabel,      // 'Distance'
  // verticalValues,     // array: values for the vertical point, one for each horizontal label