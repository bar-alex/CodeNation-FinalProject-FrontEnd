import { useState } from "react";

const UpdateUser = ( { user, setUser } ) => {
    const [userImg, setUserImg] = useState();
    const [username, setUsername] = useState();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        setUserImg();
        console.log("update user - ", userImg, username, fullName, email, password);
  
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h1>Update Account?</h1>

                <input type="file" onChange={(e) => setUserImg(e.target.value)} />
                <img src={userImg} alt="Profile" />
                

                <input defaultValue={"change username"} onChange={(e) => setUsername(e.target.value)} />
                <input defaultValue={"change full name"} onChange={(e) => setFullName(e.target.value)} />
                <input defaultValue={"change email"} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Update Account</button>
            </form>
        </div>
    )
}

export default UpdateUser;
