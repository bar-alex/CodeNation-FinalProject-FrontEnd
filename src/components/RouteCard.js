
import styled from 'styled-components';
import { FaSwimmer } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";


// props.routeData.title ...
const RouteCard = ( { routeData } ) => {

    return (
        <Card>
            {/* top side */}
            <div>
                <h2>{ routeData.title}</h2>
                <h2>{ 
                    routeData.activity_type==='run'?<FaRunning/>: 
                    routeData.activity_type==='cycle'?<FaBiking/>:<FaSwimmer/> 
                }</h2>
            </div>

            {/* bottom side */}
            <div>
                <p>{routeData.difficulty}</p>
                <p>{routeData.distance}</p>
                <p>{routeData.time}</p>
            </div>
        </Card>
    )

}

export default RouteCard;


const Card = styled.div`
    width: 250px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid silver;
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
    }
`
