import { useState } from "react";

export const LogInUser = ( { setIsLoggedIn, isLoggedIn } ) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
      e.preventDefault();
      login(username, password, setIsLoggedIn, isLoggedIn);
  };

      return(
          <form onSubmit={submitHandler}>
              <h2>Login here</h2>
              <input onChange={(e) => setUsername(e.target.value)} />
              <input onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">login</button>
          </form>
      )
};
