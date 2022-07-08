import { getUserToken } from "./utilUser";

// { userId, routeId, activity_type(run,cycle,swim), date_activity, distance, time_taken, pace, cal_burned }

// -- create a new activity, token is required => setActivity( activityObj )
export const createActivity = async (activityObj, setActivity) => {

    try {
        // make sure required keys are in there: 
        if (!activityObj?.userId || !activityObj?.routeId || !activityObj?.activity_type || !activityObj?.date_activity)
            throw new Error(`Required fields are missing form activityObj: ${activityObj}`)

        // POST /activities/create { activityObj, token } => { activityObj }
        const res = await fetch(`${process.env.REACT_APP_REST_API}/activities/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "authorization": getUserToken(),
            },
            body: JSON.stringify( activityObj ),
        });


        const data = await res.json();
        console.log('-> createActivity(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setActivity( data );

        // return the result
        return res.ok;

    } catch (error) {
        console.log('-> createActivity(), error: ',error);
        return false;
    }
};


// -- updates the specified activity, token is required => setActivity( activityObj )
export const updateActivity = async (activityId, activityObj, setActivity) => {
    try {
        // PATCH /activities/:activity_id { activityObj, token } => { activityObj }
        const res = await fetch(`${process.env.REACT_APP_REST_API}/activities/${activityId}`, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "authorization": getUserToken(),
            },
            body: JSON.stringify( activityObj ),
        });

        const data = await res.json();
        console.log('-> updateActivity(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state -- not needed i think
        setActivity( data );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> updateActivity(), error: ',error);
        return false;
    }
};


// -- deletes the specified activity, token is required
// DELETE /activities/:activity_id { token } => {success/failure}

// -- returns the data for a specified activity, token is required
// GET /activities/:activity_id { token } => { activityObj }

// -- returns a list of tokenized user's activities for the specified query parameters // all param are optional
// GET /activities/user/self ? activity_type= &route_name= &date_start=yyyy/mm/dd &date_end= { token } => [{ activityObj },]

// -- returns a list of specified user's activities for the specified query parameters // all param are optional
// GET /activities/user/:username ? activity_type= &route_name= &date_start=yyyy/mm/dd &date_end= { token } => [{ activityObj },]
