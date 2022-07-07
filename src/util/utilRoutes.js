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

        if (data.error) throw new Error(data.error)

        // calls the setter to set the state
        setter(data);

    } catch (error) {
        console.log('-> retrieveAllRoutes(), error: ',error);
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

        if (data.error) throw new Error(data.error)

        // set the user to state
        setter( data );

    } catch (error) {
        console.log('-> retrieveNamedRoute(), error: ',error);
    }
}