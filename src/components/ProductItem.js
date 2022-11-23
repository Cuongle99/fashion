import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { checkTime } from "../utils/constant";


const numeral = require('numeral');

export default function ProductItem(props) {
    const navigate = useNavigate();


    return (
        <Card className="product__card">
            <Link to={"/product"} >
            <Card.Header>
                <Card.Img variant="top" src={props.data.image} />
                <div className="product__flags">
                    {props.data.sale > 0 ? <span className="product__flag">{"-" + props.data.sale + "%"}</span> : null}
                    {checkTime(props.data.timeupload) < 50 ? <span className="product__flag new"> New </span> : null}
                </div>
                <div className="product__addCart">
                   <button onClick={ (e) => {
                    e.preventDefault();
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
                    <span className="product__price-default">{numeral(props.data.price).format('$0,0.00')}</span> - 
                    <span className="product__price-sale"> {numeral(props.data.price - props.data.price*props.data.sale/100).format('$0,0.00')}</span>
                </Card.Text>
                    <div className="product__wishlist" onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <i className='bx bx-heart'></i>
                </div>
            </Card.Body>
            </Link>
        </Card>
    );
}
