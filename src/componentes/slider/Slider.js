import React from 'react'
import slides from "./slides"
import "./Slider.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = () => {
  return (
    <div className='carusel-container'>
      <div className='carousel-title'>
        <h2>Mis Proyecto</h2>
      </div>
        <Carousel
          plugins={["arrows","infinite"]}
          slidesPerPage={3}
          animationSpeed={200}
          centered
          offset={50}
          itemWidth={400}
          slides={slides}
        
        />
    </div>
  )
}

export default Slider