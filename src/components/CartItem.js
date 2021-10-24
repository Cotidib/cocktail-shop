import React from 'react'
import { useGlobalContext } from '../context'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

function CartItem({ id, img, name, price, amount }) {
    const {remove, toggleAmount} = useGlobalContext();

    return (
        <article className='item-box'>
            <div className='item-container'>
                <img src={img} alt={name}/>
                <div className='item-info-container'>
                    <h4>{name}</h4>
                    <p>$ {price}</p>
                    <button onClick={() => remove(id)}>remove</button>
                </div>
            </div>
            <div className='item-amount-container'>
                <button onClick={()=>toggleAmount(id,'increase')}><MdOutlineKeyboardArrowUp/></button>
                <span className='item-amount'>{amount}</span>
                <button onClick={()=>toggleAmount(id, 'decrease')}><MdOutlineKeyboardArrowDown/></button>
            </div>
        </article>
    )
}

export default CartItem
