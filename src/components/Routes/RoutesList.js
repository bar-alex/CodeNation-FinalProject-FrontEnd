import { useEffect, useState } from 'react';
// import { Row as BootRow } from 'react-bootstrap';
import BootContainer from 'react-bootstrap/Container';
import styled, {css} from 'styled-components';
// import RouteCard2 from './RouteCard2';
import RouteCard from '../RouteCard';


// just to test - remove later
import routesData from './RoutesData';


const Container = styled.div`
    text-align: start;
    width: 100%;
`;

const ElementContainer = styled(BootContainer)`
    /* border: 1px solid red; */
    display: inline-flex;;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    /* align-content: flex-start; */
    align-content: space-between;

    /* width: 100%; */
    padding-left: 30px;
    padding-right: 30px;
    /* @media (max-width: 514px) {
        padding-left: 60px;
    } */
`;

const TabContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const TabItem = styled.span`
    /* border: 1px solid blue; */
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
    padding: 20px;
`;


// const Routes = ({ data }) => {

const RoutesList = ({ user, setUser }) => {

    const data = routesData;

    const [selected, setSelected] = useState("all");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (selected === "all") setFiltered(data)
        else if (selected === "cycling") setFiltered(data.filter(e => e.event === "cycling"))
        else if (selected === "swimming") setFiltered(data.filter(e => e.event === "swimming"))
        else setFiltered(data.filter(e => e.event === "running"))
    }, [selected]) // eslint-disable-line react-hooks/exhaustive-deps


    return (

        <Container>
            <Title>Pick a Route</Title>
            <TabContainer>
                <TabItem selected={selected} value="all"      
                    onClick={() => setSelected("all")}
                >All</TabItem>
                <TabItem selected={selected} value="running"  
                    onClick={() => setSelected("running")}
                >Running</TabItem>
                <TabItem selected={selected} value="cycling"  
                    onClick={() => setSelected("cycling")}
                >Cycling</TabItem>
                <TabItem selected={selected} value="swimming" 
                    onClick={() => setSelected("swimming")}
                >Swimming</TabItem>

            </TabContainer>


            <ElementContainer fluid>
                    {filtered.map((element, index) =>
                            <RouteCard margin = {10} routeData = { 
                                { 
                                difficulty: element.difficulty, 
                                distance: element.distance, 
                                time: element.time, 
                                title: element.venue, 
                                activity_type: element.event, 
                                key: index+100,
                                } 
                            } />
                        )}
            </ElementContainer>

        </Container>


    )
};

export default RoutesList;