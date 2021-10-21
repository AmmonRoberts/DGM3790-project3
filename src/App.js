import './Styles/App.css';
import CountryCards from './Components/CountryCards';
import { CountryContextProvider } from './Contexts/CountryContext'
import React from 'react';


const App = () => {

  return (
    <div id="main-div" className='App'>
      <CountryContextProvider>
        <CountryCards />
      </CountryContextProvider>
    </div>
  );
}

export default App;
