import React from 'react';
import Product from './Product';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const ProductList = () => {
  const {products,loading} = useGlobalContext();
 
    return (
      <section className='menu-section'>
        {
          loading && <Loading className='loading-icon' loading={loading}/>
        }
        {
          !loading && products.length === 0 && <h2>no products matched your search</h2>
        }
        <div className='menu-list'>
          {
            products.map((item)=>{
              return <Product key={item.id} {...item}/>
            })
          }
        </div>
      </section>
    )
  
}

export default ProductList