import React from 'react';
import NavItem from './NavItem/NavItem';

const menu = [
  {
    text: "Partners"
  },
  {
    text: "Products"
  },
  {
    text: "About Us"
  },
  {
    text: "Home"
  }
];


const NavBar = () => {
  return (
  <React.Fragment>


    <div className="NavBar">

      <div className="Logo">
        <h1>Avery's Organics</h1>
      </div>

      <div>
        <ul className="NavLinks">
        {menu.map((navItem, index) => 
        
          <NavItem 
            text={navItem.text} 
            key={index} />
          )}
        </ul>
      </div>

      <div class="USDALogo">
        <img src="https://i.imgur.com/Z3tA9Tg.png" alt="USDALogo"></img>
      </div>

    </div>
  </React.Fragment>
  )
}

export default NavBar;