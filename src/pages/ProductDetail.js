import { Numeral } from 'numeral';
import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {customAxios} from '../config/api';
import Slider from "react-slick";
import ProductItem from '../components/ProductItem';
import { addCart, addCartCheck2 } from '../redux/Product/productSlice';
import Breadcrumb from '../components/Breadcrumb';

const numeral = require('numeral');

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [useSelectColor, setuseSelectColor] = useState(null);
  const [useSelectSize, setuseSelectSize] = useState(null);

  const [quantity, setQuantity] = useState(1)
  const updateQuantity = (type) => {
    if (type === 'plus') {
        setQuantity(quantity + 1)
    } else {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
}

  const listProduct = useSelector(state => state.productReducer);
  const token = useSelector(state => state.userReducer.token);
  const productIndex = listProduct?.data[productId]



  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const carts = useSelector(state => state.productReducer.cart);

  const addCartCheck1 = (datas) => {

    const add = () => {
      const index =  carts?.findIndex(item => item.idCart === datas.id)
      
      if (index < 0) {
          dispatch(addCart(datas))
      } else {  
          dispatch(addCartCheck2(datas))
      }
      navigate('/cart')
    }

    if(productIndex?.size) {
      if (useSelectSize) {
        add();
      }
    } else if (productIndex?.color) {
      if (useSelectColor) {
        add()
      }
    } else  {
      add()
    }
      
  }




  const settings_1 = {
        dots: true,
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rows: 1,
    };


    const settings_2   = {
      customPaging: function(i) {
        return (
          <a>
            <img src={productIndex?.image[i]} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    

  return (
    <>
        <Header />
        <Breadcrumb data={'Product Detail'} />
        <div className="product__detail">
            <Container>
                <Row>
                  <Col md={5}>
                    <div className="product__detail__image">
                      {/* <img src={productIndex?.image} alt="" /> */}

                        <Slider {...settings_2}>
                          {productIndex?.image.map((item, index) => {
                            return  <div key={index}><img src={productIndex?.image[index]}/></div>
                          })}
                        </Slider>
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="product__detail__content">
                      <h1 className="product__detail__name">
                        {productIndex?.name}
                      </h1>
                      <div className="product__price">
                      {productIndex?.sale > 0 ? (<><span className="product__price-default">{numeral(productIndex?.price).format('$0,0.00')}</span> -
                    <span className="product__price-sale"> {numeral(productIndex?.price - productIndex?.price*productIndex?.sale/100).format('$0,0.00')}</span> </>) : <span className="product__price-sale">{numeral(productIndex?.price).format('$0,0.00')}</span>}
                      </div>
                      <p className='product__description mt-3'>{productIndex?.description}</p>

                      <div className="product__variants">
                      {
                        productIndex?.color ? <div className="product__variants__item color">
                            <span className="control__label">Color: </span>
                            <ul>
                              {
                                productIndex && productIndex?.color?.map((item, index) => {
                                  return <li key={index} className={index === useSelectColor ? "active" : null} onClick = {() => {
                                    index === useSelectColor ? setuseSelectColor(null) : setuseSelectColor(index);
                                  }}>{item}</li>
                                })
                              }
                            </ul>
                          </div> : null
                      }

                      {
                        productIndex?.size ? <div className="product__variants__item size">
                            <span className="control__label">Size: </span>
                            <ul>
                              {
                                productIndex && productIndex?.size?.map((item, index) => {
                                  return <li key={index} className={index === useSelectSize ? "active" : null} onClick = {() => {
                                    index === useSelectSize ? setuseSelectSize(null) : setuseSelectSize(index);
                                  }}>{item}</li>
                                })
                              }
                            </ul>
                          </div> : null
                      }
                          

                          
                      </div>

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

                        <Button className='product__detail__addcart' onClick={ (e) => {
                    e.preventDefault();
                    token === null ? handleShow() : addCartCheck1({id: productId, quantity: quantity, data: productIndex})
                   }}>Add To Cart</Button>
                      </div>
                      <div className='mb-2'>
                        <span className="product__detail__label">Category : </span>
                        <span className="product__detail__text"><Link to={"/category"}>{productIndex?.category}</Link></span>
                      </div>
                      <div>
                        <span className="product__detail__label">Quantity : </span>
                        <span className="product__detail__text">{productIndex?.quantity}</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                

                <Slider {...settings_1} className="list mt-5">
                    {
                      
                  
                      
                    listProduct.data &&
                            Object.keys(listProduct.data).map((key) => {
                              if (listProduct.data[key].category === productIndex.category) 
                              {
                                return <ProductItem key={key} data={listProduct.data[key]} id={key} />
                                
                              }
                            })
                    }
                </Slider>
            </Container>
            
            <Modal show={showModal} onHide={handleClose} animation={true}>
        
            <Modal.Body >You must be logged in to manage your wishlist. <Link to={"/signin"}>Login Now</Link></Modal.Body> </Modal>
        </div>
        <Footer />
    </>
  );
}

