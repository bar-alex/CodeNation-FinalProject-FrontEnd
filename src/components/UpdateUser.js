import { useState } from "react";

const UpdateUser = ( { user, token, setUser, } ) => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("update user - ", fullName, email, password);
        console.log("ToDo: UpdateUser -> updateUser( {user}, token, setUser )")
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setFullName(e.target.value)} />
                <input onChange={(e) => setEmail(e.target.value)} />
                <input onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Update Account</button>
            </form>
        </div>
    )
}

export default UpdateUser;