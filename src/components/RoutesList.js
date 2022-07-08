import { useState } from 'react';
// import { Row as BootRow } from 'react-bootstrap';
// import BootContainer from 'react-bootstrap/Container';
import styled, {css} from 'styled-components';
import RouteCard from './RouteCard';


// just to test - remove later
// import routesData from './RoutesData';


const Container = styled.div`
    text-align: start;
    width: 100%;
`;

// const ElementContainer = styled(BootContainer)`
const ElementContainer = styled.div`
    /* border: 1px solid red; */
    /* display: inline-flex; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    /* align-content: space-between; */
    gap: 20px 0px;

    padding-left: 30px;
    padding-right: 30px;
`;

const TabContainer = styled.div`
    /* border: 1px solid red; */
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



// routes[], user{}, setUser()
const RoutesList = ({ routes: data, user, setUser }) => {

    const [selected, setSelected] = useState("all");
    // const [filtered, setFiltered] = useState([]);

    // useEffect(() => {
    //     if (selected === "all") setFiltered(data)
    //     else if (selected === "cycle") setFiltered(data.filter(e => e.activity_type === "cycle"))
    //     else if (selected === "swim") setFiltered(data.filter(e => e.activity_type === "swim"))
    //     else setFiltered(data.filter(e => e.activity_type === "run"))
    // }, [selected]) // eslint-disable-line react-hooks/exhaustive-deps


    return (

        <Container>
            <Title>Pick a Route</Title>
            <TabContainer>
                <TabItem selected={selected} value="all"      
                    onClick={() => setSelected("all")}
                >All</TabItem>
                <TabItem selected={selected} value="run"  
                    onClick={() => setSelected("run")}
                >Running</TabItem>
                <TabItem selected={selected} value="cycle"  
                    onClick={() => setSelected("cycle")}
                >Cycling</TabItem>
                <TabItem selected={selected} value="swim" 
                    onClick={() => setSelected("swim")}
                >Swimming</TabItem>

            </TabContainer>


            <ElementContainer fluid>
                    {data.map((it, idx) =>
                            (it.activity_type === selected || selected === "all") 
                            && <RouteCard key={idx} routeData = { 
                                { 
                                    title:          it.title, 
                                    activity_type:  it.activity_type, 
                                    difficulty:     it.difficulty, 
                                    distance:       it.distance, 
                                    time:           it.time, 
                                } 
                            } />
                        )}
            </ElementContainer>

        </Container>


    )
};

export default RoutesList;