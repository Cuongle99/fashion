import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { favouriteProducts, getListProduct } from "../redux/Product/productSlice";
import ReactPaginate from "react-paginate";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilter from "../components/ProductFilter";

export default function Product() {
    const listProduct = useSelector((state) => state.productReducer);

    const products = Object.entries(listProduct.data)
    const params = useParams()
    const category = params.category

    const products2 = products.filter(([id, item], index) => {
        if (category) {
            if (item.category === category) {
                return [id, item]
            }
        } else {
            return [id, item]
        }
    })

    useEffect(() => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    });

    


    



    const itemsPerPage = 9;

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products2.slice(itemOffset, endOffset);

    
    const pageCount = Math.ceil(products2.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products2.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Header />
            <Breadcrumb data={'Products'} />
            <div className="product_List_pages">
                <Container>
                    <Row>
                        <Col md={3}>
                                <ProductFilter />
                        </Col>
                        <Col md={9}>
                            <div className="product__list">
                                <Row>
                                    {currentItems.map(
                                            ([id, item], index) => {
                                                return (
                                                    <Col key={index} md={4}>
                                                        <ProductItem
                                                            data={item
                                                            } id={id}
                                                        />
                                                    </Col>
                                                );
                                            }
                                        )}
                                </Row>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=" >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
