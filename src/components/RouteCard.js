
import styled from 'styled-components';
import { FaSwimmer } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";


import cityPath1    from "../assets/route_cards/city-path-1.jpg";
import cityPath2    from "../assets/route_cards/city-path-2.jpg";
import cityPath3    from "../assets/route_cards/city-path-3.jpg";
import forestPath1  from "../assets/route_cards/forest-path-1.jpg";
import forestPath2  from "../assets/route_cards/forest-path-2.jpg";
import forestPath3  from "../assets/route_cards/forest-path-3.jpg";
import forestPath4  from "../assets/route_cards/forest-path-4.jpg";
import forestPath5  from "../assets/route_cards/forest-path-5.jpg";
import parkPath1    from "../assets/route_cards/park-path-1.jpg";
import parkPath2    from "../assets/route_cards/park-path-2.jpg";
import parkPath3    from "../assets/route_cards/park-path-3.jpg";
import parkPath4    from "../assets/route_cards/park-path-4.jpg";
import parkPath5    from "../assets/route_cards/park-path-5.jpg";
// import parkPath6    from "../assets/route_cards/park-path-6.jpg";
import riverPath1   from "../assets/route_cards/river-path-1.jpg";
import riverPath2   from "../assets/route_cards/river-path-2.jpg";
import riverPath3   from "../assets/route_cards/river-path-3.jpg";
import riverPath4   from "../assets/route_cards/river-path-4.jpg";
import riverPath5   from "../assets/route_cards/river-path-5.jpg";

const picCovers = [
    cityPath1,
    cityPath2,
    cityPath3,
    forestPath1,
    forestPath2,
    forestPath3,
    forestPath4,
    forestPath5,
    parkPath1,
    parkPath2,
    parkPath3,
    parkPath4,
    parkPath5,
    // parkPath6,
    riverPath1,
    riverPath2,
    riverPath3,
    riverPath4,
    riverPath5,
]


const Card = styled.div`
    
    ${ (props) => props.margin && `margin-bottom: ${props.margin}px;` } 

    width: 300px;
    height: 150px;
    border-radius: 5px;
    border: 1px solid rgb(0,0,0,.8);
    box-shadow: 10px 10px 14px -12px rgba(0,0,0,0.68);

    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; 
    cursor: pointer;

    color: white;
    /* background-image: url('/assets/routes/forest-path-1.jpg'); */
    background-image: url(${ ()=>picCovers[ Math.floor(Math.random()*picCovers.length) ] });
    background-position: ${()=>Math.floor(Math.random()*100)}% ${()=>Math.floor(Math.random()*100)}%;

    h3, p {
        /* color: #d9d9d9; */
        /* background-color: #bababa; */
        text-shadow: #2e2e2e 0 4px 5px;
    }


    div {
        display: flex;
        justify-content: space-between;
        user-select: none;
        margin-left: 5px;
        margin-right: 5px;
    }

    &:hover {
        box-shadow: 0px 0px 22px 4px rgba(0,149,255,0.5);
    }
`;


// props.routeData.title ...
const RouteCard = ( { routeData, onClick } ) => {

    // console.log('->RouteCard: ', routeData);

    const distMU = (routeData?.activity_type==='swim' ? 'meters' : 'km')

    return (
        <Card onClick={ onClick } routeId={routeData.id} >
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
