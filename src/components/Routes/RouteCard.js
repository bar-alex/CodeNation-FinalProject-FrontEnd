import React from 'react';
import styled from 'styled-components';
import { FaRunning } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { GrSwim } from "react-icons/gr";


const Container = styled.div`
    width: 18rem;
    height: 8rem;
    border-radius: 2rem;
    border: 2px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    &:hover {
        cursor: pointer;
        background-color: #20C6EC
      }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between
`;

const Distance = styled.span`

`;

const Difficulty = styled.span`

`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Place = styled.span`
    
`;

const Time = styled.span`

`;



const RouteCard = ({ venue, difficulty, distance, time, event }) => {
    return (
        <Container>
            <HeaderContainer>
                <Place>{venue}</Place>
                {event === "running" ? <FaRunning size={25} /> : event === "cycling" ? <BiCycling size={25} /> : <GrSwim size={25} />}
            </HeaderContainer>
            <FooterContainer>
                <Difficulty>{difficulty}</Difficulty>
                <Distance>{distance}miles</Distance>
                <Time>{time} min</Time>
            </FooterContainer>

        </Container>
    )
};

export default RouteCard;