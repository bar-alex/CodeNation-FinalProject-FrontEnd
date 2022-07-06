// :: activities - will hold the recorded activities (runs, cycling, etc)
// userId:         _id.User
// routeId:        _id.Route
// activity_type:  S,('run','cycle','swim'),

// date_activity:  D
// distance:       N
// time_taken:     N
// pace:           N
// cal_burned:     N


import { useState } from "react";
import styled from "styled-components";
import { FaSwimmer } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";


// routeObj ~> the route object with id, title, activity_type
// activityObj ~> with initial data for update / delete
// action = 'create', 'update', 'delete'
const ActivityDetail = ( { routeObj, activityObj, action } ) => {

    const [show, setShow] = useState(false);

    // will return the current date to place it in a input
    const currentDate = () => {
        let curr = new Date();
        curr.setDate(curr.getDate() + 3);
        const date = curr.toISOString().substring(0,10);
        return date;
    }
    
    // if the action is create, they start empty, if the action is update / delete, they start with current data
    const [dateActivity, setDateActivity]   = useState( action==='create' ? currentDate() : activityObj.date_activity );
    const [distance, setDistance]           = useState( action==='create' ? undefined : activityObj.distance );
    const [timeTaken, setTimeTaken]         = useState( action==='create' ? undefined : activityObj.time_taken );
    const [pace, setPace]                   = useState( action==='create' ? undefined : activityObj.pace );
    const [calBurned, setCalBurned]         = useState( action==='create' ? undefined : activityObj.cal_burned );

    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("-> ActivityDetail.submitHandler() - ", action, ":", date_activity, distance, time_taken, pace, cal_burned);
        console.log("ToDo: RegisterUser -> createUser( {user}, setUser )")

        // depending on the action it will create/update/delete activity
        // if (action === 'create') 
        //     createActivity()
        // else if (action === 'update') 
        //     updateActivity()
        // else if (action === 'delete')
        //     deleteActivity()
        // else 
        //     console.log("-> ActivityDetail.submitHandler() - error :", action, " is supposed to be either 'create', 'update', 'delete' ");

    };


    return (
        <div>
        <form onSubmit={submitHandler}>
            
            <h2>Activity - { 
                    routeObj.activity_type==='run'?<FaRunning/>: 
                    routeObj.activity_type==='cycle'?<FaBiking/>:<FaSwimmer/> 
                }
            </h2>
        
            <input id="date_activity" name="date_activity" 
                type="date"
                required
                placeholder="Date of activity"
                defaultValue={ dateActivity }
                onChange={(e) => setDateActivity(e.target.value)} 
            />
            <br/>

            <input id="distance" name="distance" 
                required
                placeholder={"Distance "+(routeObj.activity_type==='swim'?'(meters)':'(km)') }
                onChange={(e) => setDistance(e.target.value)} 
            />
            {/* <label for="distance">{ routeObj.activity_type==='swim'?' meters':' km' }</label> */}

            <input id="time_taken" name="time_taken" 
                required
                placeholder="Time taken (min)"
                onChange={(e) => setTimeTaken(e.target.value)} 
            />


            <input id="pace" name="pace" 
                required
                placeholder="Pace"
                onChange={(e) => setPace(e.target.value)} 
            />

            <input id="cal_burned" name="cal_burned" 
                required
                placeholder="Calories burned"
                onChange={(e) => setDistance(e.target.value)} 
            />
            
            
            <button type="submit">
                Submit
            </button>
            <button type="button" onClick={() => setShow(true)}>
                Cancel 
            </button>
        </form>
        </div>
    )

}

export default ActivityDetail;
