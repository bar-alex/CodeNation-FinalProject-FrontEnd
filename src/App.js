import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Challenges from "./components/Challenges";
import Routes from "./components/Routes";

function App() {
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
