import React from 'react';
import logo from '../assets/logo.jpg';
import './NavBar.css';

const NavBar = () => {
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
      <button className='login-button'>SignIn</button>
      <button  className='login-button'>SignUp</button>
      </div>
    </div>
    </>
  );
};

export default NavBar;
