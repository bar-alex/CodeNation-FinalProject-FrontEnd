import { useState } from "react";

const LogoutUser = ( { user, token, setUser } ) => {
    const [username, setUsername] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("logout user - ", username, token);
        console.log("ToDo: LogoutUser -> logoutUser( {user}, setUser, token )")
    };
    
    return(
        <form onSubmit={submitHandler}>
            <div setUsername={setUsername({})} />
            <button type="submit">Log out</button>
        </form>
    )
};

export default LogoutUser;