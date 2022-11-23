import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imgSider1 from '../assets/images/slide-item-1.png';
import imgSider2 from '../assets/images/slide-item-2.png';
import imgSider3 from '../assets/images/slide-item-3.png';
import Slider from 'react-slick';
import SliderItem from './SliderItem';

export default function HeroSlider() {

    const listSlider = [
        {
            id: 1,
            image: imgSider1,
            title: 'Up to 60% off',
            description: 'Womens',
            button: 'Shop now'
        },
        {
            id: 2,
            image: imgSider2,
            title: 'Sale off this week',
            description: 'Bags',
            button: 'Shop now'
        },
        {
            id: 3,
            image: imgSider3,
            title: 'Summer sale stylist',
            description: 'Womens',
            button: 'Shop now'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="slider">
            <Slider {...settings}>           
            {
                listSlider.map((item, index) => {
                    return <SliderItem key={index} data={item} />
                })
            }
        </Slider>
        </div>
        
    )
}
