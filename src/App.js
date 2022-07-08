import React, { useState, useEffect } from 'react';
import { Routes as DomRoutes, Route as DomRoute } from "react-router-dom"; 
// import styled from 'styled-components';
import './App.css';
import { getUserToken, retrieveUser } from './util/utilUser.js';
// import Routes from "./components/Routes/Routes";
// import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import LandingPage from './components/LandingPage';
import RoutesList   from "./components/Routes/RoutesList";
import { retrieveAllRoutes } from './util/utilRoutes';
import Navbar from './components/Navbar';
// import AmodalTest from "./components/AmodalTest.js";
// import VerticalBarChart from "./components/VerticalBarChart";
// import Challenges from "./components/Challenges";
// import Setup_insertRoutesToDb from "./components/Setup__insertRoutesToDb";
// import leaderboardData from "./components/Leaderboard/LeaderboardData";
// import RouteCard from "./components/RouteCard";
// import RouteActivities from './components/RouteActivities';
// import LineChart from "./components/LineChart";
// import RouteCard from "./components/RouteCard.js";
// import RoutesMap from "./components/RoutesMap";
// import leaderboardData from "./components/Leaderboard/LeaderboardData";
// import routesData from "./components/Routes/RotesData";
// import Setup_insertRoutesToDb from "./components/Setup__insertRoutesToDb";

// const onRowClicked = (item, index) => {
//     console.log(item, index);
//   }

// this is to test the line-chart
// const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
// const vertLabel="M";
// const vertValues=[33, 53, 85, 41, 44, 65, 71];


const App = () => {
  // user object: username, email, full_name
  const [user, setUser] = useState(undefined);

  const [routes, setRoutes] = useState([]);

  useEffect( ()=>{
    const token = getUserToken();
    if (!!token) retrieveUser( setUser );
    // console.log('-> App - token: ',token, '\n-> user: ',user?.username);

    retrieveAllRoutes( setRoutes )
  },[])



  return (
      <div className="App">
        <Navbar user={user} setUser={setUser} />

        {/* <Setup_insertRoutesToDb /> */}
        {/* <RouteCard routeData = { testRouteData } /> */}
        {/* route id is hardcoded for test */}
        {/* <RouteActivities routeId={"62c24e2447eb4b4cebf620c7"} userId={user?.id}/> */}
        {/* <LineChart horizLabels={horizLabels} vertLabel={vertLabel} vertValues={vertValues} /> */}
        
        <DomRoutes>
          {/* <DomRoute path="/" element={ user ? <Dashboard user={user} setUser={setUser} /> : <LandingPage /> } /> */}
          <DomRoute path="/" element={ <LandingPage /> } />
          <DomRoute path="/routes"      element={<RoutesList user={user} setUser={setUser} />} />
          <DomRoute path="/leaderboard" element={<Leaderboard user={user} setUser={setUser} />} />
        </DomRoutes>
      </div>
    );
};

export default App;
