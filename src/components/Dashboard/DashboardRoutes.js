import React from 'react';
import { Container as BootContainer, Row } from 'react-bootstrap';
import styled from 'styled-components';
import RouteCard from "../Routes/RouteCard";
import dashboardRoutesData from './DashboardRoutesData';

const Container = styled(BootContainer)`
    padding: 40px
`;


const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px
`;

const DashboardRoutes = () => {
    return (
        <Container>
            <Title>My Routes</Title>
            <Row>
                {dashboardRoutesData.map((element, index) => <RouteCard
                    difficulty={element.difficulty}
                    distance={element.distance}
                    time={element.time}
                    venue={element.venue}
                    event={element.event}
                    key={index}
                />)}


            </Row>

        </Container>
    )
};

export default DashboardRoutes;