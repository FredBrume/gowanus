import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';


const handleMenuItemClick = (evt) => {

}
const handleToggleClick = (evt) => {

}

const NavMenu = props => (

        <header role= 'banner'>
          <NavLink to ="/"><img className='header-logo' alt="logo"/></NavLink>
          <nav id='nav'>
            <ul className= 'nav-menu'>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'menu'><NavLink to='/home'>Home</NavLink></li>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'parties'><NavLink to="/about">About us</NavLink></li>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'gallery'><NavLink to="#">Services</NavLink></li>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'contact'><NavLink to="/donate">Donate</NavLink></li>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'contact'><NavLink to="/donate">Event</NavLink></li>
              <li className= 'nav-item' onClick = {handleMenuItemClick} data-id = 'contact'><NavLink to="/donate">Contact</NavLink></li>
            </ul>
          </nav>
  
          <div id='toggle' onClick={handleToggleClick}>
            <div className='span' id='bar1'></div>
            <div className='span' id='bar2'></div>
            <div className='span' id='bar3'></div>
          </div>
      </header>
);

export default NavMenu;