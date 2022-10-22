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
          centered
          animationSpeed={200}
          offset={50}
          itemWidth={400}
          slides={slides}
          breakpoints={{
            960:{
                slidesPerPage:1,
                arrow:false,
                itemWidth:250              }
          }}
        
        />
    </div>
  )
}

export default Slider