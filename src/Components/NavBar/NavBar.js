import React from 'react';
import NavItem from './NavItem/NavItem';

const menu = [
  {
    text: "Home"
  },
  {
    text: "About Us"
  },
  {
    text: "Products"
  },
  {
    text: "Partners"
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
        {/* <NavItem text={"Home"} />
        <NavItem text={"About Us"} />
        <NavItem text={"Products"} />
        <NavItem text={"Partners"} /> */}
        <ul className="NavLinks">
        {menu.map((navItem, index) => 
        
          <NavItem 
            text={navItem.text} 
            key={index} />
          )}
        </ul>
      </div>

    </div>
  </React.Fragment>
  )
}

export default NavBar;