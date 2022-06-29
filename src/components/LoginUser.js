import { useState } from "react";

const LoginUser = ( { user, setUser } ) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("login user - ", username, password);
        console.log("ToDo: LoginUser -> loginUser( {user}, setUser )")
    };
    
    return(
        <form onSubmit={submitHandler}>
        { !user && <input onChange={(e) => setUsername(e.target.value)} /> }
        { !user && <input onChange={(e) => setPassword(e.target.value)} /> }
        { user && <p> Hello, {user.full_name} </p> }
            <button type="submit">{ !user ? "Login" : "Logout" }</button>
        </form>
    )
};

export default LoginUser;
    