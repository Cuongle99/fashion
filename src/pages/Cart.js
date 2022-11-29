import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Cart() {


  const listProduct = useSelector((state) => state.productReducer.cart);


  // useEffect(() => {
  //   setlistCartProducts(listCartProduct[localId])
  // });






  


  
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col sm={8}>
          <h2 className='mb-5'>Shopping Cart</h2>
              {
                listProduct?.map((item, index) => {
                  
                  return <CartItem key={index} data={item} />
                })
              }


          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
