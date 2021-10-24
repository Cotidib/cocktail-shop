import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useGlobalContext } from '../context.js';

const Product = ({id,name,image,category,price}) => {
  const {add} = useGlobalContext();

  const handleAddToCart = () => {
    add(id,name,image,price,1);
  }

  return (
    <article className='product-card'>
      <img src={image} alt={name}/>
      <div className='product-info'>
        <div className='product-header'>
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <h5>{category}</h5>
        <div className='products-btns'>
          <Link to={`/product/${id}`} className='details-btn'>details</Link>
          <MdOutlineAddShoppingCart className='addcart-icon' onClick={handleAddToCart}/>
        </div>
      </div>
    </article>
  )
}

export default Product