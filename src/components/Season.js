import React from 'react'
import { Link } from 'react-router-dom'

export default function Season() {
  return (
    <div className='season'>
        <h1 className="season__title">
            New Season
        </h1>
        <p className="season__sub">New Collection Release</p>
        <div>
            <Link to={'#'} className="season__button">
                Shop now
            </Link>
        </div>
    </div>
  )
}
