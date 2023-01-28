import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { checkTime } from '../utils/constant';
import ProductItem from './ProductItem';


export default function ProductNew() {

  const listProduct = useSelector(state => state.productReducer);

  

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

  return (
    <div className="boxNew">
      <Container>
      <h1 className='boxProduct__title mb-5 text-center'>News Product</h1>
        
        <Slider {...settings} className='list'>
          {/* {listProduct.data &&  Object.keys(listProduct.data).map(key => listProduct.data[key]).filter(item => checkTime(item.timeupload) < 50).map((item, index) => {
            return <ProductItem  data={item} key={index}/>
          })} */}

          {
            listProduct.data && Object.keys(listProduct.data).map(key => {

              if(checkTime(listProduct.data[key].timeupload) < 100) {
                return <ProductItem data={listProduct.data[key]} key={key} id={key} />
              }
            })
          }
        </Slider> 
      </Container>
    </div>
  )
}
