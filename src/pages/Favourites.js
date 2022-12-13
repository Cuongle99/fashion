import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

export default function Favourites() {
    const listProduct = useSelector((state) => state.productReducer.data);

    return (
        <>  
            <Header />
            <Breadcrumb data={'Wishlist'} />
            <div className="boxProduct">
                <Container>

                    <Row>
                        {listProduct &&
                            Object.keys(listProduct).map((key) => {
                                if (listProduct[key].isFavourite) {
                                    return (
                                        <Col key={key} md={3}>
                                            <ProductItem
                                                data={listProduct[key]}
                                                id={key}
                                            />
                                        </Col>
                                    );
                                }
                            })}
                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    );
}

