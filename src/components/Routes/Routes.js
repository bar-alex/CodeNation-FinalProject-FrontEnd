import React, { useEffect, useState } from 'react';
import { Row as BootRow } from 'react-bootstrap';
import BootContainer from 'react-bootstrap/Container';
import styled, { css } from 'styled-components';
import RouteCard from './RouteCard';


const Container = styled.div`
    text-align: start;
    width: 100%;
`;

const ElementContainer = styled(BootContainer)`
    padding-left: 30px;
    @media (max-width: 514px) {
        padding-left: 60px;
    }
    
`;

const Row = styled(BootRow)`

`;


const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const TabItem = styled.span`
    font-size: 20px;
    margin: 10px;
    cursor: pointer;

    ${props => props.selected === props.value && css`
        text-decoration: underline;
        color: #20C6EC;
  `}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px
`;

const Routes = ({ data }) => {
    const [selected, setSelected] = useState("all");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (selected === "all") setFiltered(data)
        else if (selected === "cycling") setFiltered(data.filter(e => e.event === "cycling"))
        else if (selected === "swimming") setFiltered(data.filter(e => e.event === "swimming"))
        else setFiltered(data.filter(e => e.event === "running"))

    }, [selected, data])


    return (

        <Container>
            <Title>Pick a Route</Title>
            <TabContainer>
                <TabItem selected={selected} value="all" onClick={() => setSelected("all")}>All</TabItem>
                <TabItem selected={selected} value="running" onClick={() => setSelected("running")}>Running</TabItem>
                <TabItem selected={selected} value="cycling" onClick={() => setSelected("cycling")}>Cycling</TabItem>
                <TabItem selected={selected} value="swimming" onClick={() => setSelected("swimming")}>Swimming</TabItem>

            </TabContainer>


            <ElementContainer fluid>
                <Row>
                    {filtered.map((element, index) =>
                        <RouteCard
                            difficulty={element.difficulty}
                            distance={element.distance}
                            time={element.time}
                            venue={element.venue}
                            event={element.event}
                            key={index}
                        />)}
                </Row>
            </ElementContainer>

        </Container>


    )
};

export default Routes;