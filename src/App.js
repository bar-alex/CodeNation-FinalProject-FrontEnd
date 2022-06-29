import './App.css'; // lets leave it here for now

import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";

const App = () => {
  return (
    <div>
      fitness app
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
