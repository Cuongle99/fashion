import React from 'react'
import bg1 from '../assets/images/breadcrumb_shop.png'


export default function Breadcrumb(props) {

  return (
    <div className='breadcrumb'>
        <img src={bg1} alt="" />
        <h1 className="breadcrumb__title">{props.data}</h1>
    </div>   
  )
}
