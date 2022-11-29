import React from 'react'

export default function CartItem(props) {

    console.log(props.data);
    const numeral = require('numeral');
  return (
    <div className='cart__item'>
        <img src={props.data?.image} alt="" />
        <div className="cart__info">
            <h3 className="cart__name">{props.data?.name}</h3>
            <div className='cart__price'>
                {props.data?.sale > 0 ? <>
                    <span className='no-price'>{numeral(props.data?.price).format('$0,0.00')}</span> - 
                    <span> {numeral(props.data?.price - props.data?.price*props.data?.sale/100).format('$0,0.00')}</span>
                </> : <span>{numeral(props.data?.price).format('$0,0.00')}</span>}
            </div>
            <h3>{props.data?.cartQuantity}</h3>
        </div>
    </div>
  )
}
