//import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Leaderboard from "./components/Leaderboard/Leaderboard";
import data from "./components/Leaderboard/LeaderboardData";
import LineChart from "./components/LineChart";
// // import VerticalBarChart from "./components/VerticalBarChart";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar/Navbar"

const CentralHighest = styled.div`
  display: flex;
  border: 2px red solid;
  justify-content: space-between;
`

const Boardtainer = styled.div`
  min-height: 100vh;
  max-width: 800px;
  border: 2px red solid;
`

const Graphtainer = styled.div`
  min-height: 100vh;
  max-width: 800px;
  border: 2px red solid;
`

const onRowClicked = (item, index) => {
  console.log(item, index);
}


const App = () => {
  // user object: username, email, full_name
  // const [user, setUser] = useState({});

  // chartTitle,         // string or empty -- the title of the chart
  // const horizontalLabels = ['x', 'y', 'z', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // const verticalLabel = 'Distance X';
  // // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
  // const verticalValues = [];

// this is to test the linechart
const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
const vertLabel="M";
const vertValues=[33, 53, 85, 41, 44, 65, 71];



  return (
    
    <div className = "App">
      <div>
        <Navbar />
      </div>
        <h1>Fitness App</h1>
          <CentralHighest>

            <Graphtainer>

              <h1>Your forformance</h1>
            <LineChart 
              horizLabels={horizLabels}  
              vertLabel={vertLabel} 
              vertValues={vertValues} />
            </Graphtainer>

            <Boardtainer>

              <h1>Who's winning</h1>
              <Leaderboard items={data} onClick={onRowClicked} />
            </Boardtainer>

          </CentralHighest>
        <div style = { {width:"600px"} }>

        </div>
        <div>
          <Achievements />
          <Activities />
          <Challenges />
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