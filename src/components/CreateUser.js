import { useState } from "react";

export const CreateUser = ( { setCreateUser, setIsLoggedIn, isLoggedIn} ) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username, email, password, setCreateUser, setIsLoggedIn, isLoggedIn);
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input defaultValue={"Choose a username"} onChange={(e) => setUsername(e.target.value)} />
                <input defaultValue={"Your email address"} onChange={(e) => setEmail(e.target.value)} />
                <input defaultValue={"Choose a password"} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Create account</button>
            </form>
        </div>
    )
};