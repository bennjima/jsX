import React from 'react'
import './App.css';
import ProfilePage from './profile/photoProfile';
import FullName from './profile/fullName';

import Adress from './profile/adress';



function App() {
  return (
    <div className="container">
     <ProfilePage/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;