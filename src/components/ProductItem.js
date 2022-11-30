import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { checkTime } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {  addCart, addCartCheck2, favouriteProduct } from "../redux/Product/productSlice";
import { customAxios } from "../config/api";


const numeral = require('numeral');

export default function ProductItem(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // const [itemProduct, setitemProduct] = useState(props.data);

    const token = useSelector(state => state.userReducer.token);
    const carts = useSelector(state => state.productReducer.cart);

    const addCartCheck1 = (datas) => {
        const index =  carts?.findIndex(item => item.idCart === datas.id)

        if (index < 0) {
            dispatch(addCart(datas))
        } else {
            dispatch(addCartCheck2(datas))
        }
    }





    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const addFavourite = async (id) => {
        try {
            dispatch(favouriteProduct(id))
            await customAxios.patch(`/products/${id}.json`, {...props.data, isFavourite: !props.data?.isFavourite})
        } catch (error) {
            console.log(error);
        }

        
    }


    

    return (
        <Card className="product__card">
            <Link to={`/products/${props.id}`} >
            <Card.Header>
                <Card.Img variant="top" src={props.data.image} />
                <div className="product__flags">
                    {props.data.sale > 0 ? <span className="product__flag">{"-" + props.data.sale + "%"}</span> : null}
                    {checkTime(props.data.timeupload) < 50 ? <span className="product__flag new"> New </span> : null}
                </div>
                <div className="product__addCart">
                   <button onClick={ (e) => {
                    e.preventDefault();
                    token === null ? handleShow() : addCartCheck1({id: props.id, quantity: 1, data: props.data})
                   }}>Add to cart</button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text className="product__category" onClick={ (e) => {
                       e.preventDefault();
                        navigate('/category')
                }}>
                {props.data.category}
                </Card.Text>
                <Card.Title className="product__name">{props.data.name}</Card.Title>
                <Card.Text className="product__price">

                    {props.data.sale > 0 ? (<><span className="product__price-default">{numeral(props.data.price).format('$0,0.00')}</span> -
                    <span className="product__price-sale"> {numeral(props.data.price - props.data.price*props.data.sale/100).format('$0,0.00')}</span> </>) : <span className="product__price-sale">{numeral(props.data.price).format('$0,0.00')}</span>}
                </Card.Text>
                    <div className="product__wishlist" onClick={(e) => {
                        e.preventDefault();
                        token === null ? handleShow() : addFavourite(props.id)
                        
                    }}>
                    <i className='bx bx-heart' style={ props.data.isFavourite ? {color: '#C32929'} : {color: '#222'} }></i>
                </div>
            </Card.Body>
            </Link>

            <Modal show={showModal} onHide={handleClose} animation={true}>
        
            <Modal.Body >You must be logged in to manage your wishlist. <Link to={"/signin"}>Login Now</Link></Modal.Body>

      </Modal>
        </Card>
    );
}


    // "category": "Men",
    // "description": "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
    // "image": "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=384&q=100",
    // "isFavourite": false,
    // "name": "Regular Fit Crew-neck T-shirt",
    // "price": 12.3,
    // "quantity": 150,
    // "sale": 10,
    // "timeupload": "2022/5/19"