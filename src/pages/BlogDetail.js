import React,  {useEffect} from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogDetail() {
    const params = useParams();
    const index = params.blogId;

    const listBlog = useSelector((state) => state.blogReducer.data);

    const currentBlog = listBlog[index];


    useEffect(() => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    });
    return (
        <>
            <Header />
            <Breadcrumb data={"Blog Detail"} />
            <Container>
                <div className="blog__detail__content">
                    <h1 className="blog__detail__title mb-2">
                        {currentBlog.name}
                    </h1>
                    <div className="blog__detail__info mb-3">
                        <span>Post by: {currentBlog.author}</span> -{" "}
                        <span> On: {currentBlog.date}</span>
                    </div>

                    <div className="blog__detail__image">
                        <img src={currentBlog.image} alt="" />
                    </div>
                    <p className="blog__detail__des mt-3">
                        {currentBlog.description}
                    </p>
                </div>
            </Container>
            <Footer />
        </>
    );
}
