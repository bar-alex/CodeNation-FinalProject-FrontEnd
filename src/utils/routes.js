export const login = async (username, password, setIsLoggedIn) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        console.log(data);
        setIsLoggedIn(true);
        console.log(data.returnUser.username)

    } catch (error) {
        console.log(error)
    }
};