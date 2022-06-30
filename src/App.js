//import React, { useState, useEffect } from 'react';
import './App.css';
// import LineChart from "./components/LineChart";
// import VerticalBarChart from "./components/VerticalBarChart";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";

//test
import UpdateUser from './components/UpdateUser';
//end of test import code

const App = () => {
  // user object: username, email, full_name
  // const [user, setUser] = useState({});

  // chartTitle,         // string or empty -- the title of the chart
  // const horizontalLabels = ['x', 'y', 'z', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // const verticalLabel = 'Distance X';
  // // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
  // const verticalValues = [];

  return (
    <div>
      Fitness App
      <div>
        <Achievements />
        <Activities />
        <Challenges />
        <Routes />
        <UpdateUser />

      </div>
        <div/>
        {/* <LineChart /> */}
        <div/>
        {/* <VerticalBarChart /> */}
      </div>
  );
};

export default App;

// chartTitle,         // string or empty -- the title of the chart
// horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// verticalLabel,      // 'Distance'
// verticalValues,     // array: values for the vertical point, one for each horizontal label