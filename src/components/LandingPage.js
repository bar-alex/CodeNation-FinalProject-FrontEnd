import styled from 'styled-components';
import BackgroundImage from "../assets/landing/landingPage3.jpg"



const Title = styled.div`
  font-size: calc(15px + 3vh);
  color: white;
  padding: 10vh;

  h1 { 
    font-family: 'Open Sans', sans-serif; 

    color: #FFFFFF;
    /* background: #ece9e9; */
    text-shadow: 3px 5px 2px #474747;
    color: #FFFFFF;
    /* background: #ece9e9; */
  }

  h1:nth-child(1){ transform: translate(5%); }
  h1:nth-child(2){ transform: translate(15%); }
  h1:nth-child(3){ transform: translate(25%); }

`;


const Spacer = styled.div`
  padding-bottom: 50%;
`

const Background = styled.div`
  background: url(${BackgroundImage});
  background-size: contain;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed;   */
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: -100;
`;

// const TopDiv = styled.div`
//   /* color: white; */
//   display: flex;
//   justify-content: center;
//   align-content: right;
//   text-justify: center;
//   height: 100%;
//   /* border: 2px red solid; */
// `


const LandingPage = () => {

  return (
    <div className = "App">
      
        <Background >
        
          <Title>
            <h1>Step by Step, </h1>
            <h1>stride by stride, </h1>
            <h1>achieve your goals</h1>
          </Title>
            
          <Spacer />
        </Background>

      </div>
  );
};

export default LandingPage;
