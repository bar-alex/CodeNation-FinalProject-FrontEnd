import { useState } from "react";

export const LoginUser = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username, password, setIsLoggedIn, isLoggedIn);
    };
    
    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
};
    