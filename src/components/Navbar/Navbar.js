import React,{useState} from 'react'
import {MenuList} from '../Navbar/MenuList';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({url, title}, index)=> {
    return <li key={index}>
        <NavLink  to={url} activeclassname= "active">{title}</NavLink>
    </li>
  })

  const handleClick = ()=>{
    setClicked(!clicked);
  }
  return (
    <nav>
    <div className='logo'>
      VPN <font>Logo</font>
    </div>
    <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fa fa-times' :'fa fa-bars'}></i>
    </div>
    <ul className={clicked ?'menu-list' : 'menu-list close'}>
        {menuList }
    </ul>
    </nav>
  )
}

export default Navbar;
