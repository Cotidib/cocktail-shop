import React from 'react'
import ProductList from '../components/ProductList'
// import banner from "../images/banner.jpg";
import Slider from '../components/Slider.js'

const Home = () => {
  return (
    <main>
      <Slider/>
      {/* <img className='banner' src={banner} alt=''/> */}
      <ProductList/>
    </main>
  )
}

export default Home