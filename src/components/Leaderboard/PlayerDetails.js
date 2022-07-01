import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.avatarSize || '40px'} 1fr;
  align-items: center;
  padding: 15px 0;
  grid-gap: 10px;
`;

const Avatar = styled.img`
  grid-column: 1/2;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 100%;
`;

const Details = styled.div`
  grid-column: 2/3;
  text-align: left;
`;

const Name = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: #333333;
`;

const Address = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  color: #6c6c6c;
`;

const PlayerDetails = ({ name, address, avatar, height }) => {
  return (
    <Container avatarSize={height}>
      <Avatar src={avatar} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Address>{address}</Address>
      </Details>
    </Container>
  );
};

export default PlayerDetails;