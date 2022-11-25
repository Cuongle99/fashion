import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {customAxios} from '../config/api';



export default function ProductDetail() {
  const params = useParams();

  const productId = params.productId;

  const [detailProduct, setdetailProduct] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const dataDetail = await customAxios.get(`/products/${productId}.json`);
      setdetailProduct(dataDetail.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Header />
        <div className="product__detail">
            <Container>
                <p>{detailProduct?.name}</p>
            </Container>
        </div>
        <Footer />
    </>
  );
}
