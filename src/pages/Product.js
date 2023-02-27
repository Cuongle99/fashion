import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
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
import { checkTime } from "../utils/constant";

export default function Product() {
    const listProduct = useSelector((state) => state.productReducer); 



    const products = Object.entries(listProduct.data)


    const [dataFillterCate, setdataFillterCate] = useState(null);
    const [dataFillterColor, setdataFillterColor] = useState(null);
    const [dataFillterSize, setdataFillterSize] = useState(null);
    const [sortType, setsortType] = useState('0')


    const products3 = products.filter(([id, item]) => {
        if (dataFillterCate === 'All') {
            return [id, item]
        } else {
            return dataFillterCate === item.category
        }
    })

    const products5 = products3.filter(([id, item]) => {
        if (dataFillterColor === 'All') {
            return [id, item]
        } else {

            return item?.color?.findIndex(itemColor => itemColor === dataFillterColor.toLocaleLowerCase()) >= 0
        }
    })

    const products4 = products5.filter(([id, item]) => {
        if (dataFillterSize === 'All') {
            return [id, item]
        } else {

            return item?.size?.findIndex(itemSize => itemSize.toLocaleLowerCase() === dataFillterSize.toLocaleLowerCase()) >= 0
        }
    })

    let dataProduct = [...products4];


    const handleValueSort = (e) => {
        setsortType(e.target.value)
    }

    if (sortType === '2') {
        dataProduct.sort(([id1, item1], [id2, item2]) => {
            return (item1.price- item1.price*item1.sale/100) - (item2.price - item2.price*item2.sale/100)
        })
    } else if (sortType === '3') {
        dataProduct.sort(([id1, item1], [id2, item2]) => {
            return (item2.price - item2.price*item2.sale/100) - (item1.price- item1.price*item1.sale/100)
        })
    } else if (sortType === '1') {
        dataProduct.sort(([id1, item1], [id2, item2]) => {
            return checkTime(item1.timeupload) - checkTime(item2.timeupload)
        })
    } else {
        dataProduct = products4
    }

    console.log(dataProduct);


    const itemsPerPage = 9;

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = dataProduct.slice(itemOffset, endOffset)

    const pageCount = Math.ceil(dataProduct.length / itemsPerPage)

    const handlePageClick = (event) => {

        const newOffset = (event.selected * itemsPerPage) % dataProduct.length 
        setItemOffset(newOffset);
    };

    const fillterData = (data) => {
        setdataFillterCate(data.cate);
        setdataFillterColor(data.color)
        setdataFillterSize(data.size)
    }

    return (
        <>
            <Header />
            <Breadcrumb data={'Products'} />
            <div className="product_List_pages">
                <Container>
                    <Row>
                        <Col md={3}>
                                <ProductFilter fillterData={fillterData} />
                        </Col>
                        <Col md={9}>
                            <div className="product__sort mb-4">
                                <Row>
                                <Col md={6}>aksdhjksdskljdlksajd</Col>
                                <Col md={6}>
                                    <Form.Select aria-label="Default select example" onChange={handleValueSort}>
                                        <option value="0">Default sorting</option>
                                        <option value="1">Sort by latest</option>
                                        <option value="2">Sort by price: low to high</option>
                                        <option value="3">Sort by price: high to low</option>
                                    </Form.Select>
                                </Col>
                                </Row>
                                
                            </div>
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
