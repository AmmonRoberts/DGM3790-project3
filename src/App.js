import './Styles/App.css';
import CountryCards from './Components/CountryCards';
import { CountryContextProvider } from './Contexts/CountryContext'
import React from 'react';
// import { useState, useEffect } from 'react';


const App = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('isLoggedIn')


  //   if (loggedIn === '1') {
  //     isLoggedIn(true);
  //   }

  // }, [])

  // const loginHandler = (email, Password) => {
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // }

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // }


  return (
    <div id="main-div" className='App'>
      <CountryContextProvider>
        <CountryCards />
      </CountryContextProvider>
    </div>
  );
}

export default App;
