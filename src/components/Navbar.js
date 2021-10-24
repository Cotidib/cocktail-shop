import React from 'react';
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context';
import { FaBars } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import { MdShoppingCart } from 'react-icons/md';
import SearchForm from '../components/SearchForm'

const Navbar = () => {
  const{openSidebar} = useGlobalContext();

  return (
    <nav className="navbar">
        <div className='nav-header'>
          <button className='nav-toggle' onClick={openSidebar}><FaBars/></button>
          <Link to="/"><span className="logo"><GiShop/></span></Link>
        </div> 
        <SearchForm/>
        <Link to="/cart"><MdShoppingCart className='cart-icon'/></Link>
    </nav>
  )
}

export default Navbar