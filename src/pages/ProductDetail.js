import { Numeral } from 'numeral';
import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {customAxios} from '../config/api';
import Slider from "react-slick";
import ProductItem from '../components/ProductItem';

const numeral = require('numeral');

export default function ProductDetail() {
  const params = useParams();

  const productId = params.productId;

  const [detailProduct, setdetailProduct] = useState(null);

  const [quantity, setQuantity] = useState(1)
  const updateQuantity = (type) => {
    if (type === 'plus') {
        setQuantity(quantity + 1)
    } else {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
}

  const listProduct = useSelector(state => state.productReducer)

  useEffect(() => {
    getDetail();
  });

  const getDetail = async () => {
    try {
      const dataDetail = await customAxios.get(`/products/${productId}.json`);
      setdetailProduct(dataDetail.data);
    } catch (error) {
      console.log(error);
    }
  };

  const settings_1 = {
        dots: true,
        infinite: true,
        // accessibility: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rows: 1,
    };

  return (
    <>
        <Header />
        <div className="product__detail">
            <Container>
                <Row>
                  <Col md={6}>
                    <div className="product__detail__image">
                      <img src={detailProduct?.image} alt="" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="product__detail__content">
                      <h1 className="product__detail__name">
                        {detailProduct?.name}
                      </h1>
                      <div className="product__price">
                      {detailProduct?.sale > 0 ? (<><span className="product__price-default">{numeral(detailProduct?.price).format('$0,0.00')}</span> -
                    <span className="product__price-sale"> {numeral(detailProduct?.price - detailProduct?.price*detailProduct?.sale/100).format('$0,0.00')}</span> </>) : <span className="product__price-sale">{numeral(detailProduct?.price).format('$0,0.00')}</span>}
                      </div>
                      <p className='product__description mt-3'>{detailProduct?.description}</p>
                      <div className='add-to-cart mt-5 mb-5'>
                      <div className="add-cart-quantity">
                        <div className="addCart__quantity__btn minus" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="addCart__quantity__input">
                            {quantity}
                        </div>
                        <div className="addCart__quantity__btn plus" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>

                        <Button className='product__detail__addcart'>Add To Cart</Button>
                      </div>
                      <div className='mb-2'>
                        <span className="product__detail__label">Category : </span>
                        <span className="product__detail__text"><Link to={"/category"}>{detailProduct?.category}</Link></span>
                      </div>
                      <div>
                        <span className="product__detail__label">Quantity : </span>
                        <span className="product__detail__text">{detailProduct?.quantity}</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Slider {...settings_1} className="list mt-5">
                    {
                      
                    listProduct.data &&
                            Object.keys(listProduct.data).map((key) => {
                                return listProduct.data[key]?.category === detailProduct?.category ?
                                    <ProductItem
                                        key={key}
                                        data={listProduct.data[key]}
                                        id={key}
                                    /> : null
                                
                            })
                    }
                </Slider>
            </Container>
        </div>
        <Footer />
    </>
  );
}

