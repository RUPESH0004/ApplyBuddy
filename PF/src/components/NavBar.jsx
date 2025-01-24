import React from 'react';
import logo from '../assets/logo.jpg';
import './NavBar.css'
import Button from './Button';
const NavBar = () => {
  function handleOnClick()
  {
     alert ("sign in or signup button is pressesd")
  }
  return (<>
    <div className="MainDiv">
      <div className="logo">
        <img  src={logo} alt="Buddy Logo"  className='logo-img'/>
        <h3 className='comp-name'>ApplyBuddy</h3>
      </div>
      <div className='Search-Bar'>
        <input type="search" placeholder='Search Here' className='search-block' />
        <button className='search-button'>Search</button>
      </div>
      <div className='login-info'>
      <Button onPress={handleOnClick}>SignIn</Button>
      <Button onPress={handleOnClick}>SignUp</Button>
      </div>
    </div>
    </>
  );
};

export default NavBar;
