
import styled from 'styled-components';
import { FaSwimmer } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";



const Card = styled.div`
    
    ${ (props) => props.margin && `margin-bottom: ${props.margin}px;` } 

    width: 250px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid rgb(0,0,0,.8);
    box-shadow: 10px 10px 14px -12px rgba(0,0,0,0.68);

    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; 

    color: white;
    background-image: url('/assets/routes/forest-path-1.jpg');
    background-position: 100% 100%;

    div {
        display: flex;
        justify-content: space-between;
        user-select: none;
        margin-left: 5px;
        margin-right: 5px;
    }
`;


// props.routeData.title ...
const RouteCard = ( { routeData, margin } ) => {

    // console.log('->RouteCard: ', routeData);

    const distMU = (routeData?.activity_type==='swim' ? 'meters' : 'km')

    return (
        <Card margin={margin}>
            {/* top side */}
            <div>
                <h3>{ routeData?.title}</h3>
                <h3>{ 
                    routeData?.activity_type==='run'?<FaRunning/>: 
                    routeData?.activity_type==='cycle'?<FaBiking/>:<FaSwimmer/> 
                }</h3>
            </div>

            {/* bottom side */}
            <div>
                <p>{routeData?.difficulty}</p>
                <p>{`${routeData?.distance} ${distMU}`}</p>
                <p>{`${routeData?.time} min`}</p>
            </div>
        </Card>
    )

}

export default RouteCard;
