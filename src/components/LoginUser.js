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
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
};

export default LoginUser;
    