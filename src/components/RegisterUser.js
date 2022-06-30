import { useState } from "react";
import styled from "styled-components";

const RegisterUser = ( { user, setUser } ) => {
    const [username, setUsername] = useState();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("register user - ", username, fullName, email, password);
        console.log("ToDo: RegisterUser -> createUser( {user}, setUser )")
    };

    return(
        <DivRegister>
            <form onSubmit={submitHandler}>
                <input defaultValue={"Choose a username"} onChange={(e) => setUsername(e.target.value)} />
                <input defaultValue={"Full Name?"} onChange={(e) => setFullName(e.target.value)} />
                <input defaultValue={"Your email address"} onChange={(e) => setEmail(e.target.value)} />
                <input defaultValue={"Choose a password"} onChange={(e) => setPassword(e.target.value)} />
                {!user && <button type="submit">Create account</button>}
            </form>
        </DivRegister>
    )
};

export default RegisterUser;



const DivRegister = styled.div`
    border: 1px solid red;
`