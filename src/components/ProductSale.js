import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import Slider from 'react-slick';



export default function ProductSale() {

  const listProduct = useSelector(state => state.productReducer);


  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }



  return (
    <div className="boxSale">
      <Container>
      <h1 className='boxProduct__title mb-5 text-center'>Best Sale</h1>
        <Slider {...settings} className='list'>
        {listProduct.data && Object.keys(listProduct.data).map(key => listProduct.data[key]).filter(item => item.sale > 0)
          .map((item, index) => {
            return <ProductItem key={index} data={item}/>
          })} 
        
          </Slider> 
      </Container>
    </div>
  )
}
