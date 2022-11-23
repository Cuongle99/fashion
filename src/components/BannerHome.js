import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import banner4 from '../assets/images/banner4.jpg';
import { Link } from 'react-router-dom'

export default function BannerHome() {

  return (
    <div className='bannerHome'>
        <Container >
            <Row>
                <Col md={6}>
                    <div className='banner__item'>
                        <img src={banner1} alt="" />
                        <div className="banner__content">
                            <h4 className="banner__title">BASIC COLLECTION</h4>
                            <h4 className="banner__sub-title">New Arrivals</h4>
                            <div><Link to={"#"} className="btn_link">Shop now</Link></div>
                        </div>
                    </div>
                    <div className='banner__item'>
                        <img src={banner3} alt="" />
                        <div className="banner__content">
                            <h4 className="banner__title">SHOP CASUAL</h4>
                            <h4 className="banner__sub-title">Free Shipping</h4>
                            <div><Link to={"#"} className="btn_link">Shop now</Link></div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="banner__item">
                        <img src={banner2} alt="" />
                        <div className="banner__content">
                            <h4 className="banner__title">WANT AND NEED</h4>
                            <h4 className="banner__sub-title">The Everygirl Wears</h4>
                            <div><Link to={"#"} className="btn_link">Shop now</Link></div>
                        </div>
                    </div>
                    <div className="banner__item">
                        <img src={banner4} alt="" />
                        <div className="banner__content">
                            <h4 className="banner__title">SALE OFF THIS WEEK</h4>
                            <h4 className="banner__sub-title">Running Shoes</h4>
                            <div><Link to={"#"} className="btn_link">Shop now</Link></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
