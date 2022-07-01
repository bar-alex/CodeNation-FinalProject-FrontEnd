//import React, { useState, useEffect } from 'react';
import './App.css';
// import LineChart from "./components/LineChart";
// // import VerticalBarChart from "./components/VerticalBarChart";
// import Achievements from "./components/Achievements";
// import Activities from "./components/Activities";
// import Challenges from "./components/Challenges";
// import Routes from "./components/Routes";

const App = () => {

  // chartTitle,         // string or empty -- the title of the chart
  // const horizontalLabels = ['x', 'y', 'z', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // const verticalLabel = 'Distance X';
  // // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
  // const verticalValues = [];

// this is to test the linechart
// const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
// const vertLabel="M";
// const vertValues=[33, 53, 85, 41, 44, 65, 71];

  return (
    <div className = "App">
      Fitness App
      <div>
        {/* <Achievements />
        <Activities />
        <Challenges />
        <Routes /> */}
      </div>
        {/* <div style = { {width:"600px"} }>
          <LineChart 
          horizLabels={horizLabels}  
          vertLabel={vertLabel} 
          vertValues={vertValues} />
        </div> */}
        {/* <VerticalBarChart /> */}
      </div>
  );
};

export default App;

// chartTitle,         // string or empty -- the title of the chart
// horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// verticalLabel,      // 'Distance'
// verticalValues,     // array: values for the vertical point, one for each horizontal label