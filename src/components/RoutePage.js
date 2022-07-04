import { useState } from 'react';
import RouteMap from './Routes/RouteMap';

function Routes(data) {
  const [route, setRoute] = useState();

console.log(route)

    return(
        <div>
          <h2>Activities</h2>

          <select 
          id="routePicker"
          name="Routes"
          >
            <option routeId="0">The Meadow, Salford</option>
            <option routeId="1">Some Test Dropdown Route</option>
            <option routeId="2">Test Route 3</option>

          </select>

          <div>
            <RouteMap setRoute={setRoute}/>
          </div>

        </div>
    );
  }
  
  export default Routes;
