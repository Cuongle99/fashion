import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    return (
        <div className='blog__item'>
            <Link to={`/blog/${props.data.id}`}>
            <img src={props.data.image} alt="" className="blog__image" />
            <div className='blog__content'>
                <div className="blog__top">
                    <div className='blog__author'>
                    <i className='bx bx-user'></i> <span>{props.data.author}</span>
                    </div>
                    <div className='blog__date'>
                    <i className='bx bx-calendar' ></i> <span>{props.data.date}</span>
                    </div>
                </div>
                <div className="blog__title">{props.data.name}</div>
            </div>
            </Link>
        </div>
    );
}

export default BlogItem;
