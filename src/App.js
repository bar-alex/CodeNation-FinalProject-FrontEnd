//import React, { useState, useEffect } from 'react';
import './App.css';
import LineChartTwo from "./components/LineChartTwo";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";

const App = () => {
  return (
    <div>
      Fitness App
      <div>
        <Achievements />
        <Activities />
        <Challenges />
        <Routes />
      </div>
      <LineChartTwo />
    </div>
  );
};

export default App;