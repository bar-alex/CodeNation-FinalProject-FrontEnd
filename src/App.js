import Navbar from "./components/Navbar/Navbar"
import styled from 'styled-components';

import { getUserToken, retrieveUser } from './util/utilUser.js';

import Leaderboard from "./components/Leaderboard/Leaderboard";
import data from "./components/Leaderboard/LeaderboardData";
import LineChart from "./components/LineChart";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Routes from "./components/Routes";

const Boardtainer = styled.div`
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  width: 600px;
  padding: 20px;
`;

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