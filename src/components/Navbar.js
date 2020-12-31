import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  const notification = () =>{
    alert("There is no notification")
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className="header">
        <Link to='#' className='menu-bars' onClick={showSidebar}>
                  <FaIcons.FaBars/>   </Link>
        <Link to='/' className='menu-bars' >
                  Crypto       </Link>
          <div className="header-right">
            <Link to='#' style={{fontSize:"16px"}}>Login/Register</Link>
            <Link to='#' >
              <IoIcons.IoIosNotificationsOutline onClick={notification}/> </Link>
            <Link to='#' ><CgIcons.CgProfile/> </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
