
import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from 'react-overlays/Modal';
import { updateUser, deleteUser } from "../util/utilUser";


//---
import { retrieveAllRoutes, retrieveNamedRoute } from "../util/utilRoutes";

const xx = async () => {
    const strToMap = (yy) => console.log('-> yy: ', console.log(yy, JSON.parse(yy) ) );

    const result = await retrieveAllRoutes( ()=>{} ); 

    const result2 = await retrieveNamedRoute('river_dash', strToMap); 
};
xx();
//---


// the 'darkness' behind the dialog
const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
`;


// styling for the modal div
const ModalDiv = styled(Modal)`
    position: fixed;
    width: 400px;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;

    > div {
        /* border: 1px solid red; */
        /* height: 300px; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    > div > form {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input[type="text"], input[type="password"] {
        height: 30px;
    }

    #pass-invalid-text { font-size:0.8rem; color:coral; }

    /* the buttons of the form */
    > div > form > div {
        display: flex;
        justify-content: space-between;
    }

`;


// the button that opens the modal
const OpenButton = styled.button`
    padding: 6px;
    /* margin-top: 8px; */
    margin-right: 16px;
    margin-left: -12px;     /* gets it closer to the login button, while the login still has 16px margin-right */
    background: coral;      /* button background color */
    color: white;
    font-size: 17px;
    border: none;
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;    

    :hover { background: red; }
`;



const UserUpdateAndDelete = ( { user, setUser } ) => {

    const [show, setShow] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;


    const [authPassword, setAuthPassword]   = useState();
    
    const [username, setUsername]   = useState( user?.username );
    const [email, setEmail]         = useState( user?.email );
    const [fullName, setFullName]   = useState( user?.full_name );

    const [password, setPassword]           = useState();
    // to confirm the password is typed correctly
    const [confirmedPass, setConfirmedPass] = useState();

    // toggled when a submit attept was done after being shown
    const [attempted, setAttempted] = useState(false)

    // for the show toggle, either of show or hidden, just reset attempted
    useEffect( () => setAttempted(false),[show] )


    // i push the values from the props into the local state
    // useEffect( ()=>{
    //     setUsername(user?.username);
    //     setEmail(user?.email);
    //     setFullName(user?.full_name);
    // },[show,user?.username,user?.email,user?.full_name] )


    console.log('-> UserUpdateAndDelete() ', user, username, email, fullName );

    const submitHandler = async (e) => {
        e.preventDefault();

        // attempt was made, toggle this
        setAttempted(true)

        console.log("updating user - ", username, fullName, email, password);

        // check the password entered is correct before proceeding with the deletion

        console.log('-> UserUpdateAndDelete.submitHandler():',
            'authPassword:',authPassword, 'email:', email, 'fullName:', fullName,
            'password:',password, 'confirmedPass:',confirmedPass)

        // theck the data is enetered - a simple validation
        if ( !!authPassword && 
            (!!email || !!fullName || (!!password && (password===confirmedPass)) )
        ){

            const userObj = { auth_password: authPassword }
            if (!password && password === confirmedPass)    userObj.password = password;
            if (fullName!==user.full_name)                  userObj.full_name = fullName;
            if (email!==user.email)                         userObj.email = email;

            console.log('-> UserUpdateAndDelete.submitHandler(): userObj: ', userObj)

            // testing to make sure i got more fields than the auth_password, otherwise is pointless
            if ( Object.keys(userObj).length > 1 ) {
                const result = await updateUser( userObj, setUser );
                console.log('-> UserUpdateAndDelete.submitHandler(): updateUser() result is: ', result);
            }

            // close the screen
            setShow(false);
        }

    };


    // will delete the username and clear the token and user state
    const handleDeleteButton = async () => {
        // check the password entered is correct before proceeding with the deletion
        const result = await deleteUser({ suth_password: authPassword }, setUser);
        console.log('-> UserUpdateAndDelete.handleDeleteButton(): deleteUser() result is: ', result);
    }


    return(
    <div className="modal-example">
        {/* the register user button */}
        {user?.username && 
            <OpenButton type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}
            >
                {/* <FaRegUserCircle /> */}
                Account
            </OpenButton>
        }

        {/* the actual modal div */}
        <ModalDiv
            show={show}
            onHide={() => setShow(false)}
            renderBackdrop={renderBackdrop} 
            aria-labelledby="modal-label"
        >
            <div>
                <h4 id="modal-label">
                    Hello {user?.full_name}, before we proceed you need to confirm your account password:
                </h4>
                <input id="auth_password" name="auth_password" 
                        type="password"
                        required
                        placeholder="Current password" 
                        onChange={(e) => setAuthPassword(e.target.value.trim())} 
                />

                <br/>
                <form onSubmit={submitHandler}>

                    <h4>Account information:</h4>

                    {/* <label for="username">Username</label> */}
                    <input id="your username" name="username" 
                        type="text"
                        readOnly
                        placeholder="Username" 
                        defaultValue={username}
                        onChange={(e) => setUsername(e.target.value.trim())} 
                    />


                    {/* <label for="fullName">Full name</label> */}
                    <input id="fullName" name="fullName" 
                        type="text"
                        placeholder="Full name"
                        defaultValue={fullName}
                        onChange={(e) => setFullName(e.target.value)} 
                    />
                    
                    {/* <label for="email">Email</label> */}
                    <input id="email" name="email" 
                        type="text"
                        placeholder="Email"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    {/* <label for="password">Password</label> */}
                    <input id="password" name="password" 
                        type="password"
                        placeholder="New password" 
                        onChange={(e) => setPassword(e.target.value.trim())} 
                    />

                    {/* <label for="confirmPass">Re-type password</label> */}
                    <input id="confirmPas" name="confirmPass" 
                        type="password"
                        placeholder="Re-type new password" 
                        onChange={(e) => setConfirmedPass( e.target.value.trim() )} 
                    />
                    {<p id="pass-invalid-text">{ password!==confirmedPass ? "* passwords don't match!" : " " }</p> }

                    <br/>
                    <div>
                        <button type="submit">
                            Update account
                        </button>
                        <button type="button" onClick={() => setShow(false)}>
                            Cancel 
                        </button>
                    </div>
                </form>

                <br/>
                <hr/>
                <br/>
                <div>
                    <h4 id="modal-label">If you decide to delete your account, press the following button, but be warned as this operation is irreversible</h4>
                    <br/>
                    <button type="button" 
                        tabIndex="-1" 
                        onClick={handleDeleteButton}
                    >
                        Delete account and related data
                    </button>
                </div>

            </div>
        </ModalDiv>

    </div>
    )
};

export default UserUpdateAndDelete;
