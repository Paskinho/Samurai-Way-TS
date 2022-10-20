import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/MyPosts/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App =() => {
  return (
    <div className="app-wrapper">
     <Header />
      <Navbar />
    <div className = "app-wrapper-content">
        <Route component ={Dialogs} />
        <Route component ={Profile}/>
        {/*<Dialogs />*/}
        <Profile />
    </div>

    </div>
  );
}

export default App;
