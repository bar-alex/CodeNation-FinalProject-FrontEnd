import { useState } from 'react';
import './App.css'; // lets leave it here for now

import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";

const App = () => {
  // user object: username, email, full_name
  // const [user, setUser] = useState({});


  return (
    <div>
      <h1>fitness app</h1>
      <div>
        <Achievements />
        <Activities />
        <Challenges />
        <Routes />
      </div>
    </div>
  );
};

export default App;
