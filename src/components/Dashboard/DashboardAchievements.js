import React from 'react';
import { Container as BootContainer } from 'react-bootstrap';
import { FaRunning } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { GrSwim } from "react-icons/gr";
import styled from 'styled-components';
import DashboardAchievementsData from './DashboardAchievementsData';

const Container = styled.div`

`;

const CardContainer = styled(BootContainer)`
    width: 80%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border: 2px solid black;
    margin-bottom: 25px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;

`;

const Title = styled.span`
    font-size: 24px;
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
`;

const Date = styled.span`
    font-size: 12px
`;

const ContentTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px
`;


const DashboardAchievements = () => {
    return (
        <Container>
            <ContentTitle>My Achievements</ContentTitle>
            {DashboardAchievementsData.map((element, index) => (<CardContainer key={index}>
                <Image src={element.icon} />
                <Title>{element.venue}</Title>
                <DateContainer>
                    {element.event === "running" ? <FaRunning size={25} /> : element.event === "cycling" ? <BiCycling size={25} /> : <GrSwim size={25} />}
                    <Date>{element.date}</Date>
                </DateContainer>
            </CardContainer>))
            }
        </Container>
    )
};

export default DashboardAchievements;