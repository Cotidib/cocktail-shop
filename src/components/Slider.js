import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import banner from "../images/banner.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";

function Slider() {
  const [banners] = useState([banner,banner3,banner4]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect( ()=>{
    if(currentIndex<0)
    {
      setCurrentIndex(banners.length-1);
    }
    if(currentIndex>banners.length-1)
    {
      setCurrentIndex(0);
    }

  },[currentIndex,banners]);

  useEffect( ()=>{
    let slider = setInterval( ()=>{
      setCurrentIndex(currentIndex+1);
    }, 8000);
    return()=> clearInterval(slider);
  },[currentIndex]);

  return (
      <section className='slide-container'> 

        {
          banners.map((banner, index) => {
            let position = 'rightSlide';
            if(index === currentIndex)
            {
              position = 'activeSlide';
            }
            else if(index === currentIndex-1 || (currentIndex === 0 && index === banners.length-1))
            {
              position = 'leftSlide';
            }


            return <article className={position} key={index}>
              <img src={banner} alt=''/>
            </article>
          })
        }

        <button className='left' onClick={() => setCurrentIndex(currentIndex-1)}><FiChevronLeft/></button>
        <button className='right'onClick={() => setCurrentIndex(currentIndex+1)}><FiChevronRight/></button>

      </section>
    
  );
}

export default Slider;