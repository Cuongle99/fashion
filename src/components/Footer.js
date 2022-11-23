import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
      <div className="footer__content">
      <Row>
          <Col md={3}>
            <div className="footer__item footer_social">
              <h3 className="footer__title mb-4">Social</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to={"#"}><i className='bx bxl-facebook-circle'></i> Facebook</Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"#"}><i className='bx bxl-instagram' ></i> Instagram</Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"#"}> <i className='bx bxl-youtube' ></i> Youtube</Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"#"}><i className='bx bxl-twitter' ></i> Twitter</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer__item footer__contact">
            <h3 className="footer__title mb-4">Contact</h3>
            <ul className="footer__list">
              <li className="footer__list-item"><Link to={"#"}>Contact us</Link></li>
              <li className="footer__list-item"><Link to={"#"}>demo@demo.com</Link></li>
              <li className="footer__list-item"><Link to={"#"}>0123.456.789</Link></li>
            </ul>   
            </div>
          </Col>
          <Col md={3}>
            <div className="footer__item">
              <h3 className="footer__title mb-4">About</h3>
              <ul className="footer__list">
                <li className="footer__list-item"><Link to={"#"}>Support Center</Link></li>
                <li className="footer__list-item"><Link to={"#"}>Customer Support</Link></li>
                <li className="footer__list-item"><Link to={"#"}>About Us</Link></li>
                <li className="footer__list-item"><Link to={"#"}>FAQs</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer__item">
              <h3 className="footer__title mb-4">Categories</h3>
              <ul className="footer__list">
                <li className="footer__list-item"><Link to={"#"}>Men's Wear</Link></li>
                <li className="footer__list-item"><Link to={"#"}>Women's Wear</Link></li>
                <li className="footer__list-item"><Link to={"#"}>Kids's Wear</Link></li>
                <li className="footer__list-item"><Link to={"#"}>Sport's Wear</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
        
        <div className="footer__bottom">
          <Row className='align-items-center'>
            <Col md={6}>
              <p>@2022 Fashion</p>
            </Col>
            <Col md={6}>
              <div className='footer__card'>
                <ul className='d-flex justify-content-end'>
                  <li><Link to={"#"}><i className='bx bxl-paypal' ></i></Link></li>
                  <li><Link to={"#"}><i className='bx bxl-visa' ></i></Link></li>
                  <li><Link to={"#"}><i className='bx bxl-mastercard' ></i></Link></li>
                  <li><Link to={"#"}><i className='bx bx-credit-card-alt' ></i></Link></li>
                  <li><Link to={"#"}><i className='bx bxl-bitcoin' ></i></Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
