

// { route_name, activity_type(run,cycle,swim), title, cover, description, difficulty, distance, time, location, map_data}

const routesData = [
    // {
    //     route_name:"the_meadow", 
    //     activity_type:"run", 
    //     title:"The Meadow, Salford", 
    //     cover:"forest-path-4.jpg", 
    //     description:"The Meadow is a small park and garden area that is somewhat secluded by the local river Irwell. There is a narrow gravel pathway that serves as a circuit. Ideal for offroad cycling and running. One lap around the circuit stands in at around 720 metres.", 
    //     difficulty:"easy", 
    //     distance:2.7, 
    //     time:10, 
    //     location:"", 
    //     map_data:{lat: 53.48470075932541, lng: -2.2675676805420717}
    // },
    // {
    //     route_name:"tandle_hill_park", 
    //     activity_type:"cycle", 
    //     title:"Tandle Hill Park, Oldham", 
    //     cover:"park-path-3.jpg", 
    //     description:"Tandle Hill is a large country park with mostly wide artificial paths and tracks that are good for cycling and running. There is a large, wooded area all around the park area which is well looked after. You can generally follow a path all the way round in a circuit fashion if you so wish.", 
    //     difficulty:"easy", 
    //     distance:10, 
    //     time:15, 
    //     location:"", 
    //     map_data:{lat: 53.5747324461941, lng: -2.1463226357504683}
    // },
    // {
    //     route_name:"heaton_park", 
    //     activity_type:"run", 
    //     title:"Heaton Park, Manchester", 
    //     cover:"park-path-5.jpg", 
    //     description:"Heaton Park is a large park area that has lots of amenities and culturally interesting things for people to visit and see. It has a large, wooded area surrounding it as well as a lake which is used for boating and a country manor house near the middle of the estate. Some of the paths are very wide and suitable for bike riding but some are quite narrow, and on busier days it may be very hard to cycle in certain areas.", 
    //     difficulty:"easy", 
    //     distance:5, 
    //     time:25, 
    //     location:"", 
    //     map_data:{lat: 53.535673260450885, lng: -2.2611054356818054}
    // },
    // {
    //     route_name:"drink_water_park", 
    //     activity_type:"run", 
    //     title:"Drink Water Park, Prestwich", 
    //     cover:"river-path-1.jpg", 
    //     description:"Drinkwater Park is a medium-sized park and garden with paths suitable for cycling and running, a skatepark and large rivers and streams where it is shallow enough to swim safely. Some of the trails are steep or narrow and so cycling or running can be difficult in places.", 
    //     difficulty:"difficult", 
    //     distance:10, 
    //     time:150, 
    //     location:"", 
    //     map_data:{lat: 53.521657048545414, lng: -2.2995113956995743}
    // },
    // {
    //     route_name:"kersal_wetlands", 
    //     activity_type:"cycle", 
    //     title:"Kersal Wetlands, Salford", 
    //     cover:"park-path-1.jpg", 
    //     description:"Kersal Wetlands is a large and open stretch of bog which dries out in the summer. The surrounding paths are very wide gravel tracks seemingly perfect for offroad biking with steady inclines and gentle ramps, as well as being suitable for running.", 
    //     difficulty:"moderate", 
    //     distance:10, 
    //     time:15, 
    //     location:"", 
    //     map_data:{lat: 53.508407682209736, lng: -2.269879459334798}
    // },
    // {
	// 	route_name: "twin_peaks",
	// 	title: "Twin Peaks",
	// 	activity_type: "run",
	// 	description: "A lovely area where you can run through the pine fores on the shores of a gorgeous lake. This rouote has moderate difficulty and the total run distance is aprox. 5km, and average runner should be able to compleate it in 90min",
	// 	difficulty: "moderate",
	// 	time: 95,
	// 	distance: 5,
    //     map_data: {lat: 53.48470075932541, lng: -2.2675676805420717},
	// },
	// {
	// 	route_name: "river_dash",
	// 	title: "Riviera Challenge",
	// 	activity_type: "swim",
	// 	description: "Nothing's better than starting the day with an invigorating swim. Challenge yourself every morning by dashing through the waters of the sparkling Riviera. This is not easy, in fact, it's quite difficult, an experienced swimmer should finish this in 15 minutes",
	// 	difficulty: "difficult",
	// 	distance: 50,
	// 	time: 15,
    //     map_data: {lat: 53.535673260450885, lng: -2.2611054356818054},
	// },
	{
		route_name: "water_park_jaunt",
		title: "Chorlton Water Park Jaunt",
		activity_type: "run",
		description: "Chorlton water park is a lightly wooded area with a large body of water in the middle and a path of varying width spanning around the edge. It’s an ideal circuit for running with a decent circuit shaped like a loop. There’s also the river Mersey running parallel nearby. Open grassland and lightly wooded areas with a lake and nature reserve.",
		difficulty: "easy",
		distance: 2,
		time: 7,
        map_data: {lat: 53.423561082512386, lng: -2.271533809921023},
	},
    {
		route_name: "ontario_basin_bleep",
		title: "Ontario Basin Bleep Test",
		activity_type: "swim",
		description: "Ontario basin is an area of the local docks that is mainly used for swimming in the local area. This is a decent area for bike riding and running as well, but routes will mostly be a mish-mash of pedestrian zones and roads. The area is an inner-city area that has shopping centres and plenty of amenities. Two lengths there and back of the basin should probably be a good marker of fitness. Be aware that the quays can be quite deep in places.",
		difficulty: "difficult",
		distance: 500,
		time: 10,
        map_data: {lat: 53.47078132189973, lng: -2.2872806389482454},
	},
    {
		route_name: "dovestone_reservoir_race",
		title: "Dovestone Reservoir Race",
		activity_type: "run",
		description: "Dovestone Reservoir is a massive, hilly open area with plenty of cliffs and a couple of reservoirs. In the area there is a quarry and plenty of decent views. There are limited amenities but there are local pubs. This is a difficult run due to the varying terrain and long distance requirements. Difficult terrain with moderate inclines and a long distance with a moderately achievable time.",
		difficulty: "difficult",
		distance: 4.2,
		time: 27,
        map_data: {lat: 53.53122778749697, lng: -1.9762812228569813},
	},
    {
		route_name: "alexandra_park_sprint",
		title: "Alexandra Park Sprint",
		activity_type: "run",
		description: "Alexandra Park is a small public park with a pond and some open grassy areas. There are some narrow footpaths that we use to set very fast times. Nice and short sprint with a short timer to go with it.",
		difficulty: "moderate",
		distance: 1.6,
		time: 4,
        map_data: {lat: 53.451489451990525, lng: -2.2497095366618267},
	},        
]
    
    

