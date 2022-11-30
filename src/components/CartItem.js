import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCart } from '../redux/Product/productSlice';

export default function CartItem(props) {

    const numeral = require('numeral');
    const dispatch = useDispatch();
  return (
    <div className='cart__item'>
        <Link to={`/products/${props.data.idCart}`}>
        <img src={props.data?.image[0]} alt="" />
        <div className="cart__info">
            <h3 className="cart__name">{props.data?.name}</h3>
            <div className='cart__price'>
                {props.data?.sale > 0 ? <>
                    <span className='no-price'>{numeral(props.data?.price).format('$0,0.00')}</span> - 
                    <span> {numeral(props.data?.price - props.data?.price*props.data?.sale/100).format('$0,0.00')}</span>
                </> : <span>{numeral(props.data?.price).format('$0,0.00')}</span>}
            </div>
            
        </div>
        <div className="cart__quantity">
            <h3>x {props.data?.cartQuantity}</h3>
            <i className='bx bx-trash' onClick={() => dispatch(deleteCart(props.data.idCart))}></i>
        </div>
        </Link>
    </div>
  )
}
