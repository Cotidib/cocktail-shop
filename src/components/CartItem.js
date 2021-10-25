import React from 'react'
import { useGlobalContext } from '../context'
// import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';

function CartItem({ id, img, name, price, amount }) {
    const {remove, toggleAmount} = useGlobalContext();

    return (
        <article className='item-box'>
            <img src={img} alt={name}/>
            <h4>{name}</h4>
            <div className='item-amount-container'>
                <button className='amount-btn' onClick={()=>toggleAmount(id,'increase')}><FaPlus/></button>
                <span className='item-amount'>{amount}</span>
                <button className='amount-btn' onClick={()=>toggleAmount(id, 'decrease')}><FaMinus/></button>
            </div>
            <p>$ {price*amount}</p>
            <button className='remove-btn' onClick={() => remove(id)}><TiDeleteOutline className='remove-icon'/></button>
        </article>
    )
}

export default CartItem
