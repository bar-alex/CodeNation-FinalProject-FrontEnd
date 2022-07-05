// :: users - holds the users
//     _id
//     username:   S,U
//     password:   S
//     email:      S,U
//     full_name:  S
//     is_disabled:B      // maybe, later
//     is_admin:   B      // maybe, later 

// createUser( {userObj}, setUser ) => fetch(); use setUser( newUser ); save token
export const createUser = async (userObj, setUser) => {

    try {
        // POST /users/register/ {userObj} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });
        const data = await res.json();
        // console.log(data);
        if (data.error) throw new Error(data.error)

        // save user token for autologin
        saveUserToken(data.token)

        // set the user to state
        setUser( data.user );

    } catch (error) {
        console.log('-> createUser(), error: ',error);
    }

};


// updateUser( {userObj}, setUser, token ) => fetch(); use setUser( user ); 
export const updateUser = async (userObj, setUser) => {
    // PATCH /users/self {userObj, token, auth_password} => {userObj}

};


// deleteUser( {userObj,password}, token ) => fetch(); setUser( {} ); remove token;
export const deleteUser = async (userObj, setUser) => {
    // DELETE /users/self {token, auth_password} => success/failure 

};


// loginUser( {userObj}, setUser ) => fetch(); use setUser( loggedUser ); save token
export const loginUser = async (userObj, setUser) => {
    try {
        console.log('->loginUser() run with userObj: ', userObj)
        // POST /users/login/ {username, password} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });
        const data = await res.json();
        console.log('->data: ',data);
        if (data.error) throw new Error(data.error)

        // save user token for autologin
        saveUserToken(data.token)

        // set the user to state
        setUser( data.user );

    } catch (error) {
        console.log('-> createUser(), error: ',error);
    }
};


// logoutUser( token ) => remove token; setUser( {} )
export const logoutUser = async (setUser) => {

    setUser( {} );
    removeUserToken();

};


// retrieveUser( token ) => fetch(token); retrieve userObj
export const retrieveUser = async (setUser) => {
    try {
        // GET /users/self {token} => {userObj}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/users/self`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                "authorization": getUserToken(),
            }
        });
        const data = await res.json();
        console.log('->data: ',data);
        if (data.error) throw new Error(data.error)

        // save user token for autologin
        // saveUserToken(data.token)

        // set the user to state
        setUser( data );

    } catch (error) {
        console.log('-> createUser(), error: ',error);
    }
}


// utils related to the token
export const saveUserToken = (token) => localStorage.setItem("userToken",token);
export const getUserToken = () => localStorage.getItem("userToken")??'';
export const removeUserToken = () => localStorage.removeItem("userToken");
