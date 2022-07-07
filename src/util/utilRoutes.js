


// retrieveAllRoutes(  ) => fetch(); returns an array of route objects
export const retrieveAllRoutes = async (setter) => {
    try {
        // GET /routes/all => [{route},]
        const res = await fetch(`${process.env.REACT_APP_REST_API}/routes/all`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
            }
        });

        const data = await res.json();
        console.log('-> retrieveAllRoutes(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // calls the setter to set the state
        setter(data);

        //return result
        return res.ok;

    } catch (error) {
        console.log('-> retrieveAllRoutes(), error: ',error);
        return false;
    }
}



// will return a route object for the specified name
export const retrieveNamedRoute = async (routeName, setter) => {
    try {
        // GET /routes/:route_name => { routeObj }
        const res = await fetch(`${process.env.REACT_APP_REST_API}/routes/${routeName}`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
            }
        });

        const data = await res.json();
        console.log('-> retrieveNamedRoute(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setter( data );

        //return result
        return res.ok;

    } catch (error) {
        console.log('-> retrieveNamedRoute(), error: ',error);
        return false;
    }
}




// -------------------------------------------------------------
// -------------------------------------------------------------


// // for our tests only, this creates the route
// export const createRoute = async (routeObj, token) => {

//     // needs a token to cerateing and deleting routes, since is not used in 
//     // const garysToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlYzY4MTE3ZDRiZjk5NDFjMzYwY2EiLCJpYXQiOjE2NTcxOTcxOTYsImV4cCI6MTY1OTc4OTE5Nn0.Qzaw8MLvd6t9psww3Ymm69AxRR1paqFORsp8Frv_hu4";

//     try {
//         // POST /routes/create { routeObj, token } => { routeObj }
//         const res = await fetch(`${process.env.REACT_APP_REST_API}/routes/create`, {
//             method: "POST",
//             headers: { 
//                 "Content-Type": "application/json", 
//                 "authorization": token,
//             },
//             body: JSON.stringify( routeObj ),
//         });

//         const data = await res.json();
//         console.log('-> createRoute(), data:', data);

//         if (data.error) throw new Error(data.error)

//     } catch (error) {
//         console.log('-> createUser(), error: ',error);
//     }

// };



// // for our tests only, this deletes a route
// export const deleteRoute = async (routeName, token) => {
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
