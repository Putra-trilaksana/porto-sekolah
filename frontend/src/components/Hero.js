import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/hero1.jpeg'
import hero2 from './../assets/hero2.jpg'
import hero3 from './../assets/hero3.jpg'

const Hero = (props) => {
    const label1 = "SMA PRADIKA NUSANTARA"
    const label2 = "TEXT 2"
    const label3 = "TEXT 3"
    const des1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet id aspernatur aliquam dolor quisquam molestiae obcaecati in vero veritatis."
    const des2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet id aspernatur aliquam dolor quisquam molestiae obcaecati in vero veritatis."
    const des3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet id aspernatur aliquam dolor quisquam molestiae obcaecati in vero veritatis."

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-cover w-100"
          src={hero1} 
          alt="First slide"
        />
        <Carousel.Caption className='d-none d-lg-block'>
          <h3>{label1}</h3>
            <p>
                {des1}
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-cover w-100 h-50"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption className='d-none d-lg-block'>
          <h3>{label2}</h3>
            <p>
                {des2}
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-cover w-100 h-50"
          src={hero1}
          alt="Third slide"
        />

        <Carousel.Caption className='d-none d-lg-block'>
          <h3>{label3}</h3>
            <p>
                {des3}
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;