//=======================================================


// for our tests only, this creates the route
const createRoute = async (routeObj, token) => {

    // needs a token to cerateing and deleting routes, since is not used in 
    // const garysToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlYzY4MTE3ZDRiZjk5NDFjMzYwY2EiLCJpYXQiOjE2NTcxOTcxOTYsImV4cCI6MTY1OTc4OTE5Nn0.Qzaw8MLvd6t9psww3Ymm69AxRR1paqFORsp8Frv_hu4";

    try {
        // POST /routes/create { routeObj, token } => { routeObj }
        const res = await fetch(`${process.env.REACT_APP_REST_API}/routes/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json", 
                "authorization": token,
            },
            body: JSON.stringify( routeObj ),
        });

        const data = await res.json();
        console.log('-> createRoute(), data:', data);

        if (data.error) throw new Error(data.error)

    } catch (error) {
        console.log('-> createUser(), error: ',error);
    }

};



// // for our tests only, this deletes a route
// const deleteRoute = async (routeName, token) => {
//     try {
//         // DELETE /routes/:route_name {token} => {success/failure}
//         const res = await fetch(`${process.env.REACT_APP_REST_API}/routes/${routeName}`, {
//             method: "DELETE",
//             headers: { 
//                 "Content-Type": "application/json",
//                 "authorization": token,
//             },
//         });

//         const data = await res.json();
//         console.log('-> deleteRoute(), data:', data);

//         if (data.error) throw new Error(data.error)

//     } catch (error) {
//         console.log('-> deleteRoute(), error: ',error);
//     }

// };

// =====================================================

const insertAllRoutes = async () => {

    const garysToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlYzY4MTE3ZDRiZjk5NDFjMzYwY2EiLCJpYXQiOjE2NTcxOTcxOTYsImV4cCI6MTY1OTc4OTE5Nn0.Qzaw8MLvd6t9psww3Ymm69AxRR1paqFORsp8Frv_hu4";

    try {
        for (const it of routesData) {
            console.log( 'try to add: ', it );
            it.map_data = JSON.stringify( it.map_data );
            const result = await createRoute(it, garysToken);
            console.log( 'result of ading is: ', result )
        }
    } catch (err) {
        console.log(err);
    }
}

// // adding
// insertAllRoutes()


const Setup_insertRoutesToDb = () => {

    return (
        <button onClick={ insertAllRoutes }>InsertAll</button>
    )

}

export default Setup_insertRoutesToDb;