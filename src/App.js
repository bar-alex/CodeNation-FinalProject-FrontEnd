import { useState } from 'react';
import LogInUser from './components/LogInUser.js/index.js.js.js';
import './App.css';

function App() {

  // Here is a list of variables with states and that allow users to control their accounts
  // LogUser allows us to call on the login componenent/route. If we aren't logged in, show a login bar.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [createUser, setCreateUser] = useState();
  // const [deleteUser, setDeleteUser] = useState();
  // a comment somewhere
  return (
    <div className="App">
      <h1>{!isLoggedIn ? "Login" : isLoggedIn} </h1>
      {!isLoggedIn && <LogInUser setIsLoggedIn={setIsLoggedIn} />}
      <div className='container'>

      </div>
    </div>
  );
}

export default App;
