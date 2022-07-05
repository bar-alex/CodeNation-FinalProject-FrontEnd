import { useState } from "react";
import styled from "styled-components";
import Modal from 'react-overlays/Modal';




const UserRegister = ( { user, setUser } ) => {

    const [show, setShow] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    
    const [username, setUsername]   = useState();
    const [email, setEmail]         = useState();
    const [fullName, setFullName]   = useState();

    const [password, setPassword]   = useState();
    const {passValid, setPassValid} = useState(false);      // will be true when the confirmation password dis the same as the password

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("register user - ", username, fullName, email, password);
        console.log("ToDo: RegisterUser -> createUser( {user}, setUser )")

        if (passValid && !!username && !!email && !!fullName && !!password){
            // call createUser to save the data

            setShow(false);
        }
    };


    return(
        <div>
            {/* the register user button */}
            {!user?.username && 
                <Button type="button"
                    className="btn btn-primary mb-4"
                    onClick={() => setShow(true)}
                >
                    {/* <FaRegUserCircle /> */}
                    Register
                </Button>
            }

            <ModalDiv
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                {/* <div> */}
                <h4 id="modal-label">Please enter your information to register:</h4>

                <form onSubmit={submitHandler}>
                    <label for="username">Username</label>
                    <input id="your username" name="username" 
                        required
                        placeholder="username" 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <br/>

                    <label for="fullName">Full name</label>
                    <input id="fullName" name="fullName" 
                        required
                        placeholder="your full name"
                        onChange={(e) => setFullName(e.target.value)} 
                    />
                    
                    <label for="email">Email</label>
                    <input id="email" name="email" 
                        required
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br/>
                    
                    <label for="password">Password</label>
                    <input id="password" name="password" 
                        type="password"
                        required
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <label for="confirmPass">Re-type password</label>
                    <input id="confirmPas" name="confirmPass" 
                        type="password"
                        required
                        placeholder="same password" 
                        onChange={(e) => setPassValid(e.target.value === password && !!password)} 
                    />
                    {!passValid && <p id="pass-invalid-text">Passwords don't match!</p> }
                    <button type="submit">
                        Create account
                    </button>
                    <button type="button" onClick={() => setShow(true)}>
                        Cancel 
                    </button>
                </form>
                    
                {/* </div> */}
            </ModalDiv>


        </div>
    )
};

export default UserRegister;



const Button = styled.button`
    padding: 6px;
    /* margin-top: 8px; */
    margin-right: 16px;
    background: coral; /* #ddd; */      /* button background color */
    color: white;
    font-size: 17px;
    border: none;
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;    
    margin-left: -12px;

    :hover {
        /* button hover color */
        background: red;
    }
`;


// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const ModalDiv = styled(Modal)`
    position: fixed;
    width: 400px;
    z-index: 1040;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    top: 50%;
    left: 50%;
`;

/* top: ${() => 50 + rand()}%;
left: ${() => 50 + rand()}%; */


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
