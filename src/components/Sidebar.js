import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import {useGlobalContext} from '../context';

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen? 'show-sidebar' : null}`}>
        <div className='side-header'>
          <Link to="/"><span className="logo">logo</span></Link>
          <button className='close-toggle' onClick={closeSidebar}><FaTimes/></button>
        </div> 
        <div className="sidebar-content">
            <ul className='side-links'>
            <li><AiOutlineShopping/><Link to="/">Shop</Link></li>
            <li><AiOutlineInfoCircle/><Link to="/about">About</Link></li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar