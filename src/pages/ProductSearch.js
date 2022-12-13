import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

export default function ProductSearch() {
    const searchProducts = useSelector((state) => state.searchReducer.data);
    const listProducts = useSelector((state) => state.productReducer.data);

    return (
        <>
            <Header />
            <Breadcrumb data={"Product Search"} />
            <Container>
                <Row className="list">
                    {searchProducts &&
                        searchProducts.map((item, index) => {
                            return (
                                <Col sm={3} key={item}><ProductItem
                                    
                                    data={listProducts[item]}
                                    id={item}
                                />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
            <Footer />
        </>
    );
}
