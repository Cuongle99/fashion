import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { getListProduct } from "../redux/Product/productSlice";
import ReactPaginate from "react-paginate";
import BackToTop from "../components/BackToTop";

export default function Product() {
    const listProduct = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    const [productList, setProductList] = useState(
        {
            key: null,
            value: null
        }
    )

    useEffect(() => {
        dispatch(getListProduct());
        // Object.keys(listProduct.data).map(
        //     (key) => setProductList({key: key, value: listProduct.data[key]})
        // );
    });

    

    console.log(productList);


    // const itemsPerPage = 9;

    // const [itemOffset, setItemOffset] = useState(0);

    // const endOffset = itemOffset + itemsPerPage;
    // const currentItems = products.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(products.length / itemsPerPage);

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % products.length;
    //     setItemOffset(newOffset);
    // };

    return (
        <>
            <Header />
            {/* <div className="product_List_pages">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="product__filter"></div>
                        </Col>
                        <Col md={9}>
                            <div className="product__list">
                                <Row>
                                    {currentItems.map(
                                            (item, index) => {
                                                return (
                                                    <Col key={index} md={4}>
                                                        <ProductItem
                                                            data={item
                                                            }
                                                        />
                                                    </Col>
                                                );
                                            }
                                        )}
                                </Row>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="< previous"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <Footer />
            <BackToTop />
        </>
    );
}
