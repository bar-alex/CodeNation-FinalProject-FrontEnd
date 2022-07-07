import React from 'react';
import './App.css';
import styled from 'styled-components';
import Leaderboard from "./components/Leaderboard/Leaderboard";
import data from "./components/Leaderboard/LeaderboardData";
import Navbar from "./components/Navbar/Navbar";
import BackgroundImage from "./components/img/landingPage3.jpg"

const Title = styled.div`
  font-size: calc(15px + 3vh);
  color: white;
  padding: 10vh;
  `

const CenterPage = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  `
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 25px;
  width: 350px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  `
const LoginBoxLabel = styled.div`
  display: flex;
  color: white;
  margin: 20px;
`
const LoginBoxInput = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

`
const Spacer = styled.div`
  padding-bottom: 25%;
`

const Background = styled.div`
  z-index: bottom;
  background: url(${BackgroundImage});
  /* -webkit-background-height: cover; 
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  `

const TopDiv = styled.div`
  /* color: white; */
  display: flex;
  justify-content: center;
  align-content: right;
  text-justify: center;
  height: 100%;
  /* border: 2px red solid; */
`

const LeaderBoardBox = styled.div`
 border: 10px red dashed;
 `

const onRowClicked = (item, index) => {
  console.log(item, index);
}

const App = () => {

  return (
    <div className = "App">
      <div>
        <Navbar />
      </div>
        <Background>
        <Title>
          <h1>Strider</h1>
        </Title>
        <CenterPage>

          <LoginBox>
            <form>
                <LoginBoxLabel>
                  <label htmlFor='Username'>Username</label>
                </LoginBoxLabel>
                <LoginBoxInput>
                  <input type='text' id='Username' name='Username'></input>
                </LoginBoxInput>
              

                <LoginBoxLabel>
                  <label htmlFor='Password'>Password</label>
                </LoginBoxLabel>
                <LoginBoxInput>
                  <input type='text' id='Password' name='Password'></input>
                </LoginBoxInput>
            </form>
          </LoginBox>

        </CenterPage>  
        

          <Spacer />
        </Background>
        <TopDiv>
          
        </TopDiv>
        <LeaderBoardBox>
          <h1>Who's winning</h1>
            <Leaderboard items={data} onClick={onRowClicked} />
          </LeaderBoardBox>
        <>
        </>
        {/* <VerticalBarChart /> */}
      </div>
  );
};

export default App;

// chartTitle,         // string or empty -- the title of the chart
// horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// verticalLabel,      // 'Distance'
// verticalValues,     // array: values for the vertical point, one for each horizontal label