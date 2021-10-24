import React from 'react';
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context';
import { FaBars } from 'react-icons/fa';
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdShoppingCart } from 'react-icons/md'

const Navbar = () => {
  const{openSidebar} = useGlobalContext();

  return (
    <nav className="navbar">
        <div className='nav-header'>
          <button className='nav-toggle' onClick={openSidebar}><FaBars/></button>
          <Link to="/"><span className="logo">logo</span></Link>
        </div> 
        <ul className='nav-links'>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Link to="/cart"><MdShoppingCart className='cart-icon'/></Link>
    </nav>
  )
}

export default Navbar