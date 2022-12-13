import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Cart() {
  const numeral = require('numeral');


  const listProduct = useSelector((state) => state.productReducer.cart);


  const count = (data) => {
    return (data?.price - data?.price * data?.sale / 100)*data?.cartQuantity
  }

  const total = numeral(listProduct?.reduce((a, b) => a + count(b), 0)).format('$0,0.00')
 



  
  return (
    <>
      <Header/>
      <Breadcrumb data={'Shopping Cart'} />
      <Container>
        <Row>
          <Col sm={8}>
              
              {
                listProduct?.map((item, index) => {
                  
                  return <CartItem key={index} data={item} />
                })
              }


          </Col>
          <Col sm={4}>
            <div className="cart__right">
              <div className="cart__right__info"><h3 className='label'>Total</h3>
              <h3 className='value text-end'>{total}</h3></div>

              <button className="cart__button__order">
                Check Out
              </button>
              
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
