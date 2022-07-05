import styled from "styled-components";
import { useState } from "react";
import { loginUser, logoutUser } from "../util/utilUser";


const UserLogin = ( { user, setUser } ) => {
    const [username, setUsername] = useState( user?.username );
    const [password, setPassword] = useState( user?.password );

    const submitHandler = (e) => {
        e.preventDefault();

        if (!user?.username) {
            // login
            console.log("login user - ", username, password);
            console.log("ToDo: LoginUser -> loginUser( {user}, setUser )");

            loginUser( {username, password}, setUser )
        } else {
            // logout
            console.log("logout user - ", username);
            console.log("ToDo: LogoutUser -> logoutUser( {user}, setUser({}) )");

            logoutUser( setUser )
        }
    };
    
    return(
        <LoginContainer>
        <form onSubmit={submitHandler}>
            {/* not login */}
            { !user?.username && <input type="text" 
                placeholder="username" 
                onChange={(e) => setUsername(e.target.value)} 
                /> 
            }
            { !user?.username && <input type="password" 
                placeholder="password"  
                onChange={(e) => setPassword(e.target.value)} 
                /> 
            }
            {/* logged in */}
            { user?.username && <p> Hi, {user.full_name} </p> }

            <button type="submit" value="default action">
                { !user?.username ? "Login" : "Logout" }
            </button>
        </form>
        </LoginContainer>
    )
};

export default UserLogin;


const LoginContainer = styled.div`

    display: flex;
    flex-wrap: nowrap;
    align-items:stretch;
    
    p { 
        color: white; 
        display:inline-block; 
        margin-right: 5px;
    };

    input[type=text], input[type=password] {
        padding: 6px;
        /* margin-top: 8px; */
        margin-right: 3px;
        /* font-size: 17px; */
        font-size: 1rem;
        border: none;
        width: 120px;
        border-radius: 3px;
    }

    button {
        /* float: right; */
        padding: 6px;
        /* margin-top: 8px; */
        margin-right: 15px;
        background: coral; /* #ddd; /* button background color */
        color: white;
        font-size: 17px;
        border: none;
        display: inline-block;
        border-radius: 4px;

        cursor: pointer;
    }

    button:hover {
        /* background: #ccc;      /* button hover color */
        background: red;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        input[type=text], input[type=password], button {
            /* float: none; */
            display: block;
            text-align: left;
            width: 100%;
            margin: 0;
            padding: 14px;
        }
        input[type=text], input[type=password] {
            border: 1px solid #ccc;    /* borer color for input boxes when displayed in a vertical layout (on phone) */
        }        
    }
`;



// todo: what if he clocks on login if the username + password is not inputed? we need something to display an alert