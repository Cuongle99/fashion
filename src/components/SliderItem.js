import React from 'react';
import { Link } from 'react-router-dom';
import bgSlider from '../assets/images/bg_slide.jpg';


export default function SliderItem(props) {
  return (
    <div className='slider__item'>
        <img src={bgSlider} alt="" />
        <img className='slider__img' src={props.data.image} alt=''/>
        <div className="slider__content">
            <h1 className="slider__title">{props.data.title}</h1>
            <h1 className="slider__description">{props.data.description}</h1>
            <div><Link className='btn_link' to={'#'}>{props.data.button}</Link></div>
        </div>
    </div>
    
  )
}
