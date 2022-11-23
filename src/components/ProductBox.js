import React from 'react'
import { Container  } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import Slider from 'react-slick';


export default function ProductBox() {

  const listProduct = useSelector(state => state.productReducer);



  const settings_1 = {
    dots: true,
    infinite: true,
    // accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }

  return (
    <div className="boxProduct">
      <Container>
      <h1 className='boxProduct__title mb-5 text-center'>Featured Products</h1>
        
        <Slider {...settings_1} className='list'>
          {listProduct.data && Object.keys(listProduct.data).map((key) => {
            return <ProductItem key={key}  data={listProduct.data[key]}/> 
          })}
          </Slider>
      </Container>
    </div>
  )
}
