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
        { user && <div><p>This Action is irreversible! Delete Account?</p></div>}
        { user && <input onChange={(e) => setPassword(e.target.value)} />}
        { user && <button type="submit">Delete Account</button>}
        </form>
    )
};

export default DeleteUser;