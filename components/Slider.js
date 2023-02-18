import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
            <div className="bg-red-500 h-48">a</div>
            <div className="bg-yellow-500 h-48">b</div>
            <div className="bg-blue-500 h-48">c</div>
        </Carousel>
    </div>
  )
}

export default Slider