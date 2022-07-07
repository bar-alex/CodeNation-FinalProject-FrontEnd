import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  display: block; 
  font-family: 'Permanent Marker', cursive;
`;

const Challenges = () => {
  return (
    <Container>
      <Text>
        Challenges
      </Text>
      <Text>
        Coming Soon
      </Text>
    </Container>


  );
}

export default Challenges;