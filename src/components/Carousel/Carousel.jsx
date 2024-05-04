import React from 'react';
import dummyData from '../Data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
  
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {dummyData.map((item, id) => (
                    <div className="card-wrapper" key={id}>
                    <div className='card border-0'  id="card">
                        <div className="card-body">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
