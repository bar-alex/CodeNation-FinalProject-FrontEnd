import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Leaderboard from "../components/Leaderboard/Leaderboard";
import data from "../components/Leaderboard/LeaderboardData";
import LineChart from "../components/LineChart";
// import VerticalBarChart from "./components/VerticalBarChart";
import Activities from "../components/Activities";
import Routes from "../components/Routes";
import Navbar from "../components/Navbar/Navbar";
import BackgroundImage from "./components/img/landingPage3.jpg"

const Title = styled.div`
  font-size: calc(15px + 3vh);
  color: white;
  padding: 10vh;
  `
const Spacer = styled.div`
  padding-bottom: 50%;
`

const Background = styled.div`
  z-index: bottom;
  background: url(${BackgroundImage});
  height: 1400px;
  -webkit-background-height: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  `

const TopDiv = styled.div`
  /* color: white; */
  display: flex;
  justify-content: space-between;
  align-content: right;
  text-justify: center;
  height: 100%;
  /* border: 2px red solid; */
`

const RightContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  position: fixed right;
  font-size: calc(12px + 1vh);
  /* border: 2px red solid; */
`
const LeaderBoardBox = styled.div`
 border: 10px red dashed;
 `

const CenterContainer = styled.div`
  display: flex;
  flex: row;
  font-size: calc(12px + 1vh);
  min-height: 100vh;
  /* border: 2px red solid; */
`

const CenterLow = styled.div`
  display: flex;
  flex: row;
  font-size: calc(12px + 1vh);
  /* border: 2px red solid; */
`


const Charttainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  font-size: calc(12px + 1vh);
  /* margin: 5%; */
  /* border: 2px red solid; */
  `
const ChartFrame = styled.div`
  border: 10px red dashed;
  min-width: 50%;
  `
const InnerBottomCharttainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 2px red solid; */
  `

const Maptainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  font-size: calc(12px + 1vh);
  /* margin: 5%; */
  /* border: 2px red solid; */
`
const MapFrame = styled.div`
  border: 10px red dashed;
` 
const InnerMaptainer = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  /* border: 2px red solid; */
  `
const InnerBottomMaptainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: 2px red solid; */
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
// *******************************************************
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
        
        <Background>
        <Title>
          <h1>Fitness App</h1>
        </Title>
        <Spacer />
        </Background>
        <TopDiv>
        
          <CenterContainer>

            <Charttainer>
            <h1>Trends</h1>
              <ChartFrame>
                <div style={{width: "100%" }}>
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

              <h1>Maybe Some Activities go here somewhere</h1>
              <Activities />

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
                  <label htmlFor="routes">Find an activity/route:</label>
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
          <LeaderBoardBox>
            <Leaderboard items={data} onClick={onRowClicked} />
          </LeaderBoardBox>
          
        </RightContainer>

        </TopDiv>
      
            

  
        <>
        </>

        <div>

          
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