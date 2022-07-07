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
        console.log('-> createUser(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // save user token for autologin
        saveUserToken(data.token)

        // set the user to state
        setUser( data.user );

        // return the result
        return res.ok;

    } catch (error) {
        console.log('-> createUser(), error: ',error);
        return false;
    }

};


// updateUser( {userObj}, setUser, token ) => fetch(); use setUser( user ); 
export const updateUser = async (userObj, setUser) => {
    try {
        // PATCH /users/self {userObj, token, auth_password} => {userObj}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/users/self`, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "authorization": getUserToken(),
            },
            body: JSON.stringify( userObj ),
        });

        const data = await res.json();
        console.log('-> updateUser(), data:', data);

        // if (data.error) throw new Error(data.error)
        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state -- not needed i think
        setUser( data );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> updateUser(), error: ',error);
        return false;
    }
};


// deleteUser( {userObj,password}, token ) => fetch(); setUser( {} ); remove token;
export const deleteUser = async (userObj, setUser) => {
    try {
        // DELETE /users/self {token, auth_password} => success/failure 
        const res = await fetch(`${process.env.REACT_APP_REST_API}/users/self`, {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "authorization": getUserToken(),
            },
            body: JSON.stringify( userObj ),
        });

        const data = await res.json();
        console.log('-> deleteUser(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // remove the user from state, remove the token
        setUser( {} );
        removeUserToken();

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> deleteUser(), error: ',error);
        return false;
    }

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
        console.log('->loginUser(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // save user token for auto-login
        saveUserToken(data.token)

        // set the user to state
        setUser( data.user );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> loginUser(), error: ',error);
        return false;
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
        console.log('-> retrieveUser(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setUser( data );

    } catch (error) {
        console.log('-> retrieveUser(), error: ',error);
        return false;
    }
}


// utils related to the token
export const saveUserToken = (token) => localStorage.setItem("userToken",token);
export const getUserToken = () => localStorage.getItem("userToken")??'';
export const removeUserToken = () => localStorage.removeItem("userToken");
