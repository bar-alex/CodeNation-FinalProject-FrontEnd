import { useState } from "react";

const UserDelete = ( { user } ) => {
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        if (window.confirm('This action is irriversible. Delete your account?')) {
            console.log("delete user - ", password);
            console.log("ToDo: DeleteUser -> deleteUser( {user}, setUser, remove token )");
        } else {
            console.log("Not deleted");
        }
    };
    
    return(
        <form onSubmit={submitHandler}>
            <p>This action is permanent. To confirm, please input your password.</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Delete Account</button>
        </form>
    )
};

export default UserDelete;
