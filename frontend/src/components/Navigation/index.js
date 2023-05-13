// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "./airbnb_logo.png"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <header className="header_container">
        <div className='logo_container'>
          <NavLink exact to="/">
            <img src={logo} className="airbnb_logo" alt="airbnb logo" />
            <h1>AirBnb</h1>
          </NavLink>
        </div>




      <nav>
        {/* if the sessionUser is truthy, we will render the NavLink to create a spot */}
        {sessionUser && (
          <a href="#"> <NavLink exact to="/spots/new">Create a New Spot</NavLink>
          </a>
        )}
        {isLoaded && (
          <a>
            <ProfileButton user={sessionUser} />
          </a>
        )}

      </nav>
    </header>
</>


  );
}

export default Navigation;
