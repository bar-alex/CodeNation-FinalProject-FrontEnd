import { useState, useEffect } from 'react';

import './App.css';

function App() {

  // Here is a list of variables with states and that allow users to control their accounts
  // LogUser allows us to call on the login componenent/route. If we aren't logged in, show a login bar.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createUser, setCreateUser] = useState();
  const [deleteUser, setDeleteUser] = useState();

  return (
    <div className="App">
      <h1>{!isLoggedIn ? "Login" : isLoggedIn} </h1>

      <div className='container'>

      </div>
    </div>
  );
}

export default App;
