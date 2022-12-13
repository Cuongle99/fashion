import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { checkTime } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
    addCart,
    addCartCheck2,
    favouriteProduct,
} from "../redux/Product/productSlice";
import { customAxios } from "../config/api";

const numeral = require("numeral");

export default function ProductItem(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const [itemProduct, setitemProduct] = useState(props.data);

    const token = useSelector((state) => state.userReducer.token);
    const carts = useSelector((state) => state.productReducer.cart);

    

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const addCartCheck1 = (datas) => {
        const index = carts?.findIndex((item) => item.idCart === datas.id);

        if (index < 0) {
            dispatch(addCart(datas));
        } else {
            dispatch(addCartCheck2(datas));
        }
        handleShow2()
    };

    const addFavourite = async (id) => {
        try {
            dispatch(favouriteProduct(id));
            await customAxios.patch(`/products/${id}.json`, {
                ...props.data,
                isFavourite: !props.data?.isFavourite,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card className="product__card">
            <Link to={`/products/${props.id}`}>
                <Card.Header>
                    <div className="product__images">
                        <Card.Img className={props.data.image.length > 1 ? 'product__images__active' : null} variant="top" src={props.data.image[0]} />
                        {
                            props.data.image.length > 1 ? <Card.Img className="product__images__hover" variant="top" src={props.data.image[1]} /> : null
                        }
                    </div>
                    
                    <div className="product__flags">
                        {props.data.sale > 0 ? (
                            <span className="product__flag">
                                {"-" + props.data.sale + "%"}
                            </span>
                        ) : null}
                        {checkTime(props.data.timeupload) < 50 ? (
                            <span className="product__flag new"> New </span>
                        ) : null}
                    </div>
                    <div className="product__addCart">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                token === null
                                    ? handleShow()
                                    : addCartCheck1({
                                          id: props.id,
                                          quantity: 1,
                                          data: props.data,
                                      });
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text
                        className="product__category"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/product/${props.data.category}`);
                        }}
                    >
                        {props.data.category}
                    </Card.Text>
                    <Card.Title className="product__name">
                        {props.data.name}
                    </Card.Title>
                    <Card.Text className="product__price">
                        {props.data.sale > 0 ? (
                            <>
                                <span className="product__price-default">
                                    {numeral(props.data.price).format(
                                        "$0,0.00"
                                    )}
                                </span>{" "}
                                -
                                <span className="product__price-sale">
                                    {" "}
                                    {numeral(
                                        props.data.price -
                                            (props.data.price *
                                                props.data.sale) /
                                                100
                                    ).format("$0,0.00")}
                                </span>{" "}
                            </>
                        ) : (
                            <span className="product__price-sale">
                                {numeral(props.data.price).format("$0,0.00")}
                            </span>
                        )}
                    </Card.Text>
                    <div
                        className="product__wishlist"
                        onClick={(e) => {
                            e.preventDefault();
                            token === null
                                ? handleShow()
                                : addFavourite(props.id);
                        }}
                    >
                        <i
                            className="bx bx-heart"
                            style={
                                props.data.isFavourite
                                    ? { color: "#C32929" }
                                    : { color: "#222" }
                            }
                        ></i>
                    </div>
                </Card.Body>
            </Link>

            <Modal show={showModal} onHide={handleClose} animation={true}>
                <Modal.Body>
                    You must be logged in to manage your wishlist.{" "}
                    <Link to={"/signin"}>Login Now</Link>
                </Modal.Body>
            </Modal>
            <Modal
                show={showModal2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Link to={"/cart"} >Understood</Link>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}
