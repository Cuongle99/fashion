import React, { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchProduct } from "../redux/Product/productSearchSlice";
import SearchItemProduct from "./SearchItemProduct";

export default function SearchModal() {

    const productList = useSelector(state => state.productReducer.data);

    const [showSearch, setShowSearch] = useState(false);
    const [textInput, setTextInput]  = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClose = () => {
        setShowSearch(false);
    };
    const handleShow = () => setShowSearch(true);

    const handleInput = (e) => {
        setTextInput(e.target.value);
    }

    const findIndex = (a, b) => {
        const result = a.toLowerCase().indexOf(b.toLowerCase());
        return result
    }

    const getListProductSearch = () => {
        const dataSearch = Object.keys(productList).filter(key => {
            if (findIndex(productList[key].name, textInput) !== -1) {
                return productList[key]
            }
        })
        return dataSearch
    }


    const handleSearchEnter = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13){
            handleClose()
            if (textInput) {
                navigate('/product-search');
                dispatch(getSearchProduct(getListProductSearch()))
            } else {
                e.preventDefault()
            }
        }
        
    }


    return (
        <>
            <i className="bx bx-search" onClick={handleShow}></i>
            <Modal
                size="lg"
                show={showSearch}
                onHide={handleClose}
                className="search__modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Search Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <Form.Group
                            className="mb-3"
                            
                        >
                            <Form.Control
                                type="text"
                                placeholder="Name product"
                                onChange={handleInput}
                                value={textInput}
                                onKeyUp={handleSearchEnter}
                            />
                        </Form.Group>
                    

                    <div className="products__search__list">
                        {
                            textInput && Object.keys(productList).map(key => {

                                if (findIndex(productList[key].name, textInput) !== -1) {
                                    return <SearchItemProduct key={key} data={productList[key]} id={key} />
                                }

                            })
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
