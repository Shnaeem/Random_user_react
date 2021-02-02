// import React, {useState} from 'react';
// import axios from 'axios';
// import FetchUser from "./services/FetchUser";
import './App.css';
import User from "./components/User";

function App() {

  // const refreshUser = (fetchUser) =>{
    

  // }



  return (
    <div className="container">
      <header>
        <h1>Random User's React</h1>
      </header>

      {/* {console.log(FetchUser())} */}

      <User/>

    </div>
  );
}

export default App;