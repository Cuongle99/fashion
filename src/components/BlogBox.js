import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import BlogItem from './BlogItem';

const BlogBox = () => {

    const listBlog = useSelector(state => state.blogReducer);

    const settings1 = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        accessibility: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className='boxBlog'>
            <Container>
                <h1 className="mb-5 text-center">Blog News</h1>
                <Slider {...settings1} className='list'>
                    {
                        listBlog.data && Object.keys(listBlog.data).map( key => {
                            
                            return <BlogItem key={key} data={listBlog.data[key]} />
                        })
                    }
                </Slider>
            </Container>
        </div>
    );
}

export default BlogBox;
