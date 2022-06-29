import { useState } from "react";

const DeleteUser = ( { user, password } ) => {
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("delete user - ", password);
        console.log("ToDo: DeleteUser -> deleteUser( {user}, setUser, remove token )")
    };
    
    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Delete Account</button>
        </form>
    )
};

export default DeleteUser;