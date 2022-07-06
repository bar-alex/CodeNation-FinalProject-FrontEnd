
import { useState } from "react";
import styled from "styled-components";
import Modal from 'react-overlays/Modal';
import { createUser } from "../util/utilUser";


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



const UserRegister = ( { user, setUser } ) => {

    const [show, setShow] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    
    const [username, setUsername]   = useState();
    const [email, setEmail]         = useState();
    const [fullName, setFullName]   = useState();

    const [password, setPassword]   = useState();
    const [confirmedPass, setConfirmedPass] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("register user - ", username, fullName, email, password, confirmedPass);
        console.log("ToDo: RegisterUser -> createUser( {user}, setUser )")

        if (!!username && !!email && !!fullName && !!password && (password===confirmedPass) ){
            // call createUser to save the data

            createUser( {username, password, email, full_name:fullName }, setUser );

            setShow(false);
        }
    };


    return(
        <div className="modal-example">
            {/* the register user button */}
            {!user?.username && 
                <OpenButton type="button"
                    className="btn btn-primary mb-4"
                    onClick={() => setShow(true)}
                >
                    {/* <FaRegUserCircle /> */}
                    Register
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
                    <h4 id="modal-label">Please enter your information to register:</h4>
                    <br/>
                    <form onSubmit={submitHandler}>
                        {/* <label for="username">Username</label> */}
                        <input id="your username" name="username" 
                            type="text"
                            required
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value.trim())} 
                        />
                        

                        {/* <label for="fullName">Full name</label> */}
                        <input id="fullName" name="fullName" 
                            type="text"
                            required
                            placeholder="Full name"
                            onChange={(e) => setFullName(e.target.value)} 
                        />
                        
                        {/* <label for="email">Email</label> */}
                        <input id="email" name="email" 
                            type="text"
                            required
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        
                        
                        {/* <label for="password">Password</label> */}
                        <input id="password" name="password" 
                            type="password"
                            required
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value.trim())} 
                        />

                        {/* <label for="confirmPass">Re-type password</label> */}
                        <input id="confirmPas" name="confirmPass" 
                            type="password"
                            required
                            placeholder="Re-type password" 
                            onChange={(e) => setConfirmedPass( e.target.value.trim() )} 
                        />
                        {<p id="pass-invalid-text">{ password!==confirmedPass ? "* passwords don't match!" : " " }</p> }

                        <br/>
                        <div>
                            <button type="submit">
                                Create account
                            </button>
                            <button type="button" onClick={() => setShow(false)}>
                                Cancel 
                            </button>
                        </div>
                    </form>

                </div>
            </ModalDiv>

        </div>
    )
};

export default UserRegister;
