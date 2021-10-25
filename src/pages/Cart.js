import React from 'react';
import CartItem from '../components/CartItem.js';
import { useGlobalContext } from '../context.js';

const Cart = () => {
    const { cart, total } = useGlobalContext();

    if (cart.length === 0) {
        return (
          <section className='cart'>
            <header>
              <h2>Your Cart</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        )
      }

    return (
        <section className='cart-container'>
        <div className='cart-titles'>
          <h5>Product</h5>
          <h5>Name</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
          <h5></h5>
        </div>
        <div className='cart-list'>
             {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        </div>
        <div className='total-price-container'>
            <h2>Total</h2>
            <h3>$ {total}</h3>
        </div>
        </section>
    )
}

export default Cart
