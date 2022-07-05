import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Leaderboard from "./components/Leaderboard/Leaderboard";
import data from "./components/Leaderboard/LeaderboardData";
import LineChart from "./components/LineChart";
// import VerticalBarChart from "./components/VerticalBarChart";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar/Navbar";

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-justify: center;
  height: 100%;
  border: 2px red solid;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: left;
  height: 100vh;
  font-size: calc(12px + 1vh);
  min-height: 100vh;
  width: 30%;
  border: 2px red solid;
`

const CenterContainer = styled.div`
  display: flex;
  flex: row;
  width: 100%;
  font-size: calc(12px + 1vh);
  max-width: 75%;
  height: 70vh;
  min-height: 600px;
  min-width: 80%;
  margin: 5vh;
  border: 2px red solid;
`

const CenterLow = styled.div`
  display: flex;
  flex: row;
  /*
  width: 100%;
  font-size: calc(12px + 1vh);
  max-width: 75%;
  height: 70vh;
  min-height: 600px;
  min-width: 80%; */
  border: 2px red solid;
`


const Charttainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  font-size: calc(12px + 1vh);
  /* margin: 5%; */
  min-height: 500px;
  min-width: 500px;
  
  border: 2px red solid;
  `
const ChartFrame = styled.div`
  border: 10px red dashed;
  `
const InnerBottomCharttainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px red solid;
  `

const Maptainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  font-size: calc(12px + 1vh);
  /* margin: 5%; */
  min-height: 500px;
  min-width: 500px;
  border: 2px red solid;
`
const MapFrame = styled.div`
  border: 10px red dashed;
` 
const InnerMaptainer = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  border: 2px red solid;
  `
const InnerBottomMaptainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
  // const verticalValues = [];

// this is to test the linechart
const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
const vertLabel="M";
const vertValues=[33, 53, 85, 41, 44, 65, 71];

// *******************************************************
// temp route values to be linked to the route data later
// ******************************************************
const [route, setRoute] = useState();
const [chart, setChart] = useState();

const chartSetter = (value) => {
  console.log(value, chart)
  setChart(value)
}

const routeSetter = (value) => {
  console.log(value, route)
  setRoute(value)
}


  return (
    
    <div className = "App">
      <div>
        <Navbar />
      </div>
        <h1>Fitness App</h1>
              <TopDiv>
              
                <CenterContainer>

                  <Charttainer>
                  <h1>Your Performance</h1>
                    <ChartFrame>
                      <div style={{width: "100%"}}>
                      <LineChart
                        horizLabels={horizLabels}  
                        vertLabel={vertLabel} 
                        vertValues={vertValues} />
                      </div>
                    </ChartFrame>
                    

                    <InnerBottomCharttainer>
                      <div>
                        <p>
                          Information about your performance chart.
                        </p>
                      </div>

                      <div>
                        <div>
                          <label for="chart">Select something to display in the chart</label>
                            <select name="chart" id="chart">
                              <option value={1} onChange={(e) => chartSetter(e.target.value)}>chart 1 placeholder</option>
                              <option value={2} onChange={(e) => chartSetter(e.target.value)}>chart 2 placeholder</option>
                              <option value={3} onChange={(e) => chartSetter(e.target.value)}>chart 3 placeholder</option>
                              <option value={4} onChange={(e) => chartSetter(e.target.value)}>chart 4 placeholder</option>
                              <option value={5} onChange={(e) => chartSetter(e.target.value)}>chart 5 placeholder</option>                         
                            </select>
                        </div>
                      </div>

                    </InnerBottomCharttainer>

                  </Charttainer>

                  <Maptainer>
                    <h1>Where the action is</h1>
                    <InnerMaptainer>
                      <MapFrame>
                        <Routes />
                      </MapFrame>
                      <div>
                        <p>
                          Here we will put some kind of route information that is useful to the person.
                          <li>item 1</li>
                          <li>item 2</li>
                          <li>item 3</li>
                          <li>item 4</li>
                        </p>
                      </div>
                    </InnerMaptainer>
                    <InnerBottomMaptainer>
                      <div>
                        <label for="routes">Find an activity/route:</label>
                          <select name="routes" id="routes">
                            <option value={1} onChange={(e) => routeSetter(e.target.value)}>Route 1 placeholder</option>
                            <option value={2} onChange={(e) => routeSetter(e.target.value)}>Route 2 placeholder</option>
                            <option value={3} onChange={(e) => routeSetter(e.target.value)}>Route 3 placeholder</option>
                            <option value={4} onChange={(e) => routeSetter(e.target.value)}>Route 4 placeholder</option>
                            <option value={5} onChange={(e) => routeSetter(e.target.value)}>Route 5 placeholder</option>                         
                          </select>
                      </div>
                      <div>
                        <p>
                          Here could be some sort of route picker or whatever.
                        </p>
                      </div>
                    </InnerBottomMaptainer>
                  </Maptainer>
                </CenterContainer>

                <CenterLow>

                </CenterLow>

              <RightContainer>
                <h1>Who's winning</h1>
                <Leaderboard items={data} onClick={onRowClicked} />
                  <h1>Achievements</h1>
                <Achievements />
              </RightContainer>

              </TopDiv>

  
        <>
        </>

        <div>

          <Activities />
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