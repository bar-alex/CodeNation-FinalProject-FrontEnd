import { useState } from "react";

const UpdateUser = ( { user, setUser } ) => {
    const [username, setUsername] = useState();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("update user - ", username, fullName, email, password);
        console.log("ToDo: UpdateUser -> updateUser( {user}, setUser )")
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
            <p>Update Account?</p> 
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setFullName(e.target.value)} />
            <input onChange={(e) => setEmail(e.target.value)} />
            <input onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Update Account</button>
            </form>
        </div>
    )
}

export default UpdateUser;
